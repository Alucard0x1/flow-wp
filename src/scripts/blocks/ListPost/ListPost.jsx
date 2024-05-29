import pickBy from 'lodash/pickBy'
import isUndefined from 'lodash/isUndefined'
import get from 'lodash/get'
import filter from 'lodash/filter'
import remove from 'lodash/remove'
import map from 'lodash/map'
import PropTypes from "prop-types"

const { useState, useEffect, RawHTML } = wp.element
const { withSelect, select } = wp.data
const { InspectorControls } = wp.blockEditor
const {
    PanelBody, SelectControl, QueryControls,
    Placeholder, Spinner, TextareaControl, TextControl
} = wp.components


const ListPost = ({
    attributes, setAttributes,
    postTypes, latestPosts
}) => {
    const {
        postType, order, orderBy,
        postsToShow, categories
    } = attributes
    const [categoriesList,] = useState([])
    const hasPosts = !!latestPosts?.length

    const [, setDisplayPosts] = useState([])

    useEffect(() => {
        if (latestPosts != null) {
            const displayPosts = latestPosts.length > postsToShow ?
                latestPosts.slice(0, postsToShow)
                : latestPosts

            setDisplayPosts(displayPosts)
        }
    }, [latestPosts])

    const getPostTypeOptions = () => {
        const postTypeOptions = map(postTypes, (postType) => {
            return {
                value: postType.slug,
                label: postType.name
            }
        })

        return [...postTypeOptions]
    }

    const postTypeOptions = getPostTypeOptions()
    const ServerSideRender = wp.serverSideRender

    return (
        <>
            <InspectorControls>
                <PanelBody
                    title="Sorting and filtering"
                >
                    <SelectControl
                        label="Post type"
                        options={postTypeOptions}
                        value={postType}
                        onChange={(postType) => setAttributes({ postType })}
                    />
                    {(postType === 'post' || postType === 'program') &&
                        <SelectControl
                            label="Post Template"
                            options={[
                                { value: 'basic', label: 'Basic' },
                                { value: 'full', label: 'Full' },
                            ]}
                            onChange={(template) => setAttributes({
                                posts: {
                                    ...attributes.posts,
                                    template
                                }
                            })}
                        />
                    }

                    {(postType === 'program' &&
                        <TextControl
                            label="Category"
                            value={attributes.posts.category}
                            onChange={(category) => {
                                const postsCopy = { ...attributes.posts }
                                postsCopy.category = category

                                setAttributes({ posts: postsCopy })
                            }}
                        />
                    )}

                    {(postType === 'program' &&
                        <TextControl
                            label="Num"
                            value={attributes.posts.num}
                            onChange={(num) => {
                                const postsCopy = { ...attributes.posts }
                                postsCopy.num = num

                                setAttributes({ posts: postsCopy })
                            }}
                        />
                    )}

                    <QueryControls
                        {...{ order, orderBy }}
                        numberOfItems={postsToShow}
                        categoriesList={categoriesList}
                        selectedCategoryId={categories}
                        onOrderChange={(order) => setAttributes({ order })}
                        onOrderByChange={(orderBy) => setAttributes({ orderBy })}
                        onNumberOfItemsChange={(postsToShow) => setAttributes({ postsToShow })}
                    />
                </PanelBody>
            </InspectorControls>
            <section className="list-post">
                {!hasPosts && (
                    <Placeholder
                        icon="admin-post"
                        label="Latest posts"
                    >
                        {!Array.isArray(latestPosts) ? (
                            <Spinner />
                        ) : (
                            "No posts found."
                        )}
                    </Placeholder>
                )}

                <ServerSideRender
                    block="media108/list-post"
                    attributes={attributes}
                />
            </section>
        </>
    )
}

ListPost.propTypes = {
    attributes: PropTypes.shape({
        postType: PropTypes.string,
        order: PropTypes.string,
        orderBy: PropTypes.string,
        postsToShow: PropTypes.number,
        categories: PropTypes.array,
    }),
    setAttributes: PropTypes.func,
    isSelected: PropTypes.bool,
    postTypes: PropTypes.array,
    latestPosts: PropTypes.array
}

const WrappedListPost = withSelect((select, props) => {
    const {
        postType, categories, order, orderBy, postsToShow,
        taxonomy, featuredImageSizeSlug
    } = props.attributes

    const { getEntityRecords, getPostTypes, getTaxonomies, getMedia } = select('core')

    const postTypes = filter(getPostTypes({ per_page: -1 }), {
        viewable: true,
    })

    remove(postTypes, { slug: 'attachment' })

    const taxonomies = filter(getTaxonomies(), {
        types: [postType],
    })

    let latestPostsQuery

    if (postType === 'post') {
        latestPostsQuery = {
            categories,
            order,
            orderby: orderBy,
            per_page: postsToShow,
        }
    } else {
        latestPostsQuery = {
            order,
            orderby: orderBy,
            per_page: postsToShow
        }

        latestPostsQuery[taxonomy] = categories
    }

    latestPostsQuery = pickBy(latestPostsQuery, (value) => !isUndefined(value))

    const posts = getEntityRecords('postType', postType, latestPostsQuery)

    return {
        postTypes,
        taxonomies,
        latestPosts: !Array.isArray(posts)
            ? posts
            : posts.map((post) => {
                if (post.featured_media) {
                    const image = getMedia(post.featured_media)
                    let url = get(
                        image,
                        [
                            'media_details',
                            'sizes',
                            featuredImageSizeSlug,
                            'source_url'
                        ],
                        null
                    )

                    if (!url) {
                        url = get(image, 'source_url', null)
                    }

                    return {
                        ...post,
                        featuredImageSourceUrl: url
                    }
                }

                return post
            })
    }
})(ListPost)

export default WrappedListPost

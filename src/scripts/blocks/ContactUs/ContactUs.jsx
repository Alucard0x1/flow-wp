import useRichText from "../../hooks/useRichText";
import "./ContactUs.scss";
const { URLInputButton } = wp.blockEditor;

const ContactUs = ({ attributes, setAttributes, isSelected }) => {
  const Text = useRichText(isSelected);

  return (
    <section className="contact-us">
      <div className="container">
        <Text
          className="description-1"
          tagName="p"
          value={attributes.description_1}
          onChange={(description_1) => setAttributes({ description_1 })}
        />

        <div className="contacts">
          <a
            rel="noopener noreferrer"
            href="https://wa.me/6283877777621"
            className="contact phone"
          >
            <span className="icon"></span>
            <span className="text">+628 387 777 7621</span>
          </a>
          <a
            rel="noopener noreferrer"
            href="mailto:contact@workatflow.com"
            className="contact email"
          >
            <span className="icon"></span>
            <span className="text">contact@workatflow.com</span>
          </a>
        </div>

        <Text
          tagName="a"
          className="btn btn-rounded"
          href={attributes.link_1.url}
          target="_blank"
          rel="noopener noreferrer"
          value={attributes.link_1.title}
          onChange={(title) =>
            setAttributes({
              link_1: {
                title,
              },
            })
          }
        />

        {isSelected && (
          <URLInputButton
            url={attributes.link_1.url}
            onChange={(url, post) => {
              setAttributes({
                link: {
                  url,
                  title: post && post.title,
                },
              });
            }}
          />
        )}

        <Text
          className="description-2"
          tagName="p"
          value={attributes.description_2}
          onChange={(description_2) => setAttributes({ description_2 })}
        />

        <Text
          tagName="a"
          className="btn btn-rounded"
          href={attributes.link_2.url}
          target="_blank"
          rel="noopener noreferrer"
          value={attributes.link_2.title}
          onChange={(title) =>
            setAttributes({
              link_2: {
                title,
              },
            })
          }
        />

        {isSelected && (
          <URLInputButton
            url={attributes.link_2.url}
            onChange={(url, post) => {
              setAttributes({
                link: {
                  url,
                  title: post && post.title,
                },
              });
            }}
          />
        )}
      </div>
    </section>
  );
};

export default ContactUs;

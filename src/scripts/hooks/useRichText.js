const { RichText } = wp.blockEditor

const useRichText = (isSelected) => (
    isSelected ? RichText : RichText.Content
)

export default useRichText

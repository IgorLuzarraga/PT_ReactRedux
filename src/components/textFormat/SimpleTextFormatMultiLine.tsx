import { getTextFirstLine, getTextExceptFirstLine } from "../../utilities/utils";

type Props = {
    text: string
}

const SimpleTextFormatMultiLine = ({ text }: Props) => {
    return (
        <div className="text-lg md:text-xl">
            <span className="ml-6">
                {getTextFirstLine(text)}
            </span>
            <span>
                {getTextExceptFirstLine(text)}
            </span>
        </div>
    )
}

export default SimpleTextFormatMultiLine
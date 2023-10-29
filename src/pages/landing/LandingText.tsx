import { motion } from "framer-motion";
import { useAppContext } from '../../context/appContextUtils';
import SimpleTextFormatMultiLine from "../../components/textFormat/SimpleTextFormatMultiLine";
// import SimpleTextFormatSingleLine from "../../components/textFormat/SimpleTextFormatSingleLine";

type Props = {
    btnsInitPos: number,
}

const LandingText = ({ btnsInitPos }: Props) => {
    const { state } = useAppContext();

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: btnsInitPos },
                visible: { opacity: 1, x: 0 },
            }}
        >
            <div className="flex justify-center md:justify-normal gap-[15px] text-5xl md:text-6xl font-playfair z-10">
                <div className="flex gap-1 text-center md:text-start">
                    <span>Technical </span>
                    <div className="flex flex-col gap-5">
                        <span className="text-purple-500">Test</span>
                    </div>

                </div>
            </div>

            <p className=" flex flex-col gap-14 mt-10 mb-7 text-center md:text-start">
                <SimpleTextFormatMultiLine text={state.texts.landing.welcome} />
                <SimpleTextFormatMultiLine text={state.texts.landing.viewLogin} />
                <SimpleTextFormatMultiLine text={state.texts.landing.visewUserList} />
            </p>
        </motion.div>
    )
}

export default LandingText
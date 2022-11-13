import { FunctionComponent } from "react";

interface GenerateButtonProps {
    callback: () => void;
    isDisabled: boolean;
    text: string;
}

const GenerateButton: FunctionComponent<GenerateButtonProps> = (props) => {
    return (
        <button
            className={
                `
                m-2 p-2 rounded text-base text-slate-800 text-center font-medium
                drop-shadow-lg border-2
                ` + (props.isDisabled ? " bg-slate-300 cursor-not-allowed border-slate-300"
                    : " border-blue-500 bg-blue-400 hover:bg-blue-500 hover:text-slate-100 ")
            }
            onClick={(e) => {
                e.preventDefault();
                if (!props.isDisabled) {
                    props.callback();
                }
            }}
        >
            {props.text}
        </button>
    );
}

export default GenerateButton;
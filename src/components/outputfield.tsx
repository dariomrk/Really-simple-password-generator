import { FunctionComponent } from "react";

interface OutputFieldProps {
    output: string;
    isShown: boolean;
}

const OutputField: FunctionComponent<OutputFieldProps> = (props) => {

    const hasOutput = props.output.length !== 0 ? true : false;
    const output = props.isShown ? props.output : "".padStart(props.output.length, "⁕")

    return (
        <div
            className={
                `
                m-2 p-2 border-solid border-slate-800 border-2 rounded
                w-96 align-middle flex flex-row items-center shadow-lg bg-neutral-50
                `
            }
        >
            <div className=" block basis-full min-w-0">
                <p className={
                    `
                    text-center text-2xl font-light text-ellipsis overflow-hidden
                    ` + (hasOutput ? " text-slate-800 "
                        : " text-base text-slate-300 italic")}>
                    {hasOutput ? output : "Generate a password first"}
                </p>
            </div>
            <div className=" block group ">
                <button
                    className=" m-2 "
                    onClick={(e) => {
                        e.preventDefault();
                        if (hasOutput) {
                            navigator.clipboard.writeText(props.output)
                        }
                    }}
                >
                    <svg className={" stroke-slate-50 " + (hasOutput ? " fill-slate-800 " : " fill-slate-300 cursor-not-allowed ")}
                        xmlns="http://www.w3.org/2000/svg"
                        height="28" width="28" viewBox="0 0 48 48"
                    >
                        <path d="M9 43.95q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.8h3v30.15h23.7v3Zm6-6q-1.2 0-2.1-.9-.9-.9-.9-2.1v-28q0-1.2.9-2.1.9-.9 2.1-.9h22q1.2 0 2.1.9.9.9.9 2.1v28q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h22v-28H15v28Zm0 0v-28 28Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default OutputField;
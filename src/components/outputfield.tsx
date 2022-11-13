import { FunctionComponent } from "react";

interface OutputFieldProps {
    output: string;
    isShown: boolean;
    canGenerate: boolean;
    callback: () => void;
}

const OutputField: FunctionComponent<OutputFieldProps> = (props) => {

    const hasOutput = props.output.length !== 0 ? true : false;
    const output = props.isShown ? props.output : "".padStart(props.output.length, "⁕")

    return (
        <div
            className={
                `
                m-2 p-2 border-solid border-slate-800 border-2 rounded
                w-96 h-20 align-middle flex flex-row items-center shadow-lg bg-neutral-50
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
            <div className=" flex group ">
                <button
                    className=" "
                    onClick={(e) => {
                        e.preventDefault();
                        if (hasOutput) {
                            navigator.clipboard.writeText(props.output)
                        }
                    }}
                >
                    <svg className={" " + (hasOutput ? " fill-slate-800 " : " fill-slate-300 cursor-not-allowed ")}
                        xmlns="http://www.w3.org/2000/svg"
                        height="28" width="28" viewBox="0 0 48 48"
                    >
                        <path d="M9 43.95q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.8h3v30.15h23.7v3Zm6-6q-1.2 0-2.1-.9-.9-.9-.9-2.1v-28q0-1.2.9-2.1.9-.9 2.1-.9h22q1.2 0 2.1.9.9.9.9 2.1v28q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h22v-28H15v28Zm0 0v-28 28Z" />
                    </svg >
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        if (props.canGenerate) {
                            props.callback();
                        }
                    }}
                    className=" "
                >
                    <svg className={" " + (props.canGenerate ? " fill-slate-800 " : " fill-slate-300 cursor-not-allowed ")}
                        xmlns="http://www.w3.org/2000/svg"
                        height="28" width="28" viewBox="0 0 48 48"
                    >
                        <path d="M24 40q-6.65 0-11.325-4.675Q8 30.65 8 24q0-6.65 4.675-11.325Q17.35 8 24 8q4.25 0 7.45 1.725T37 14.45V8h3v12.7H27.3v-3h8.4q-1.9-3-4.85-4.85Q27.9 11 24 11q-5.45 0-9.225 3.775Q11 18.55 11 24q0 5.45 3.775 9.225Q18.55 37 24 37q4.15 0 7.6-2.375 3.45-2.375 4.8-6.275h3.1q-1.45 5.25-5.75 8.45Q29.45 40 24 40Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default OutputField;
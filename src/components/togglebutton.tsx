import { FunctionComponent, useState } from "react";

interface ToggleButtonProps {
    callback: (state: boolean) => void;
    baseState: boolean
    text: string;
}

const ToggleButton: FunctionComponent<ToggleButtonProps> = (props) => {
    const [state, setState] = useState<boolean>(props.baseState);
    return (
        <button
            className={
                `
                m-2 p-2 rounded text-base text-slate-300 text-center
                font-medium drop-shadow-lg hover:text-slate-100 border-2
                `
                + (state ? " border-green-500 bg-[#23272e] hover:bg-green-500 "
                    : " bg-[#23272e] border-red-500 hover:bg-red-500 ")
            }
            onClick={(e) => {
                e.preventDefault();
                props.callback(!state);
                setState(!state);
            }}
        >
            {props.text}
        </button>
    );
}

export default ToggleButton;
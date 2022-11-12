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
                "rounded m-2 p-2 text-base text-slate-800 text-center font-medium "
                +(state ? 'bg-green-500' :'bg-red-400')
            }
            onClick={(e) => {
                e.preventDefault();
                setState(!state);
                props.callback(state);
            }}
        >
            {props.text}
        </button>
    );
}

export default ToggleButton;
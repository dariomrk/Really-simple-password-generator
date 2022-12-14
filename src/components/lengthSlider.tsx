import { FunctionComponent, useReducer, useState } from "react";

interface LengthSliderProps {
    callback: (value: number) => void;
    defaultValue: number;
    min: number;
    max: number;
    colorMultiplier: number;
}

const LengthSlider: FunctionComponent<LengthSliderProps> = (props) => {

    const [value, setValue] = useState(props.defaultValue);
    const colors = {
        bad: "#ef4444",
        fair: "#f97316",
        good: "#84cc16",
        excellent: "#22c55e"
    }

    let colorEval = value * props.colorMultiplier;
    let color: string;

    if(colorEval >= 48) color = colors.excellent;
    else if(colorEval >= 40) color = colors.good;
    else if(colorEval >= 32) color = colors.fair;
    else color = colors.bad;

    return (
        <div className={
            `
            m-2 p-2 flex flex-row items-center w-96 border-solid border-slate-300
            border-2 bg-[#23272e] rounded
            `
        }
        >
            <input onInput={(e) => {
                const newValue = Math.floor(Number(e.currentTarget.value));
                setValue(newValue);
                props.callback(newValue);
            }}
                type="range" min={props.min} max={props.max} value={value}
                style={{background: color}}
                className={
                    `
                    basis-[19rem] appearance-none rounded-full h-2
                    `
                }
            />
            <p className=" m-4 text-slate-200 ">
                {value}
            </p>
        </div>
    );
}

export default LengthSlider;
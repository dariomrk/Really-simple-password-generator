import { FunctionComponent, useState } from "react";

interface LengthSliderProps {
    callback: (value: number) => void;
    defaultValue: number;
    min: number;
    max: number;
}

function hslToHex(hue: number, sat: number, lum: number) {
    lum /= 100;
    const a = sat * Math.min(lum, 1 - lum) / 100;
    const f = (n: number) => {
        const k = (n + hue / 30) % 12;
        const color = lum - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

const LengthSlider: FunctionComponent<LengthSliderProps> = (props) => {

    const [value, setValue] = useState(props.defaultValue);
    const hexColor = hslToHex(value, 65, 55);

    return (
        <div className={
            `
            m-2 p-2 flex flex-row items-center w-96 border-2 rounded border-slate-300
            bg-slate-200 border-slate-300 
            `
        }
        >
            <input onInput={(e) => {
                const newValue = Math.floor(Number(e.currentTarget.value));
                setValue(newValue);
                props.callback(newValue);
            }}
                type="range" min="8" max="128" value={value}
                style={{background: hexColor}}
                className={
                    `
                    basis-[19rem] appearance-none border-2 rounded-full
                  border-slate-300 
                    `
                }
            />
            <p className=" m-4 text-slate-800 ">
                {value}
            </p>
        </div>
    );
}

export default LengthSlider;
import { Fragment, useRef, useReducer } from "react";
import GenerateButton from "./components/generateButton";
import LengthSlider from "./components/lengthSlider";
import OutputField from "./components/outputfield";
import ToggleButton from "./components/togglebutton";
import generator from "./functions/generator";

const App = () => {

    const reRender = useReducer(x => x + 1, 0)[1];

    const mutable = useRef({
        useUppercase : true,
        useLowercase : true,
        useNumbers: true,
        useSpecial : false,
        length : 12,
        showPassword: true,
        generatedPassword: "",
    });

    return (
        <Fragment>
            <div>
                <OutputField output={mutable.current.generatedPassword} isShown={true} />
                <GenerateButton callback={() => {
                    mutable.current.generatedPassword = generator(
                        mutable.current.useUppercase,
                        mutable.current.useLowercase,
                        mutable.current.useNumbers,
                        mutable.current.useSpecial,
                        mutable.current.length
                    )
                    reRender();
                }} isDisabled={false} text="Generate" />
            </div>
            <div>
                <LengthSlider callback={(value) => {
                    mutable.current.length = value;
                }} defaultValue={mutable.current.length} min={8} max={128} />
                <ToggleButton callback={(state) => {
                    mutable.current.useUppercase = state;
                }} baseState={mutable.current.useUppercase} text="A-Z" />
                <ToggleButton callback={(state) => {
                    mutable.current.useLowercase = state;
                }} baseState={mutable.current.useLowercase} text="a-z" />
                <ToggleButton callback={(state) => {
                    mutable.current.useNumbers = state;
                }} baseState={mutable.current.useNumbers} text="0-9" />
                <ToggleButton callback={(state) => {
                    mutable.current.useSpecial = state;
                }} baseState={mutable.current.useSpecial} text="Special" />
                <ToggleButton callback={(state) => {
                    mutable.current.showPassword = state;
                }} baseState={true} text="Show password" />
            </div>
        </Fragment>
    );
}

export default App;
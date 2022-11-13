import { Fragment, useRef, useState } from "react";
import GenerateButton from "./components/generateButton";
import LengthSlider from "./components/lengthSlider";
import OutputField from "./components/outputfield";
import ToggleButton from "./components/togglebutton";
import generator from "./functions/generator";

const App = () => {

    const optionsRef = useRef({
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
                <OutputField output="" isShown={true} />
                <GenerateButton callback={() => {
                    optionsRef.current.generatedPassword = generator(
                        optionsRef.current.useUppercase,
                        optionsRef.current.useLowercase,
                        optionsRef.current.useNumbers,
                        optionsRef.current.useSpecial,
                        optionsRef.current.length
                    )
                }} isDisabled={false} text="Generate" />
            </div>
            <div>
                <LengthSlider callback={(value) => {
                    optionsRef.current.length = value;
                }} defaultValue={optionsRef.current.length} min={8} max={128} />
                <ToggleButton callback={(state) => {
                    optionsRef.current.useUppercase = state;
                }} baseState={optionsRef.current.useUppercase} text="A-Z" />
                <ToggleButton callback={(state) => {
                    optionsRef.current.useLowercase = state;
                }} baseState={optionsRef.current.useLowercase} text="a-z" />
                <ToggleButton callback={(state) => {
                    optionsRef.current.useNumbers = state;
                }} baseState={optionsRef.current.useNumbers} text="0-9" />
                <ToggleButton callback={(state) => {
                    optionsRef.current.useSpecial = state;
                }} baseState={optionsRef.current.useSpecial} text="Special" />
                <ToggleButton callback={(state) => {
                    optionsRef.current.showPassword = state;
                }} baseState={true} text="Show password" />
            </div>
        </Fragment>
    );
}

export default App;
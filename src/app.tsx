import { Fragment } from "react";
import GenerateButton from "./components/generateButton";
import LengthSlider from "./components/lengthSlider";
import OutputField from "./components/outputfield";
import ToggleButton from "./components/togglebutton";

const App = () => {

    return (
        <Fragment>
            {/* TESTING ONLY */}
            <OutputField output="Password" isShown={true} />
            <OutputField output="PasswordPasswordPasswordPasswordPasswordPassword" isShown={true} />
            <OutputField output="" isShown={true} />
            <OutputField output="Password" isShown={false} />
            <ToggleButton text="A-Z" />
            <ToggleButton text="a-z" />
            <ToggleButton text="0-9" />
            <ToggleButton text="Special" />
            <ToggleButton text="Hide password" />
            <GenerateButton isDisabled={false} />
            <GenerateButton isDisabled={true} />
            <LengthSlider callback={(n) => {console.log(n)}} defaultValue={16} min={8} max={128}/>
            {/* TESTING ONLY */}
        </Fragment>
    );
}

export default App;
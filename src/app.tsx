import { Fragment } from "react";
import GenerateButton from "./components/generateButton";
import LengthSlider from "./components/lengthSlider";
import OutputField from "./components/outputfield";
import ToggleButton from "./components/togglebutton";

function generatePassword(): string {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = uppercase.toLowerCase();
    const numbers = "0123456789";
    const special = "-_()[]{}*+=<>#$%&/?!;:,.";
}

const App = () => {

    

    return (
        <Fragment>
            <div>
                <OutputField output="" isShown={true}/>
                <GenerateButton callback={()=>{}} isDisabled={false} text="Generate"/>
            </div>
            <div>
                <LengthSlider callback={()=>{}} defaultValue={12} min={8} max={128} />
                <ToggleButton callback={()=>{}} baseState={true} text="A-Z"/>
                <ToggleButton callback={()=>{}} baseState={true} text="a-z"/>
                <ToggleButton callback={()=>{}} baseState={true} text="0-9"/>
                <ToggleButton callback={()=>{}} baseState={true} text="Special"/>
                <ToggleButton callback={()=>{}} baseState={true} text="Show password"/>
            </div>
        </Fragment>
    );
}

export default App;
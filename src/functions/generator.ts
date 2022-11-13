import random from "./random";

const generator = (
    useUppercase: boolean,
    useLowercase: boolean,
    useNumbers: boolean,
    useSpecial: boolean,
    length: number
) => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = uppercase.toLowerCase();
    const numbers = "0123456789";
    const special = "-_()[]{}*+=<>#$%&/?!;:,.";

    let characters = "";

    if(useUppercase) {
        characters += uppercase;
    }
    if(useLowercase) {
        characters += lowercase;
    }
    if(useNumbers) {
        characters += numbers;
    }
    if(useSpecial) {
        characters += special;
    }

    let output = ""

    for (let i = 0; i < length; i++) {
        const char = characters.charAt(random(characters.length));
        output += char;
    }
    
    return output;
}

export default generator;

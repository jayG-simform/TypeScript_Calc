import { input, output } from "../calc.js";

export class Allfunction {
    allFunction(func: any) {
        switch (func) {
            case "ceil":
                output.value = `ceil(${input.value})`;
                input.value = (Math.ceil(parseFloat(input.value))).toString();
                break;
            case "floor":
                output.value = `floor(${input.value})`;
                input.value = (Math.floor(parseFloat(input.value))).toString();
                break;
            case "rand":
                input.value = (Math.random()).toString();
                break;
        }
    }
}
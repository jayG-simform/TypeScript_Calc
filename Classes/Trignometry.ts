import { input, output } from "../calc.js";

export class Trigonometry{
    trigonometry(tigno:any):void {
        switch (tigno) {
            case "sin":
                output.value = `sin(${input.value})`
                input.value = Math.sin(parseFloat(input.value)).toString();
                break;
            case "cos":
                output.value = `cos(${input.value})`;
                input.value = Math.cos(parseFloat(input.value)).toString();
                break;
            case "tan":
                output.value = `tan(${input.value})`;
                input.value = Math.tan(parseFloat(input.value)).toString();
                break;
            case "sec":
                output.value = `1 / cos(${input.value})`;
                input.value = (1 / Math.cos(parseFloat(input.value))).toString();
                break;
            case "csc":
                output.value = `1 / sin(${input.value})`
                input.value = (1 / Math.sin(parseFloat(input.value))).toString();
                break;
            case "cot":
                output.value = `1 / tan(${input.value})`;
                input.value = (1 / Math.tan(parseFloat(input.value))).toString();
                break;
        }
    }
}
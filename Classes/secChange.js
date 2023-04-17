import { input, output } from "../calc.js";
export class secChange {
    Seconds(sec) {
        switch (sec) {
            case "sqr":
                output.value = `sqr(${input.value})`;
                input.value = (parseFloat(input.value) * parseFloat(input.value)).toString();
                break;
            case "sqrt":
                output.value = `√ (${input.value})`;
                input.value = (Math.sqrt(parseFloat(input.value))).toString();
                break;
            case "tanRoot":
                output.value = `10^(${input.value})`;
                input.value = (10 ** (parseFloat(input.value))).toString();
                break;
            case "log":
                output.value = `log(${input.value})`;
                input.value = (Math.log10(parseFloat(input.value))).toString();
                break;
            case "ln":
                output.value = `ln(${input.value})`;
                input.value = (Math.log(parseFloat(input.value))).toString();
                break;
        }
    }
}

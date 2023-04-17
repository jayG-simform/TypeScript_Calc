import { input, output } from "../calc.js";

export class ThirdChange {
    thirdC(changes: any) {
        switch (changes) {
            case "cube":
                output.value = `cube(${input.value})`;
                input.value = (parseFloat(input.value) * 3).toString();
                break;

            case "cubeRoot":
                output.value = `cuberoot(${input.value})`;
                input.value = Math.cbrt(parseFloat(input.value)).toString();
                break;
                
            case "secRoot":
                output.value = `2^(${input.value})`;
                input.value = (2 ** (parseFloat(input.value))).toString();
                break;

            case "epower":
                let e = 2.718281828459045;
                output.value = `e^(${input.value})`;
                input.value = (e ** (parseFloat(input.value))).toString();
                break;
        }
    }
}
import { input, output, pI, e } from "../calc.js";

export class OtherOperator {
    operator(oprt: any) {
        switch (oprt) {
            case "inverse":
                input.value = (-(parseFloat(input.value))).toString();
                break;

            case "e":
                input.value = (e as unknown) as string;
                break;

            case "fact":
                let n: any = input.value;
                let answer = 1;
                if (n == 0 || n == 1) {
                    return answer;
                }
                else if (n > 1) {
                    for (var i = n; i >= 1; i--) {
                        answer = answer * i;
                    }
                }
                else {
                    input.value = "number has to be positive.";
                }
                output.value = `fact(${input.value})`;
                input.value = answer.toString();
                break;

            case "exp":
                if (input.value != '') {
                    const ftoE = parseFloat(input.value);
                    input.value = ftoE.toExponential();
                }
                else {
                    const ftoE = 0;
                    input.value = ftoE.toExponential();
                }
                break;

            case "oneDevide":
                output.value = `1/(${input.value})`;
                input.value = (1 / (parseFloat(input.value))).toString();
                break;

            case "abs":
                output.value = `abs(${input.value})`;
                input.value = (Math.abs(parseFloat(input.value))).toString();
                break;

            case "pi":
                input.value = (pI as unknown) as string;
                break;

            case "ftoE":
                if (input.value != '') {
                    const ftoE = parseFloat(input.value);
                    input.value = ftoE.toExponential();
                }
                else {
                    const ftoE = 0;
                    input.value = ftoE.toExponential();
                }
                break;

        }
    }
}
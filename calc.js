import { Memory } from "./Classes/Memory.js";
import { Trigonometry } from "./Classes/Trignometry.js";
import { Allfunction } from "./Classes/Allfunction.js";
import { Change } from "./Classes/Change.js";
import { secChange } from "./Classes/secChange.js";
import { ThirdChange } from "./Classes/ThirdChange.js";
import { OtherOperator } from "./Classes/OtherOperator.js";
let buttons = document.querySelectorAll('button');
// display Input
export let input = document.getElementById("displayInput");
// display output
export var output = document.getElementById('output_display');
// memory array 
const memory = [];
export const pI = Math.PI;
export const e = Math.E;
// display memory div 
export const memorySection = document.getElementById("memory-show");
let memoryShown = false;
let string = "";
let arr = Array.from(buttons);
arr.forEach(buttons => {
    buttons.addEventListener('click', (e) => {
        if (parseFloat(input.value).toString()[0] == '*' || parseFloat(input.value).toString()[0] == '/' || parseFloat(input.value).toString()[0] == '+' || parseFloat(input.value).toString()[0] == '=' || parseFloat(input.value).toString()[0] == '%') {
            input.innerHTML = `<p style="color:red;">Invalid!</p>`;
            input.style.opacity = (1).toString();
            input.style.top = (0).toString();
            input.value = "";
        }
        else if (e.target.value == '=') {
            try {
                output.value = input.value;
                string = eval(input.value);
                input.value = string;
            }
            catch (error) {
                output.innerHTML = "<p style='color:red'>Syntax error!</p>";
            }
            let str = input.value;
            const fun = str.split(" ");
            let a = fun[0];
            let b = fun[2];
            // Calculate yroot 
            if (fun[1] == 'yroot') {
                output.value = input.value;
                input.value = Math.pow(a, 1 / b).toString();
            }
            // Calculate y log base x 
            else if (fun[1] == 'log') {
                let c = fun[3];
                output.value = input.value;
                input.value = (Math.log(a) / Math.log(c)).toString();
            }
        }
        // Clear all 
        else if (e.target.value == 'C') {
            if (input.value) {
                input.value = "";
            }
            else if (output.value) {
                output.value = "";
            }
        }
        // Single delete 
        else if (e.target.value == 'DE') {
            input.value = input.value.replace("DE", "").slice(0, -1);
        }
        else {
            if (e.target.value == undefined)
                return;
            input.value += e.target.value;
        }
    });
});
// change the 2nd number
export var chng = new Change();
let chng1 = document.querySelector(".changes");
chng1 === null || chng1 === void 0 ? void 0 : chng1.addEventListener('click', function () {
    chng.changes();
});
// using all 2 change apply 
export var sec = new secChange();
let oprt = document.querySelectorAll('.operator');
for (let elements of oprt) {
    elements.addEventListener("click", function () {
        sec.Seconds(elements.id);
    });
}
// Add all cube
export var third = new ThirdChange();
let oprt1 = document.querySelectorAll(".operator1");
for (let elements of oprt1) {
    elements.addEventListener("click", function () {
        third.thirdC(elements.id);
    });
}
// All other operator
export var opert = new OtherOperator();
let funct = document.querySelectorAll(".otherOprt");
for (let elements of funct) {
    elements.addEventListener("click", function () {
        opert.operator(elements.id);
    });
}
// All Memory 
export var memo = new Memory();
let memory1 = document.querySelectorAll('.memry');
for (let elements of memory1) {
    elements.addEventListener('click', function () {
        memo.memry(elements.id);
    });
}
// Trigonometry
export var trigo = new Trigonometry();
let trigono = document.querySelectorAll('.trigno');
for (let elements of trigono) {
    elements.addEventListener('click', function () {
        trigo.trigonometry(elements.id);
    });
}
// Functions
export var func1 = new Allfunction();
let fun = document.querySelectorAll('.func');
for (let elements of fun) {
    elements.addEventListener('click', function () {
        func1.allFunction(elements.id);
    });
}

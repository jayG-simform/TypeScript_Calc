import { input, memorySection } from "../calc.js";
const memory: any[] = [];

// // display memory div 
let memoryShown: boolean = false;

export class Memory {
    memry(memoryAll: any) {
        switch (memoryAll) {
            case "Add":
                var memr = JSON.parse(localStorage.getItem("Calculator")!);

                if (memr.length != 0) {
                    memr[memr.length - 1] += Number(parseFloat(input.value).toString());
                }
                localStorage.setItem("Calculator", JSON.stringify(memr));

                var mc_ele: any = document.querySelector(".mc");
                mc_ele.classList.add("btnBlack");
                mc_ele.classList.remove("btnDark");
                var mr_ele: any = document.querySelector(".mr");
                mr_ele.classList.add("btnBlack");
                mr_ele.classList.remove("btnDark");
                var mshow_ele: any = document.querySelector(".mshow");
                mshow_ele.classList.add("btnBlack");
                mshow_ele.classList.remove("btnDark");

                break;

            case "Sub":
                var memr = JSON.parse(localStorage.getItem("Calculator")!);

                if (memr.length != 0) {
                    memr[memr.length - 1] -= Number(parseFloat(input.value).toString());
                }
                localStorage.setItem("Calculator", JSON.stringify(memr));

                break;

            case "memC":
                if (memory.length != 0) {
                    memory.length = 0;
                    localStorage.clear();
                }
                // localStorage.setItem("Calculator", JSON.stringify(memr));
                
                var mc_ele: any = document.querySelector(".mc");
                mc_ele.classList.add("btnDark");
                mc_ele.classList.remove("btnBlack");
                var mr_ele: any = document.querySelector(".mr");
                mr_ele.classList.add("btnDark");
                mr_ele.classList.remove("btnBlack");
                var mshow_ele: any = document.querySelector(".mshow");
                mshow_ele.disabled = true;
                mshow_ele.classList.add("btnDark");
                mshow_ele.classList.remove("btnBlack");
                var memr = JSON.parse(localStorage.getItem("Calculator")!);

               
                break;

            case "memR":
                var memr = JSON.parse(localStorage.getItem("Calculator")!);
                
                if (memr.length != 0) {
                    input.value = (memr[memr.length - 1]);
                }
                break;

            case "Store":

                if (memory[memory.length - 1] != Number(input.value)) {
                    memory.push(Number(input.value.toString()));
                    localStorage.setItem("Calculator", JSON.stringify(memory));
                }
                var mc_ele: any = document.querySelector(".mc");
                mc_ele.classList.add('btnBlack');
                mc_ele.classList.remove('btnDark');
                var mr_ele: any = document.querySelector(".mr");
                mr_ele.classList.add("btnBlack");
                mr_ele.classList.remove("btnDark");
                var mshow_ele: any = document.querySelector(".mshow");
                mshow_ele.classList.add("btnBlack");
                mshow_ele.classList.remove("btnDark");

                break;

            case "mshow":
                var text = JSON.parse(localStorage.getItem("Calculator")!);
                if (memory.length != 0) {
                    if (text.length != 0) {
                        if (!memoryShown) {
                            let htmlText = '<h4 style="text-align: center; border-bottom: 1px solid black;"> Memory Stored </h4>';
                            for (let i = 0, len = text.length - 1; i <= len; len--) {
                                htmlText += '<div class="text-memory"><p>';
                                htmlText += text[len].toString();
                                htmlText += '</p></div>';
                            }
                            memorySection!.style.display = "flex";
                            memorySection!.innerHTML = htmlText;
                            memoryShown = true;
                        } else {
                            memorySection!.style.display = "none";
                            memoryShown = false;
                        }
                    }
                    else {
                        memorySection!.style.display = "none";
                        memoryShown = false;
                    }
                }
                else{
                    memorySection!.style.display = "none";
                        memoryShown = false;
                }
        }
    }
}
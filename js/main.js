const items = document.querySelectorAll(".price");
const total = document.querySelector("#total");

// let sum = 0;
// for (const item of items) {
//     sum = sum + Number(item.textContent);
// }

// total.textContent = sum;

const val = Array.from(items).reduce(sum, 0);
total.textContent = Math.round(val * 100) / 100;

function sum (accum, ele) {
    const eleVal = Number(ele.textContent) || 0;

    return accum + eleVal;
}

// for (let i = 0; i < items.length; i++) {}
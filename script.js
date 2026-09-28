console.log("=====kodstycke 1: Namn och poäng=====");

const fristname = "Linus";
let score = 32;

console.log(fristname);
console.log(score);

console.log("");
console.log("=====kodstycke 2: Funktion=====");

function sum(a, b) {
    return a + b;
}

console.log(sum(3, 4));

console.log("");
console.log("=====kodstycke 3: prodact=====");

const prodactname = "USB-C kable";
let unitprice = 149;
let quantity = 3;

console.log(prodactname);
console.log(unitprice * quantity);

console.log("");
console.log("=====kodstyke 4: radTotal=====");

function radTotal(unitprice, quantity) {
    return unitprice * quantity;
}

function withVat(total, vat) {
    return total * (1 + vat);
}

console.log(withVat(radTotal(unitprice, quantity), 0.25));

console.log("");
console.log("===== Kodstycke 5: Todo-lista =====");

const harRabatt = true;
let summa = 45;

if (harRabatt === true) {
    summa = summa * 0.9;
} else {
    console.log("onsale");
}
console.log(summa);

const todos = ["Köp mjölk", "Tvätta", "Sova", "Committa"];
console.log(todos[0]);
console.log(todos.length);

const todo = {
    text: "Köp mjölk",
    done: true
};

console.log(todo.text);
console.log(todo.done);

for (const text of todos) {
    console.log(text);
}

console.log("");
console.log("=====kodstycke 6: Logik & fällor=====");

console.log(5 == 5);
console.log(5 === 5);
console.log(true && false);

console.log("");
console.log("===== Kodstycke 7: length =====");

console.log(todos.length);
console.log(todos[todos.length - 1]);

console.log("");
console.log("===== Kodstycke 8: if-else=====");

const text = "Hej";

if (text.length < 3) {
    console.log("kort");
} else {
    console.log("tom");
}

console.log("");
console.log("===== Kodstycke 9: costgrocory=====");

const grocery = ["bröd", "Ägg", "Ost"];
const customer = { name: "Ada" , vip: true };

console.log(grocery);
console.log(customer);

console.log("");
console.log("===== Kodstycke 10: customervip=====");

 if (customer.vip === true) {
    console.log("VIP-kvitto");
    console.log(customer.name);
 } else {
     console.log("Vanligt kvitto");
 }

 for (const vara of grocery) {
   console.log(vara);
}

console.log(grocery[0]);
console.log(grocery.length);



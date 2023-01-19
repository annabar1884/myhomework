
// 1. Як можна оголосити змінну у Javascript? - з допомогою: const, let. також var - старий варіант.
// 2. У чому різниця між функцією prompt та функцією confirm? - confirm - повертає тільки Ок або cancel, prompt повертає введене користувачем значення, або Ок чи Cancel. 
// 3. Що таке неявне перетворення типів? Наведіть один приклад.  - неявне перетворення типів це коли значення можуть бути конвертовані між різними типами автоматично, приклад 4 > '5'  
// 4.

let name;
let admin;
name = "Ivan";
admin = name;
console.log(admin);

let days;
days = +prompt("enter number from 1 to 10" , "1-10");
result = days * 24*60*60;
console.log(result);
alert(`you entered ${days} days, - it is equal to ${result} seconds`);

let userMassage;
userMassage = prompt("write me something :)" , "?");
console.log(userMassage);
alert(`thanks, I remembered what you told me: ${userMassage}`);
//   тест
// Написати функцію, яка повертає об'єкт родина з властивостями, які мають вигляд:
// ключ - ім'я члена родини, а значення - хто із членів родини
// (мінімум родина з 3 осіб)
// Інформацію про особу запитувати у користувача.
// Вивести отриманий об'єкт за допомогою for..in

/*                           прошлое ДЗ (неправильное)
// const getFamilyPerson = function () {
//   const selectFamily = prompt("Enter name of person:");
//   const family = {
//     Maksim: "brother",
//     Olha: "mother",
//     Ludmila: "sister",
//     Vasya: "grandfather",
//     Oleh: "father",
//   };
//   for (const key in family) {
//     if (key === selectFamily) {
//       return `${key} it\`s ${family[key]}`;
//     }
//   }
// };
// console.log(getFamilyPerson()); */



 //                          EDIT HOMEWORK
let family = {};
let count = Number(prompt("How much family person you want writing?"));
while (count > 0) {
  let key = prompt("Enter name of person:");
  let value = prompt("Enter role of person:");
  family[key] = value;
  count--;
}

for (const key in family) {
  console.log(`${key} it\`s ${family[key]}`);
}

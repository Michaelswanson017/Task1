'use strict';

var money = "Ваш бюджет на месяц?"; // Присваем переменные
var time = "Введите дату в формате YYYY-MM-DD";
var optionalExpenses = {}; //Создаём пустой объект
let income = []; // Добавляем пустой массив данных
let otveta = prompt("Введите обязательную статью расходов в этом месяце", "");
let otvetb = prompt("Во сколько обойдется?", ""); //Добавил вопросы пользователю в браузере

var appData = {
    budjet: money,
    timeData: time,
    expenses: {
        otveta,
        otvetb
    },
    optionalExpenses: {},
    income: [],
    savings: false
}; //Объект данных, в который переносятся переменные сверху


alert(appData.expenses.otvetb / 30); //Показывает бюджет, введённый пользователей, за день

    




/* console.log(otveta); // Вывод ответов в консоль
console.log(otvetb); */


/* var expenses = {
    otveta : otvetb
}; */

/* console.log(appData["budjet"]);
console.log("Введите обязательную статью расходов в этом месяце") */
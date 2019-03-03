let money = prompt("Укажите вашь бюджет на месясц: ");
let time = prompt("Введите дату в формате YYYY-MM-DD: ", "2019-00-01");

// q - сокращенное от слова question ( вопрос ).
var q1 = prompt("Введите обязательную статью расходов в этом месяце: ");
var q2 = prompt("Во сколько обойдется? ");

var q3 = prompt("Введите обязательную статью расходов в этом месяце: ");
var q4 = prompt("Во сколько обойдется? ");

let appData = {
    money: money,
    timeData: time,
    expenses: {
        q1: q2,
        q3: q4
    },
    optionalExpenses:  {},
    income: [],
    savings: false
};

moneyForDay = (appData.money - (parseInt(appData.expenses.q1) + parseInt(appData.expenses.q3))) / 30;
console.log(parseInt(appData.expenses.q1) + parseInt(appData.expenses.q3));




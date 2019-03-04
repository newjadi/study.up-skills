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

moneyForDay = money / 30;
alert(moneyForDay);





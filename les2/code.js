let money = +prompt("Укажите вашь бюджет на месясц: ");
let time = prompt("Введите дату в формате YYYY-MM-DD: ", "2019-00-01");

let appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// q - сокращенное от слова question ( вопрос ).
// for (let i = 0; i < 2; i++) {
//     let q1 = prompt("Введите обязательную статью расходов в этом месяце: ");
//     let q2 = prompt("Во сколько обойдется? ");

    // if ( (q1 != null) && (q2 != null) &&
    //     (q1 != "") && (q2 != "") ) {
    //     appData.expenses[q1] = q2;
    // } else {
    //     i--;
    // };
// };

// Рабочий вариант.

// let i = 0;
// while ( i < 2 ) {
//     let q1 = prompt("Введите обязательную статью расходов в этом месяце: ");
//     let q2 = prompt("Во сколько обойдется?");
    // if ( (q1 != null) && (q2 != null) &&
    //     (q1 != "") && (q2 != "") ) {
    //     appData.expenses[q1] = q2;
    //     i++;
    // };
// };

// Рабочий вариант.

let i = 0;
do {
    let q1 = prompt("Введите обязательную статью расходов в этом месяце: ");
    let q2 = prompt("Во сколько обойдется? ");
    if ( (q1 != null) && (q2 != null) &&
        (q1 != "") && (q2 != "") ) {
        appData.expenses[q1] = q2;
        i++;
    };
} 
while (i < 2);


appData.moneyForDay = appData.money / 30;

if (appData.moneyForDay < 100) {
    console.log ("Минимальный уровень достатка");
} else if (appData.moneyForDay > 100 && appData.moneyForDay < 1000) {
    console.log ("Средний уровень достатка");
} else if (appData.moneyForDay > 2000) {
    console.log ("Высокий уровень достатка");
} else {
    console.log ("Ошибка !");
}

alert(appData.moneyForDay);


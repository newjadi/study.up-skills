let money, time;

let appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

// Стартовая функция. Срашиваем Дату и Бюджет
function start() {
    time = prompt("Введите дату в формате YYYY-MM-DD: ", "2019-00-01");
    while (isNaN(money) || money == "" || money == null ) {
        money = prompt("Укажите вашь бюджет на месясц: ");
    }
};

// Функция необезательных рассходов.
function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let chooseq1 = prompt ("Статья необязательных расходов?");
        let chooseq2 = prompt ("Сколько будет стоить ?");
        if ( (q1 != null) && (q2 != null) &&
        (q1 != "") && (q2 != "") ) {
            appData.optionalExpenses = chooseq2;
        } else {
            i--;
        }
    }
};


// Функция с указанием Обязательныз расходов. "q" - сокращенное от слова question ( вопрос ).
function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
    let q1 = prompt("Введите обязательную статью расходов в этом месяце: ");
    let q2 = prompt("Во сколько обойдется? ");

        if ( (q1 != null) && (q2 != null) &&
        (q1 != "") && (q2 != "") ) {
        appData.expenses[q1] = q2;
        } else {
            i--;
        }
    }
};

// Функция расчета бюджета на день.
function detectDayBudget() {
    appData.moneyForDay = appData.money / 30;
    alert("Бюджет на день: " + appData.moneyForDay);
};

// Функция расчета уровня достатка.
function detectLevel() {
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
};

// Функция расчета накоплений с дипозита.
function checkSaving() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?");
        let percent = +prompt("Под какой процент?");

        appData.monthInCome = save/100/12*percent;
        alert("Доход в месяц с вашего дипозита: " + appData.monthInCome);
    }
};


start(); // Старт функции "Укажите дату и Бюджет".
chooseExpenses(); // Старт функции "Обязательной статьи расходов".
chooseOptExpenses(); // Старт функции "Необезательных расходов".
detectDayBudget(); // Старт функции "Бюджет на один день".
detectLevel(); // Старт функции "Расчет достатка".
checkSaving(); // Старт функции "Доход с дипозита".
let money= prompt("Ваш бюджет на месяц?");
let time= prompt("Введите дату в формате YYYY-MM-DD");
let appData={
    money: money,
    time : time,
    expenpenses:{
        
    },
    optionalExpenses:{},
    income : [],
    savings:false
};
let answer1= prompt("Введите обязательную статью расходов в этом месяце");
let answer2= prompt("Во сколько обойдется?");

appData.expenpenses.answer1=answer2;
for (let key in appData){
    console.log(key+":"+appData[key]);
}
alert(appData.money/30);

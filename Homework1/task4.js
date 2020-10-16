const credits = 23580;

const pricePerDroid = 3000;

let numberOfDroids = prompt('введіть кількість дроїдів');

let totalPrice = numberOfDroids * pricePerDroid;

let numberRegExp = /^[1-9][0-9]*$/;


if (numberOfDroids === null) {
    console.log('Скасовано користувачем!');
 }
 else if(numberRegExp.test(numberOfDroids)){

    if(totalPrice > credits) {
     console.log('Недостатньо коштів на рахунку');
   }
   else {
     console.log(`Ви купили ${numberOfDroids} на рахунку залишилося ${credits - totalPrice} кредитів`);
   }
 }

else {
    console.log('ERROR')
}
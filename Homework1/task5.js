let writeCountry = prompt('Введіть назву країни');

let writeCountrySmall = writeCountry.toLowerCase();


switch(writeCountrySmall) {
       case 'китай':
           cost = 100;
           break;
       case 'чилі':
           cost = 250;
           break;
       case 'австралія':
           cost = 170;
           break;
       case 'індія':
           cost = 80;
           break; 
       case 'ямайка':
           cost = 120;
           break; 
       default:
           alert('У вашій країні доставка не доступна')       
} 

console.log(`Доставка в ${writeCountrySmall} буде коштувати ${cost} кредитів`);
const ADMIN_PASSWORD = 'jqueryismyjam';

let message5 = prompt('введіть пароль');

let message6 = 'Скасовано користувачем!';

let message7 = 'Ласкаво просимо!';

let message8 = 'Доступ заборонений, невірний пароль!'

if (message5 === null) {
   console.log(message6);
}
else if (message5 === ADMIN_PASSWORD) {
    console.log(message7);
}
else{
    console.log(message8);
}

console.log(message5);

alert(message5);
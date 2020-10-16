let total = 100;

let ordered = 100;

const message3 = 'На складі недостатньо товарів!';

const message4 = 'Замовлення оформлено, з вами звяжеться менеджер';

if (ordered > total){
  console.log(message3);
}
else{
    console.log(message4);
}
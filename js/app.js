'use strict';
let yourName = prompt('Hey there, whats your name?');
alert ('welcome '+yourName);
let ans1 = prompt(yourName+ ' ,are you ready to know me ?');

switch (ans1) {
case 'yes':
case 'y':
  alert(ans1 + ' lets go â¥âº');
  // eslint-disable-next-line no-case-declarations
  let ans3=prompt('do you know my name?');
  alert('you answer is '+ans3 + ' , my name is Rula');
  alert('nice to meet you ð');
  // eslint-disable-next-line no-case-declarations
  let ans4=prompt('do you know my age?');
  alert('never ask a woman about her age ð');
  alert('I am just kidding ð¤­ð¤­');
  alert('you answer is '+ans4 + ' , I am 23 years old');
  // eslint-disable-next-line no-case-declarations
  let ans5=prompt('do you know what is my specialist?');
  alert('you answer is '+ans5 + ' , I am a proud biomedical engineerð');
  alert ('here is a fun fact about me :one thing i cannot live without coffee âï¸');
  alert('Take many cups of coffeeâï¸âï¸âï¸âï¸âï¸âï¸ ,and if you want to know me peter read about me in this page');
  // alert('if you want to know me peter read about me in this page');
  break;

default:
  alert(ans1 + ' !!ðâ¹ï¸') ;

  // eslint-disable-next-line no-case-declarations
  let ans2 = prompt(yourName+ ' ,answer withe yes if you change your mined âº');

  if (ans2==='y'||ans2==='yes'){
    alert(ans2 + ' lets go â¥âº');
    let ans3=prompt('do you know my name?');
    alert('you answer is '+ans3 + ' , my name is Rula');
    // eslint-disable-next-line no-case-declarations
    let ans4=prompt('do you know my age?');
    alert('you answer is '+ans4 + ' , I am 23 years old');
    // eslint-disable-next-line no-case-declarations
    let ans5=prompt('do you know what is my specialist?');
    alert('you answer is '+ans5 + ' , I am a biomedical engineer');
    alert ('here is a fun fact about me :one thing i cannot live without coffee âï¸');
    alert('âï¸âï¸âï¸');
    alert('if you want to know me peter read about me in this page');

  }else{

    alert( 'come back whenever you want â¥âº');
  }

  break;
}



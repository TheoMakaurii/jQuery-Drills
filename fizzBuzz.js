'use strict';

$(function fizzBuzz(){
  $('#number-chooser').submit(function(event){
    event.preventDefault();
    $('.js-results').empty();
    let numChoice = $('#number-choice').val();
    console.log(numChoice);
    


    let results = [];
    for(let i =1; i <= numChoice; i++){
      if (i % 3 === 0 && i % 5 ===0)
        results.push('<div class= "fizz-buzz-item fizzbuzz"><span>FIZZBUZZ</span></div>');
      else if (i % 3 === 0){
        results.push('<div class= "fizz-buzz-item fizz"><span>FIZZ</span></div>');
      }
      else if (i % 5 ===0){
        results.push('<div class= "fizz-buzz-item buzz"><span>BUZZ</span></div>');
      }
      else{
        results.push(`<div class= "fizz-buzz-item"><span>${i}</span></div>`);
      }
    }

    $('.js-results').append(results);
  });
});
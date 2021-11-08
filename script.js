window.addEventListener("load", function (event) {
   console.log("All resources finished loading!");

   let inputsList = document.querySelectorAll('.input-text');
   const minInputText = document.querySelector('.input-text_min');
   const maxInputText = document.querySelector('.input-text_max');
   const btnGenerat = document.querySelector('.generator__btn_generate');
   const countNumberGenerator = document.querySelector('.generator__count-number');
   const arr = [];
   let flag = true;

   inputsList.forEach(input => input.addEventListener('input', inputLogic));

   btnGenerat.addEventListener("click", function (e) {
      e.preventDefault();
      if (flag === true) {
         const min = +minInputText.value;
         const max = +maxInputText.value;
         generateArray(min, max, arr);
         countNumberGenerator.innerText = randomInteger(min, max);
         flag = false;
      } else {
         arr.pop();
      }
   });

   function inputLogic(input) {
      btnGenerat.disabled = !isInputEmpty(inputsList);
   }
   //функция проверка на то чтоб каждый инпут был заполнен
   function isInputEmpty(inputsList) {
      return [...inputsList].every(input => input.value !== '');
   }
   // функция получения рандомного числа 
   function randomInteger(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
   }
   function generateArray(min, max, arr) {
      // if (arr.length === 0) return;
      for (let i = min; i < max + 1; i++) {
         arr.push(i);
      }
      console.log(arr);
   }
   function delNumber(arr) {
      arr.pop(arr);
   }




});

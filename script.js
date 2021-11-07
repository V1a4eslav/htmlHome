window.addEventListener("load", function (event) {
   console.log("All resources finished loading!");

   const minInputText = document.querySelector('.input-text_min');
   const maxInputText = document.querySelector('.input-text_max');
   const btnGenerat = document.querySelector('.generator__btn_generate');
   const countNumberGenerator = document.querySelector('.generator__count-number');

   btnGenerat.addEventListener("click", function (e) {
      e.preventDefault();
      const min = +minInputText.value;
      const max = +maxInputText.value;
      countNumberGenerator.innerText = randomInteger(min, max);
   });
   function randomInteger(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
   }




});

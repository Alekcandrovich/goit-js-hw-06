// const counterValue = {
//   value: 0,
//     decrement() {this.value -= 1;},
//     increment() {this.value += 1;},
// };
// const decrementRef = document.querySelector('[data-action="decrement"]');
// const incrementRef = document.querySelector('[data-action="increment"]');
// const valuesRef = document.querySelector('#value');
// decrementRef.addEventListener('click', function () {
//   console.log('----')
//   counter.decrement();
//   valueRef.textContent = counter.value;
// });
// incrementRef.addEventListener('click', function () {
//   console.log('++++');
//   counter.increment();
//   valueRef.textContent = counter.value;
// });


let counterValue = 0;
const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');
decrementRef.addEventListener('click', () => {
  counterValue -= 1;
    valueRef.textContent = counterValue;
    console.log('----', counterValue);
});
incrementRef.addEventListener('click', () => {
  counterValue += 1;
    valueRef.textContent = counterValue;
    console.log('++++', counterValue);
});
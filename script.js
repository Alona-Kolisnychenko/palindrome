const textInput = document.querySelector('#text-input');
const checkBtn = document.querySelector('#check-btn');
const result = document.querySelector('#result');

checkBtn.addEventListener('click', () => {
  const value = textInput.value;
  const isPalindrome = 'is a palindrome';
  const isNotPalindrome = 'is not a palindrome';
  const regexp = /[a-zA-Z\d]/;
  const correctValue = value.toLowerCase().split('').filter((item) => regexp.test(item));
  const reversedValue = [...correctValue].reverse();
  const combineResult = correctValue.every(
    (item, index) => item === reversedValue[index]
  );
  if (!value) alert('Please input a value')
  else if (combineResult) result.innerHTML = `<strong>${value}</strong> ${isPalindrome}`;
  else result.innerHTML = `<strong>${value}</strong> ${isNotPalindrome}`;

  textInput.value = '';
});

const toggleButton = document.getElementById('toggle-advanced');
const calculator = document.querySelector('.calculator');

toggleButton.addEventListener('click', () => {
  calculator.classList.toggle('show-advanced');
});



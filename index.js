document.addEventListener('DOMContentLoaded', function() {
    const qtdInput = document.getElementById('qtdInput');
    const plusBtn = document.getElementById('plusBtn');
    const minusBtn = document.getElementById('minusBtn');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkboxErrorMessage = document.getElementById('checkboxErrorMessage');
  
    plusBtn.addEventListener('click', (event) => {
      event.preventDefault();
      qtdInput.stepUp(); 
    });
  
    minusBtn.addEventListener('click', (event) => {
      event.preventDefault();
      qtdInput.stepDown(); 
    });
  
    const form = document.querySelector('form');
    const quantityInput = document.getElementById('qtdInput');
  
    form.addEventListener('submit', function(event) {
      if (quantityInput.value === '0') {
        quantityInput.classList.add('error');
      } else {
        console.log(quantityInput.value);
        quantityInput.classList.remove('error');
      }
  
      let checkedCount = 0;
      checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
          checkedCount++;
          event.preventDefault();
          console.log(checkbox.value); 
        }
      });
  
      if (checkedCount === 0) {
        event.preventDefault();
        if (checkboxErrorMessage) {
          checkboxErrorMessage.innerText = 'Selecione pelo menos um sticker';
          checkboxErrorMessage.style.display = 'block';
          sucesso.style.display = 'block';
        }
      } else {
        if (checkboxErrorMessage) {
          checkboxErrorMessage.style.display = 'none';
        }
      }
    });
  });
  
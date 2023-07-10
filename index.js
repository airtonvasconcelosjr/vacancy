document.addEventListener('DOMContentLoaded', function() {
  const qtdInput = document.getElementById('qtdInput');
  const plusBtn = document.getElementById('plusBtn');
  const minusBtn = document.getElementById('minusBtn');
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const checkboxErrorMessage = document.getElementById('checkboxErrorMessage');
  const form = document.querySelector('form');
  const descricao = document.getElementById('descricao');
  const sucesso = document.getElementById('sucesso');

  plusBtn.addEventListener('click', (event) => {
    event.preventDefault();
    qtdInput.stepUp(); 
  });

  minusBtn.addEventListener('click', (event) => {
    event.preventDefault();
    qtdInput.stepDown(); 
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    let checkedCount = 0;
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        checkedCount++;
      }
    });

    if (checkedCount === 0 || qtdInput.value <= 0) {
      if (checkedCount === 0 && checkboxErrorMessage) {
        checkboxErrorMessage.innerText = 'Selecione pelo menos um sticker';
        checkboxErrorMessage.style.display = 'block';
        setTimeout(function() {
          checkboxErrorMessage.style.display = 'none';
        }, 3000);
      };

      if (qtdInput.value <= 0) {
           qtdInput.classList.add('error');
           setTimeout(function() {
            qtdInput.classList.remove('error');
          }, 3000);
      }

      return; 
    }

    console.log('Stickers selecionados:');
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        console.log(checkbox.value);
      }
    });

    console.log('Quantidade:', qtdInput.value);
    console.log('Descrição:', descricao.value);

    sucesso.style.display = 'block';
    setTimeout(function() {
      sucesso.style.display = 'none';
    }, 3000);
  
    form.reset(); 
  });
});

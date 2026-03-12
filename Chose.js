const select = document.getElementById('c1');
const content = document.getElementById('text');

function changeFontSize() {
    const selectedSize = select.value;
    content.style.fontSize = selectedSize;
  }

select.addEventListener('change', changeFontSize);
changeFontSiz()

const radio1 = document.getElementById("radio1").checked = true;
var button = document.getElementById('read_button');
let count = 1;


button.addEventListener('click',function() {
  var card = document.querySelector('.card');
  card.classList.toggle('active');

  if(card.classList.contains('active')){
    return button.textContent = 'Read less';
  }
  button.textContent = 'Read more';
});


function nextImage (){
  count ++;
  if(count>4){
    count = 1;
  }

  document.getElementById("radio"+count).checked = true;
}



setInterval (function(){
  nextImage();
}, 2000)

setInterval(carrossel,1800);


function enviarFormulario() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const opcaoSelecionada = document.querySelector('input[name="opcao"]:checked');
  const valor = document.getElementById('valor').value;

  if (nome && email && opcaoSelecionada && valor) {
    const tabela = document.getElementById('tabela');
    const newRow = tabela.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerHTML = nome;
    cell2.innerHTML = email;
    cell3.innerHTML = opcaoSelecionada.value;
    cell4.innerHTML = valor;

    // Limpa o formulário após o envio
    document.getElementById('form').reset();
  } else {
    alert('Preencha todos os campos antes de enviar o formulário.');
  }
}
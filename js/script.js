const btnPesquisarCep = document.querySelector('#btnPesquisar')
const inputCep = document.querySelector('#cep')
const valorCep = inputCep.value
const botaoLimpar = document.querySelector('#btnLimpar')


btnPesquisarCep.addEventListener('click', pesquisaCep)

function pesquisaCep(event) {
  event.preventDefault()
  const cep = inputCep.value
  buscaCep(cep)
}
function buscaCep(cep){ 
  fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => {
    return res.json();
    })
  .then(data => {
    if(data.erro){
      alert("CEP INVÁLIDO");
      return;
    }
    atribuirCampos(data);
  })
}

function atribuirCampos(data){
  const rua = document.querySelector("#rua");
  const complemento = document.querySelector("#complemento");
  const bairro = document.querySelector("#bairro");
  const cidade = document.querySelector("#cidade");
  const estado = document.querySelector("#estado"); 

  rua.value = data.logradouro;
  complemento.value = data.complemento;
  bairro.value = data.bairro;
  cidade.value = data.localidade;
  estado.value = data.uf;
}

botaoLimpar.addEventListener('click', event => {
  rua.value = ''
  complemento.value =''
  bairro.value = ''
  cidade.value = ''
  estado.value =''
  cep.value = ''
})
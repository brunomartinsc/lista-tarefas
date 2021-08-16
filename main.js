const inputTarefa = document.querySelector('.input-tarefa');
const btnAdicionar = document.querySelector('.btn-adicionar');
const tarefas = document.querySelector('.tarefas');


function criarLi(){
    const li = document.createElement('li');
    return li
}

function botaoApagar(li){
    const botao= document.createElement('button');
    botao.innerHTML = 'Apagar'
    botao.setAttribute('Class', 'apagar');
    botao.setAttribute('Title', 'Apagar está tarefa');
    li.appendChild(botao)
};

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
    }

});



inputTarefa.addEventListener('keypress', function(e){
    if(e.charCode ===13){
        criarTarefa(inputTarefa.value)
    }
})

function limparinput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criarTarefa(textoInput){
    const li = criarLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    botaoApagar(li)
    limparinput();
}


btnAdicionar.addEventListener('click', function() {
    if(!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
});


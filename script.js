const campo = document.getElementById('campo-tarefa');
const ul = document.getElementById('lista');

function adicionarTarefa(){
    const texto = campo.value.trim();
    if(texto === '') return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = texto;

    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'X';
    btnRemove.classList.add('btn-remove');

    li.addEventListener('click', () =>{
        span.classList.toggle('completo');
    });

    btnRemove.addEventListener('click', () =>{
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(btnRemove);
    ul.appendChild(li);

    campo.value = '';
    campo.focus();
}

campo.addEventListener('keydown', (event) =>{
    if(event.key === 'Enter'){
        adicionarTarefa();
    }
});
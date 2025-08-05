const campo = document.getElementById('campo-tarefa');
        const ul = document.getElementById('lista');
        const contador = document.getElementById('contador');
        const btnLimpar = document.getElementById('btn-limpar');

        function atualizaContador(){
            const totais = ul.querySelectorAll('li').length;
            const restantes = ul.querySelectorAll('li:not(.completo)').length;
            contador.textContent = `${restantes} tarefa${restantes !== 1 ? 's' : ''} restante${restantes !== 1 ? 's' : ''}`;
        }

        function adicionarTarefa(){
            const texto = campo.value.trim();
            if(texto === ''){
                alert('Por favor, digite uma tarefa válida.');
                return;
            }
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = texto;

            span.addEventListener('click', () => {
                span.classList.toggle('completo');
                atualizaContador();
            });

            const btnRemove = document.createElement('button');
            btnRemove.textContent = 'X';
            btnRemove.classList.add('btn-remove');
            btnRemove.addEventListener('click', () => {
                li.remove();
                atualizaContador();
            });

            li.appendChild(span);
            li.appendChild(btnRemove);
            ul.appendChild(li);
            campo.value = '';
            campo.focus();
            atualizaContador();
        }

        btnLimpar.addEventListener('click', () => {
            const concluídas = ul.querySelectorAll('.completo');
            concluídas.forEach(item => item.parentElement.remove());
            atualizaContador();
        });

        campo.addEventListener('keydown', (event) =>{
            if(event.key === 'Enter'){
                adicionarTarefa();
            }
        });

        // Inicializa o contador ao carregar
        atualizaContador();
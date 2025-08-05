// Obtém referências aos elementos do DOM
        const campo = document.getElementById('campo-tarefa');
        const ul = document.getElementById('lista');
        const contador = document.getElementById('contador');
        const btnLimpar = document.getElementById('btn-limpar');

        /**
         * Atualiza o contador de tarefas restantes.
         */
        function atualizaContador(){
            const restantes = ul.querySelectorAll('li:not(.completo)').length;
            contador.textContent = `${restantes} tarefa${restantes !== 1 ? 's' : ''} restante${restantes !== 1 ? 's' : ''}`;
        }

        /**
         * Cria uma nova tarefa na lista.
         */
        function adicionarTarefa(){
            const texto = campo.value.trim();
            if(texto === ''){
                alert('Por favor, digite uma tarefa válida.');
                return;
            }

            // Cria estrutura de <li>
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = texto;

            // Cria botão de remoção
            const btnRemove = document.createElement('button');
            btnRemove.textContent = 'X';
            btnRemove.classList.add('btn-remove');

            // Evento de remoção ao clicar no X
            btnRemove.addEventListener('click', (e) => {
                e.stopPropagation(); // Evita disparar o clique no <li>
                li.remove();
                atualizaContador();
            });

            // Evento de marcar/desmarcar ao clicar em qualquer parte do <li>
            li.addEventListener('click', () => {
                span.classList.toggle('completo');
                atualizaContador();
            });

            // Monta e adiciona à lista
            li.appendChild(span);
            li.appendChild(btnRemove);
            ul.appendChild(li);

            campo.value = '';
            campo.focus();
            atualizaContador();
        }

        // Limpa todas as tarefas concluídas
        btnLimpar.addEventListener('click', () => {
            const concluidas = ul.querySelectorAll('.completo');
            concluidas.forEach(span => span.parentElement.remove());
            atualizaContador();
        });

        // Adiciona tarefa ao pressionar Enter
        campo.addEventListener('keydown', (event) =>{
            if(event.key === 'Enter') adicionarTarefa();
        });

        // Inicializa o contador
        atualizaContador();
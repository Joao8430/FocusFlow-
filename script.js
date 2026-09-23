// ==========================================
// FOCUSFLOW - TIMER POMODORO
// ==========================================

// Procura no HTML o elemento que possui id="timer"
// e guarda uma referência para manipular seu conteúdo. 
const timerDisplay = document.getElementById("timer");

// Define o tempo inicial.
// 25 minutos × 60 segundos = 1500 segundos.
let time = 25 * 60;

// Variável que armazenará o identificador do setInterval.
// Começa vazia (null).
let interval = null;


// ==========================================
// FUNÇÃO RESPONSÁVEL POR ATUALIZAR O RELÓGIO
// ==========================================
function updateDisplay() {

    // Calcula quantos minutos restam.
    // Math.floor remove a parte decimal.
    const minutes = Math.floor(time / 60);

    // Calcula os segundos restantes.
    const seconds = time % 60;

    // Atualiza o texto exibido na tela.
    // padStart adiciona zeros à esquerda.
    timerDisplay.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


// ==========================================
// BOTÃO INICIAR
// ==========================================

// Seleciona o botão Start
const startButton = document.getElementById("start");

// Escuta cliques do usuário
startButton.addEventListener("click", () => {

    // Se já existe um intervalo rodando,
    // não cria outro.
    if (interval) {
        return;
    }

    // Executa uma função a cada 1 segundo
    interval = setInterval(() => {

        // Enquanto houver tempo
        if (time > 0) {

            // Remove 1 segundo
            time--;

            // Atualiza a tela
            updateDisplay();

        } else {

            // Quando chegar a zero

            // Para o intervalo
            clearInterval(interval);

            // Limpa a referência
            interval = null;

            // Mensagem para o usuário
            alert("Sessão concluída!");
        }

    }, 1000);

});


// ==========================================
// BOTÃO PAUSAR
// ==========================================

const pauseButton = document.getElementById("pause");

pauseButton.addEventListener("click", () => {

    // Interrompe o cronômetro
    clearInterval(interval);

    // Remove a referência
    interval = null;

});


// ==========================================
// BOTÃO RESETAR
// ==========================================

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {

    // Para o cronômetro caso esteja ativo
    clearInterval(interval);

    // Remove a referência
    interval = null;

    // Retorna para 25 minutos
    time = 25 * 60;

    // Atualiza a interface
    updateDisplay();

});


// ==========================================
// INICIALIZAÇÃO
// ==========================================

// Mostra o tempo assim que a página carrega
updateDisplay();
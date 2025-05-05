const prevButton = document.getElementById("prev");/* Seleciona o botão "anterior" pelo ID */

const nextButton = document.getElementById("next");/* Seleciona o botão "próximo" pelo ID */

const items = document.querySelectorAll(".item");/* Seleciona todos os itens do carrossel com a classe 'item' */

const dots = document.querySelectorAll(".dot");/* Seleciona todos os pontos indicadores com a classe 'dot' */

const numberIndicators = document.querySelector(".numbers");/* Seleciona o elemento que exibe o número do item ativo */

const list = document.querySelector(".list");/* Seleciona o contêiner da lista de itens */



let active = 0; /* Define o índice do item ativo (inicia no 0) */
const total = items.length; /* Calcula o número total de itens no carrossel */
let timer; /* Declara a variável para o temporizador de troca automática */

/* Função que atualiza o carrossel com base na direção (1 para próximo, -1 para anterior) */
function update(direction) {
  /* Remove a classe 'active' do item atualmente ativo */
  document.querySelector(".item.active").classList.remove("active");
  /* Remove a classe 'active' do ponto indicador atualmente ativo */
  document.querySelector(".dot.active").classList.remove("active");

  /* Se a direção for positiva (próximo item) */
  if (direction > 0) {
    active = active + 1; /* Incrementa o índice do item ativo */
    if (active === total) {
      active = 0; /* Volta ao primeiro item se atingir o último */
    }
  } 
  /* Se a direção for negativa (item anterior) */
  else if (direction < 0) {
    active = active - 1; /* Decrementa o índice do item ativo */
    if (active < 0) {
      active = total - 1; /* Vai ao último item se estiver no primeiro */
    }
  }
  
  items[active].classList.add("active");/* Adiciona a classe 'active' ao novo item ativo */
 
  dots[active].classList.add("active"); /* Adiciona a classe 'active' ao novo ponto indicador ativo */


  numberIndicators.textContent = String(active + 1).padStart(2, '0');  /* Atualiza o número do item ativo (ex.: '01', '02'), com zero à esquerda */
}


clearInterval(timer);/* Limpa o temporizador existente para evitar múltiplos intervalos */

/* Define um temporizador para trocar automaticamente para o próximo item a cada 5 segundos */
timer = setInterval(() => {
  update(1); /* Chama a função update com direção positiva */
}, 5000);

/* Adiciona um listener ao botão "anterior" para exibir o item anterior */
prevButton.addEventListener("click", function () {
  update(-1); /* Chama a função update com direção negativa */
});

/* Adiciona um listener ao botão "próximo" para exibir o próximo item */
nextButton.addEventListener("click", function () {
  update(1); /* Chama a função update com direção positiva */
});
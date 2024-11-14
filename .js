// Função para exibir as estatísticas ao clicar no botão
function mostrarEstatisticas() {
    var estatisticasDiv = document.getElementById("estatisticas-dados");
    if (estatisticasDiv.style.display === "none") {
        estatisticasDiv.style.display = "block";
    } else {
        estatisticasDiv.style.display = "none";
    }
}
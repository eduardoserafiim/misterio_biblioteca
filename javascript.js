function checkAnswer(suspect) {
    const resultDiv = document.getElementById('result');
    const solutionDiv = document.getElementById('solution');
    const resultTitle = document.getElementById('result-title');
    const resultMessage = document.getElementById('result-message');
    
    // Esconder botões
    document.querySelector('.suspects-buttons').style.display = 'none';
    
    if (suspect === 'juliana') {
        resultDiv.className = 'result correct';
        resultTitle.textContent = '🎉 Parabéns! Você acertou!';
        resultMessage.textContent = 'Você desvendou o mistério! Juliana Costa era realmente a assassina. Sua dedução foi perfeita!';
    } else {
        resultDiv.className = 'result incorrect';
        resultTitle.textContent = '❌ Não foi dessa vez...';
        if (suspect === 'ricardo') {
            resultMessage.textContent = 'Ricardo tinha o histórico de brigas, mas havia testemunhas que confirmaram parcialmente sua presença no porão — e nenhuma ligação forense direta com o castiçal.';
        } else if (suspect === 'marcelo') {
            resultMessage.textContent = 'Marcelo foi visto perto da estante, mas pode ter ido checar depois do barulho; sua presença era plausível para um frequentador.';
        } else if (suspect === 'eduardo') {
            resultMessage.textContent = 'Eduardo desligou as câmeras (falha grave), porém não há provas que ele tenha participado da agressão física.';
        }
    }
    
    resultDiv.style.display = 'block';
    solutionDiv.style.display = 'block';
    
    // Scroll para o resultado
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

function resetGame() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('solution').style.display = 'none';
    document.querySelector('.suspects-buttons').style.display = 'flex';
    
    // Scroll para o desafio
    document.querySelector('.challenge').scrollIntoView({ behavior: 'smooth' });
}
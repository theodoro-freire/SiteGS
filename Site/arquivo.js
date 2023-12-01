
    function verificarValores() {
        // Pegar os valores dos inputs
        var batimentos = parseInt(document.getElementById('batimentos').value);
        var saturacao = parseInt(document.getElementById('saturacao').value);
        var freq_respiratoria = parseInt(document.getElementById('freq_respiratoria').value);
        var pressao = parseInt(document.getElementById('pressao').value);

        // Verificações
        if (batimentos > 100) {
            alert("Batimentos estão altos! Risco de taquicardia.");
            cora_vermelho.style.display = "block";
            cora_preto.style.display = "none";
            cora_verde.style.display = "none";
        } else if (batimentos < 50) {
            alert("Batimentos estão baixos! Risco de Bradicardia.");
            cora_vermelho.style.display = "block";
            cora_preto.style.display = "none";
            cora_verde.style.display = "none";
        } else {
            cora_vermelho.style.display = "none";
            cora_preto.style.display = "none";
            cora_verde.style.display = "block";
        }

        if (saturacao < 90) {
            alert("Saturação baixa! Falta de oxigênio.");
            sat_vermelho.style.display = "block";
            sat_preto.style.display = "none";
            sat_verde.style.display = "none";
        } else {
            sat_vermelho.style.display = "none";
            sat_preto.style.display = "none";
            sat_verde.style.display = "block";
        }

        if (freq_respiratoria < 12) {
            alert("Frequência Respiratória baixa! Risco de bradipneia.");
            resp_vermelho.style.display = "block";
            resp_preto.style.display = "none";
            resp_verde.style.display = "none";
        } else if (freq_respiratoria > 20) {
            alert("Frequência Respiratória alta! Risco de taquipneia.");
            resp_vermelho.style.display = "block";
            resp_preto.style.display = "none";
            resp_verde.style.display = "none";
        } else {
            resp_vermelho.style.display = "none";
            resp_preto.style.display = "none";
            resp_verde.style.display = "block";
        }

        if (pressao > 140) {
            alert("Pressão alta!");
            pres_vermelho.style.display = "block";
            pres_preto.style.display = "none";
            pres_verde.style.display = "none";
        } else if (pressao < 90) {
            alert("Pressão baixa!");
            pres_vermelho.style.display = "block";
            pres_preto.style.display = "none";
            pres_verde.style.display = "none";
        } else {
            pres_vermelho.style.display = "none";
            pres_preto.style.display = "none";
            pres_verde.style.display = "block";
        }

        // Alerta se estiver tudo bem
        if (batimentos <= 100 && batimentos >= 50 && saturacao >= 90 && freq_respiratoria >= 12 && freq_respiratoria <= 20 && pressao <= 140 && pressao >= 90) {
            alert("Você está bem!");
        }
    }
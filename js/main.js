const form = document.getElementById('form-verificar');

form.addEventListener('submit',function(e){
    e.preventDefault();   
    const campoAinput = document.getElementById('prim-num');
    const campoBinput = document.getElementById('seg-num');

    const campoA = parseFloat(campoAinput.value);
    const campoB = parseFloat(campoBinput.value);

    const mensagemFalso = `Incorreto! O ${campoA} é maior que o número ${campoB}`;
    const mensagemVerdade = `Correto! O ${campoB} é maior que o número ${campoA}`;
    const mensagemIgual = `Empate! São os mesmos números.`;
    
    if(campoA >= campoB){
        const containerFalso = document.querySelector('.mensagem-falso');
        containerFalso.innerHTML = mensagemFalso;
        containerFalso.style.display = 'block';
        document.querySelector('.mensagem-verdade').style.display = 'none';
    }
    else{     
        const containerVerdade = document.querySelector('.mensagem-verdade');
        containerVerdade.innerHTML = mensagemVerdade;
        containerVerdade.style.display = 'block';
        document.querySelector('.mensagem-falso').style.display = 'none';
    }
}
);
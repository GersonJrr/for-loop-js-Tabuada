const frm = document.querySelector("form");
const rep = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = Number(frm.inNumero.value); 
    let resposta = ""; 

    for (let i = 1; i <= 50; i++) {
        resposta += `${numero} x ${i} = ${numero * i}\n`;
    }

    rep.innerText = resposta;

});

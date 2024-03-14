function comecar() {
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome);
}

function show(nome) {
    var div = document.getElementById("selects-div");
    var nomeSpan = document.getElementById("nome-span"); // Obtenha o span pelo ID
    if (nome && nome.trim() !== "") {
        div.style.display = "block";
        document.getElementById("exampleFormControlInput1").style.background = "none";
        nomeSpan.textContent = nome; // Atualize o texto do span com o nome
    } else {
        document.getElementById("error").style.display = "block";
    }
}

function fechar() {
    document.getElementById("error").style.display = "none";
    document.getElementById("exampleFormControlInput1").style.background = "lightorange";
}

function calcularTotal() {
    var selectBlusas = document.getElementById("selectBlusas");
    var selectCalcados = document.getElementById("selectCalcados");
    var selectCalcas = document.getElementById("selectCalcas");
    var selectBermudas = document.getElementById("selectBermudas");
    var selectRegatas = document.getElementById("selectRegatas");
    var resultadoSpan = document.getElementById("resultado");
    
    if (!selectBlusas || !selectCalcados || !selectCalcas || !selectBermudas || !selectRegatas || !resultadoSpan) {
        console.error("Um ou mais elementos não foram encontrados.");
        return;
    }

    var total = 0;
    var blusas = 0;
    var calcados = 0;
    var calcas = 0;
    var bermudas = 0;
    var regatas = 0;

    switch (selectBlusas.value) {
        case "prato1":
            total += 299.99;
            blusas = 299.99;
            break;
        case "CAMISETA MANGA COMPRIDA":
            total += 129.99;
            blusas = 129.99;
            break;
        case "MOLETOM CINZA":
            total += 299.99;
            blusas = 299.99;
            break;
        case "MOLETOM PRETO CHAMIPON":
            total += 299.99;
            blusas = 299.99;
            break;
        case "MOLETOM BICOLOR MODERNO":
            total += 299.99;
            blusas = 299.99;
            break;
    }

    switch (selectCalcados.value) {
        case "TÊNIS AIR FORCE1":
            total += 599.99;
            calcados = 599.99;
            break;
        case "TÊNIS NIKE AIR MAX TW EWT":
            total += 1299.99;
            calcados = 1299.99;
            break;
        case "TÊNIS ADIDAS OZMILLEN":
            total += 799.99;
            calcados = 799.99;
            break;
        case "TÊNIS AIR FORCE 1 '07":
            total += 799.99;
            calcados = 799.99;
            break;
        case "TÊNIS ADIDAS ADI 2000":
            total += 799.99;
            calcados = 799.99;
            break;
    }

    switch (selectCalcas.value) {
        case "JOGGER BALI HAI CWB PINE":
            total += 84.99;
            calcas = 84.99;
            break;
        case "CALÇA BALI HAI NYLON":
            total += 64.99;
            calcas = 64.99;
            break;
        case "CALÇA BOLSO FACA PREGAS":
            total += 94.99;
            calcas = 94.99;
            break;
        case "CALÇA BALI HAI STAR":
            total += 89.99;
            calcas = 89.99;
            break;
        case "CALÇA MOLETOM JOGGER LOVERS":
            total += 114.99;
            calcas = 114.99;
            break;
    }

    switch (selectBermudas.value) {
        case "BERMUDA BALI HAI CHINO":
            total += 124.99;
            bermudas = 124.99;
            break;
        case "BERMUDA SARJA CHINO BALI HAI":
            total += 84.99;
            bermudas = 84.99;
            break;
        case "BERMUDA BALI HAI CARGO RIP STOP":
            total += 124.99;
            bermudas = 124.99;
            break;
        case "BERMUDA JEANS BALI HAI SLIM BALI HAI":
            total += 124.99;
            bermudas = 124.99;
            break;
        case "SAIA CURTA ADIDAS ORIGINALS ALWAYS BLACK":
            total += 249.99;
            bermudas = 249.99;
            break;
    }

    switch (selectRegatas.value) {
        case "REGATA BALI HAI STAR FEMININO":
            total += 29.99;
            regatas = 29.99;
            break;
        case "REGATA MITCHEL & NESS BOSTON CELTICS":
            total += 1039.99;
            regatas = 1039.99;
            break;
        case "REGATA MITCHELL & NESS CHICAGO BULLS PIPPEN":
            total += 1039.99;
            regatas = 1039.99;
            break;
        case "REGATA MITCHELL & NESS ORLANDO MAGIC SHAQUILLE O'NEAL":
            total += 1039.99;
            regatas = 1039.99;
            break;
        case "REGATA CREATURE SLAUGHTER OUTLINE":
            total += 129.99;
            regatas = 129.99;
            break;
    }

    document.getElementById("pedido-pronto").style.display = "block";
    document.getElementById("blusas-pronto").textContent = selectBlusas.value + " R$ " + blusas.toFixed(2);
    document.getElementById("calcados-pronto").textContent = selectCalcados.value + " R$ " + calcados.toFixed(2);
    document.getElementById("calcas-pronto").textContent = selectCalcas.value + " R$ " + calcas.toFixed(2);
    document.getElementById("bermudas-pronto").textContent = selectBermudas.value + " R$ " + bermudas.toFixed(2);
    document.getElementById("regatas-pronto").textContent = selectRegatas.value + " R$ " + regatas.toFixed(2);
    resultadoSpan.textContent = "R$ " + total.toFixed(2);
}

function limpar() {
    document.getElementById("pedido-pronto").style.display = "none";
    document.getElementById("selects-div").style.display = "none";
}
function whatsapp(){
    var numeroTelefone = "5541988928595";
    
    calcularTotal(); // Certifica-se de que o total é calculado antes de prosseguir

    var nomeGlobal = document.getElementById("exampleFormControlInput1").value;

    var selectBlusas = document.getElementById("selectBlusas").value;
    var selectCalcados = document.getElementById("selectCalcados").value;
    var selectCalcas = document.getElementById("selectCalcas").value;
    var selectBermudas = document.getElementById("selectBermudas").value;
    var selectRegatas = document.getElementById("selectRegatas").value;

    var blusas = getPrice(selectBlusas);
    var calcados = getPrice(selectCalcados);
    var calcas = getPrice(selectCalcas);
    var bermudas = getPrice(selectBermudas);
    var regatas = getPrice(selectRegatas);

    var total = blusas + calcados + calcas + bermudas + regatas;

    var itensEscolhidos = `
Itens Escolhidos:
- ${selectBlusas}: R$ ${blusas.toFixed(2)}
- ${selectCalcados}: R$ ${calcados.toFixed(2)}
- ${selectCalcas}: R$ ${calcas.toFixed(2)}
- ${selectBermudas}: R$ ${bermudas.toFixed(2)}
- ${selectRegatas}: R$ ${regatas.toFixed(2)}

Total: R$ ${total.toFixed(2)}
`;

    var linkWhatsApp = 
    "https://wa.me/" + 
    numeroTelefone + 
    "?text=Nome:" + 
    nomeGlobal + 
    encodeURIComponent(itensEscolhidos);

    window.open(linkWhatsApp, "_blank");
}

function getPrice(item) {
    switch (item) {
        case "Arroz e Feijão":
            return 299.99;
            break;
        case "CAMISETA MANGA COMPRIDA":
            return 129.99;
            break;
        case "MOLETOM CINZA":
            return 299.99;
            break;
        case "MOLETOM PRETO CHAMPION":
            return 299.99;
            break;
        case "MOLETOM BICOLOR MODERNO":
            return 299.99;
            break;
        case "TÊNIS AIR FORCE1":
                return 599.99;
                break;
        case "TÊNIS NIKE AIR MAX TW EWT":
                return 1299.99;
                break;
        case "TÊNIS ADIDAS OZMILLEN":
                return 799.99;
                break;
        case "TÊNIS AIR FORCE 1 '07":
                return 799.99;
                break;
        case "TÊNIS ADIDAS ADI 2000":
                return 799.99;
                break;
        case "JOGGER BALI HAI CWB PINE":
                    return 84.99;
                    break;
        case "CALÇA BALI HAI NYLON":
                    return 64.99;
                    break;
        case "CALÇA BOLSO FACA PREGAS":
                    return 94.99;
                    break;
        case "CALÇA BALI HAI STAR":
                    return 89.99;
                    break;
        case "CALÇA MOLETOM JOGGER LOVERS":
                    return 114.99;
                    break;
                    case "BERMUDA BALI HAI CHINO":
                        return 124.99;
                        break;
                    case "CBERMUDA SARJA CHINO BALI HAI":
                        return 84.99;
                        break;
                    case "BERMUDA BALI HAI CARGO RIP STOP":
                        return 124.99;
                        break;
                    case "BERMUDA JEANS BALI HAI SLIM BALI HAI":
                        return 124.99;
                        break;
                    case "SAIA CURTA ADIDAS ORIGINALS ALWAYS BLACK":
                        return 249.99;
                        break;
                        case "REGATA BALI HAI STAR FEMININO":
                            return 29.99;
                            break;
                        case "REGATA MITCHEL & NESS BOSTON CELTICS":
                            return 1039.99;
                            break;
                        case "REGATA MITCHELL & NESS CHICAGO BULLS PIPPEN":
                            return 1039.99;
                            break;
                        case "REGATA MITCHELL & NESS ORLANDO MAGIC SHAQUILLE O'NEAL":
                            return 1039.99;
                            break;
                        case "REGATA CREATURE SLAUGHTER OUTLINE":
                            return 129.99;
                            break;
        // Adicione os preços restantes aqui...
        default:
            return 0;
    }
}
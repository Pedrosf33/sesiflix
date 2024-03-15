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
    var selectFilmes = document.getElementById("selectFilmes");
    var selectseries = document.getElementById("selectseries");
    var selectdocumentarios = document.getElementById("selectdocumentarios");
    var selectdesenhos = document.getElementById("selectdesenhos");
    var selectromance = document.getElementById("selectromance");
    var resultadoSpan = document.getElementById("resultado");
    
    if (!selectFilmes || !selectseries || !selectdocumentarios| !selectdesenhos || !selectromance || !resultadoSpan) {
        console.error("Um ou mais elementos não foram encontrados.");
        return;
    }

    var total = 0;
    var Filmes = 0;
    var series = 0;
    var documentarios = 0;
    var desenho = 0;
    var romance = 0;

    switch (selectFilmes.value) {
        case "Dois irmãos":
            total += 19.90;
            Filmes = 19.90;
            break;
        case "Arremessando alto":
            total += 19.90;
                Filmes= 19.90;        
            break;
        case "Sonic 2":
            total += 19.90;
            Filmes = 19.90;
            break;
        case "Avatar":
            total += 19.90;
            Filmes = 19.90;
            break;
        case "Bob Marley":
            total += 19.90;
            Filmes = 19.90;
            break;
    }

    switch (selectseries.value) {
        case "Monn knight":
            total += 29.90;
            series = 29.90;
            break;
        case "Peaky blinders":
            total +=29.90;
            series =29.90;
            break;
        case "Spider":
            total += 29.90;
            series = 29.90;
            break;
        case "Suits":
            total += 29.90;
            series = 29.90;
            break;
        
    }

    switch (selectdocumentarios.value) {
        case "The playbook":
            total += 53.90;
           documentarios = 53.90;
            break;
        case "Democracia em vertigem":
            total += 53.90;
           documentarios = 53.90;
            break;
        case "Becoming":
            total += 53.90;
           documentarios = 53.90;
            break;
        case "Dowm to earth":
            total += 53.90;
           documentarios = 53.90;
            break;
        case "Michael Jordan":
            total += 53.90;
           documentarios = 53.90;
            break;
    }

    switch (selectdesenhos.value) {
        case "Os jovens titãs":
            total += 33.90;
            desenho = 33.90;
            break;
        case "Dragon ball":
            total += 33.90;
            desenho = 33.90;
            break;
        case "Avatar":
            total += 33.90;
            desenho = 33.90;
            break;
        case "Gumball":
            total += 33.90;
            desenho = 33.90;
            break;
        case "Ben 10":
            total += 33.90;
            desenho = 33.90;
            break;
    }

    switch (selectromance.value) {
        case "A cinco passos de você":
            total += 39.90;
            romance = 39.90;
            break;
        case "A culpa é das estrelas":
            total += 39.90;
            romance = 39.90;
            break;
        case "First love":
            total += 39.90;
            romance = 39.90;
            break;
        case "Redeeming love":
            total += 39.90;
            romance = 39.90;
            break;
        case "Crepúsculo":
            total += 39.90;
            romance = 39.90;
            break;
    }

    document.getElementById("pedido-pronto").style.display = "block";
    document.getElementById("Filmes-pronto").textContent = selectFilmes.value + " R$ " + Filmes.toFixed(2);
    document.getElementById("series-pronto").textContent = selectseries.value + " R$ " + series.toFixed(2);
    document.getElementById("documentarios-pronto").textContent = selectdocumentarios.value + " R$ " +documentarios.toFixed(2);
    document.getElementById("desenho-pronto").textContent = selectdesenhos.value + " R$ " + desenho.toFixed(2);
    document.getElementById("romance-pronto").textContent = selectromance.value + " R$ " + romance.toFixed(2);
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

    var selectFilmes = document.getElementById("selectFilmes").value;
    var selectseries = document.getElementById("selectseries").value;
    var selectdocumentarios = document.getElementById("selectdocumentarios").value;
    var selectdesenhos = document.getElementById("selectdesenhos").value;
    var selectromance = document.getElementById("selectromance").value;

    var Filmes = getPrice(selectFilmes);
    var series = getPrice(selectseries);
    var documentarios = getPrice(selectdocumentarios);
    var desenho = getPrice(selectdesenhos);
    var romance = getPrice(selectromance);

    var total = Filmes + series + documentarios + desenho + romance;

    var itensEscolhidos = `
Itens Escolhidos:
- ${selectFilmes}: R$ ${Filmes.toFixed(2)}
- ${selectseries}: R$ ${series.toFixed(2)}
- ${selectdocumentarios}: R$ ${documentarios.toFixed(2)}
- ${selectdesenhos}: R$ ${desenho.toFixed(2)}
- ${selectromance}: R$ ${romance.toFixed(2)}

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
        case "Dois irmãos":
            return 19.90;
            break;
        case "Arremessando alto":
            return 19.90;
            break;
        case "Sonic 2":
           return 19.90;
            break;
        case "Avatar":
           return 19.90;
            break;
        case "Bob Marley":
           return 19.90;
            break;
        case "Moon knight":
                return 29.90;
                break;
        case "You":
               return 29.90;
                break;
        case "Peaky blinders":
                return 29.90;
                break;
        case "Spider":
                return 29.90;
                break;
        case "Suits":
                return 29.90;
                break;

        case "Democracia em vertigem":
                    return 53.90;
                    break;
        case "Becoming":
                    return 53.90;
                    break;
        case "Dowm to earth":
                    return 53.90;
                    break;
        case "Michael Jordan":
                    return 53.90;
                    break;
        case "The playbook":
                    return 53.90;
                    break;
                    case "Os jovens titãs":
                        return 33,90;
                        break;
                    case "Dragon ball":
                        return 33.90;
                        break;
                    case "Avatar":
                        return 33.90
                        break;
                    case "Gumball":
                        return 33.90;
                        break;
                    case "Ben 10":
                        return 33.90;
                        break;
                        case "A cinco passos de você":
                            return 39.90;
                            break;
                        case "A culpa é das estrelas":
                            return 39.90;
                            break;
                        case "First love":
                            return 39.90;
                            break;
                        case "Redeeming love":
                            return 39.90;
                            break;
                        case "Crepúsculo":
                            return 39.90;
                            break;
        // Adicione os preços restantes aqui...
        default:
            return 0;
    }
}
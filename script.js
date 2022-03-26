var prods = [{
        id: 1,
        name: "Feijoada Completa"
    },
    {
        id: 2,
        name: "Tapioca Doce"
    },
    {
        id: 3,
        name: "Coxinha da casa"
    },
    {
        id: 4,
        name: "Massa ao molho"
    },
    {
        id: 5,
        name: "Mini-Hamburguer"
    },
    {
        id: 6,
        name: "Panqueca"
    },
];

var thePrices = [33,16,26,10,13,12]

function start() {
    saida.innerHTML = '';

    var Cliente, Numero, Email;

    Cliente = document.getElementById('Cliente').value
    Numero = document.getElementById('phone').value
    Email = document.getElementById('email').value

    if (Cliente == "" || Numero == "" || Email == "") {
        document.getElementById("calculate").innerHTML = "É necessário preencher todos os campos"
        setTimeout(() => {
            document.getElementById("calculate").innerHTML = "Calcular";
        }, 1500);

    } else {
        saida.innerHTML += "Prezado(a) <b>" + Cliente + "</b><br><br> Seu pedido é: <br><br>"
        var finalPrice = 0,
            quantSum = 0;

        for (i = 0; i < 6; i++) {
            quant = document.getElementById(i + 1).value

            if (quant != 0) {
                var totalPrice = thePrices[i] * quant
                finalPrice += totalPrice;
                quantSum += quant

                saida.innerHTML += "<li>Prato: " + prods[i].name + " - Preço Individual: R$ " + thePrices[i] + ",00 - Quantidade: " + quant + " - Total: R$ " + totalPrice + ",00";
            }
        }

        
        if (quantSum == 0) {

            document.getElementById("calculate").innerHTML = "Sua comanda está vazia"
            setTimeout(() => {
                document.getElementById("calculate").innerHTML = "Calcular";
            }, 1500);
        }

        saida.innerHTML += "<br><br><b>Valor Total R$ " + finalPrice + ",00<b>";
    }
}
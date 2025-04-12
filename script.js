// Criando a classe
class parquimetro {
    constructor (){
        this.valor = document.getElementById('receber');
        this.tempo = document.getElementById('tempo');
    }
    // Criando o método
    calcular (){    
        //variavel para calculo
        let troco = this.valor.value - 0

        // Validação para valor inserido
        if (this.valor.value.length == 0 || this.valor.value < 1){
            window.alert('[ERRO]Sem moeda, ou valor inválido!')
        } else if (this.valor.value == 1) {
            this.tempo.innerHTML = `Para o valor de ${Number(this.valor.value).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}).replace(',','.')}, você tem 30 minutos no estacionamento!`
        } else if (this.valor.value > 1 && this.valor.value < 1.75){
            troco = this.valor.value - 1
            this.tempo.innerHTML = `Para o valor de ${Number(this.valor.value).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}).replace(',','.')}, você tem 30 minutos no estacionamento! <br>Troco de ${Number(troco).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}).replace(',','.')}`
        } else if (this.valor.value < 3) {
            troco = this.valor.value - 1.75
            this.tempo.innerHTML = `Para o valor de ${Number(this.valor.value).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}).replace(',','.')}, você tem 60 minutos no estacionamento! <br>Troco de ${Number(troco).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}).replace(',','.')}`
        } else {
            troco = this.valor.value - 3
            this.tempo.innerHTML =`Para o valor de ${Number(this.valor.value).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}).replace(',','.')}, você tem 120 minutos que é o tempo de permanência máximo! <br>Troco de ${Number(troco).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}).replace(',','.')}`
        }
        
    }
}
// Criando o objeto
const carro1 = new parquimetro()

// Chamando o objeto com evento
const botao = document.getElementById('comprar')
botao.addEventListener('click', () => {carro1.calcular()});

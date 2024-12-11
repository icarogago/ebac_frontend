// Classe base
class PecaComputador {
    constructor(nome, fabricante, preco) {
        this.nome = nome;
        this.fabricante = fabricante;
        this.preco = preco;
    }

    // Método para exibir informações da peça
    exibirInfo() {
        return `Nome: ${this.nome}, Fabricante: ${this.fabricante}, Preço: R$${this.preco.toFixed(2)}`;
    }
}

// Classe herdeira: Processador
class Processador extends PecaComputador {
    constructor(nome, fabricante, preco, nucleos) {
        super(nome, fabricante, preco);
        this.nucleos = nucleos;
    }

    // Sobrescrevendo o método para incluir informações específicas do processador
    exibirInfo() {
        return `${super.exibirInfo()}, Núcleos: ${this.nucleos}`;
    }
}

// Classe herdeira: MemoriaRAM
class MemoriaRAM extends PecaComputador {
    constructor(nome, fabricante, preco, capacidade) {
        super(nome, fabricante, preco);
        this.capacidade = capacidade; // em GB
    }

    // Sobrescrevendo o método para incluir informações específicas da memória RAM
    exibirInfo() {
        return `${super.exibirInfo()}, Capacidade: ${this.capacidade}GB`;
    }
}

// Criando instâncias de objetos
const processador1 = new Processador("Ryzen 5 5600X", "AMD", 1249.99, 6);
const memoriaRAM1 = new MemoriaRAM("Corsair Vengeance LPX", "Corsair", 399.90, 16);
const memoriaRAM2 = new MemoriaRAM("HyperX Fury", "HyperX", 299.90, 8);

// Exibindo informações das instâncias
console.log(processador1.exibirInfo());
console.log(memoriaRAM1.exibirInfo());
console.log(memoriaRAM2.exibirInfo());
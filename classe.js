// Definição da Classe Herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    // O .trim() remove espaços extras e o .toLowerCase() ignora maiúsculas
    this.tipo = tipo.trim().toLowerCase();
  }

  atacar() {
    let ataque = "";

    // Usamos o .includes() para que o código aceite "o guerreiro" ou "guerreiro"
    if (this.tipo.includes("mago")) {
      ataque = " magia";
    } else if (this.tipo.includes("guerreiro")) {
      ataque = " espada";
    } else if (this.tipo.includes("monge")) {
      ataque = " artes marciais";
    } else if (this.tipo.includes("ninja")) {
      ataque = " shuriken";
    } else if (this.tipo.includes("sereia")) {
      ataque = " tridente";
    } else {
      ataque = "usou um ataque genérico";
    }

    // Exibindo a mensagem final formatada
    console.log(`${this.tipo} atacou usando ${ataque}`);
  }
}

// --- TESTES ---

// 1. Teste do Guerreiro
let meuHeroi = new Heroi("Warley", 26, "o guerreiro");
meuHeroi.atacar(); 
// Saída: o guerreiro atacou usando usou espada

// 2. Teste da Sereia Luá
let heroiSereia = new Heroi("Luá", 39, "a sereia luá");
heroiSereia.atacar(); 
// Saída: a sereia luá atacou usando usou tridente

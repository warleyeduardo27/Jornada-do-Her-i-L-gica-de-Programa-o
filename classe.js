// Definição da Classe Herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método atacar seguindo os requisitos da tabela
  atacar() {
    let ataque = "";

    // Estrutura de decisão para definir o tipo de ataque
    if (this.tipo === "mago") {
      ataque = "usou magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "usou espada";
    } else if (this.tipo === "monge") {
      ataque = "usou artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "usou shuriken";
    } else if (this.tipo === "sereia") {
      ataque = "usou tridente";
    } else {
      ataque = "usou um ataque genérico";
    }

    // Exibindo a mensagem final
    console.log(`${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de uso (Como o sistema da DIO vai testar seu código)
let meuHeroi = new Heroi("Warley", 26, "guerreiro");
meuHeroi.atacar(); // Saída: o guerreiro atacou usando espada

let magoHeroi = new Heroi("Luá", 39, "sereia");
magoHeroi.atacar(); // Saída: o mago atacou usando magia
class Personagem {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    ataque() {
        let ataque = "";
        if (this.tipo === "guerreiro") {
            ataque = "Usou Espada";
        } else if (this.tipo === "monge") {
            ataque = "Usou Artes Marciais";
        } else if (this.tipo === "ninja") {
            ataque = "Usou Shuriken";
        } else if (this.tipo === "mago") {
            ataque = "Usou Magia";
        }
        return ataque;
    }
}

let personagem1 = new Personagem("Jão", 55, "ninja");
let personagem2 = new Personagem("Zé", 100, "guerreiro");
let personagem3 = new Personagem("Chico", 42, "mago");
let personagem4 = new Personagem("Tião", 75, "monge");

console.log(`O ${personagem1.tipo} atacou usando ${personagem1.ataque()}`);
console.log(`O ${personagem2.tipo} atacou usando ${personagem2.ataque()}`);
console.log(`O ${personagem3.tipo} atacou usando ${personagem3.ataque()}`);
console.log(`O ${personagem4.tipo} atacou usando ${personagem4.ataque()}`);

class heroi{
	constructor(nome, idade, tipo){
    	this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    ataque = "";

    atacar(){
        if (this.tipo === "mago"){
            this.ataque = "magia";
        }
        else if (this.tipo === "guerreiro"){
            this.ataque = "espada";
        }
        else if (this.tipo === "monge"){
           this.ataque = "artes marciais";
        }
        else if (this.tipo === "ninja"){
            this.ataque = "shuriken";
        }
       

        console.log("O " + this.tipo + " atacou usando " + this.ataque)
    }
}
let heroiEscolhido = new heroi("João", 28, "mago")
let heroiEscolhido2 = new heroi("Carlos", 25, "guerreiro")
let heroiEscolhido3 = new heroi("Jose", 27, "monge")
let heroiEscolhido4 = new heroi("Mario", 22, "ninja")


heroiEscolhido.atacar()
heroiEscolhido2.atacar()
heroiEscolhido3.atacar()
heroiEscolhido4.atacar()



    	




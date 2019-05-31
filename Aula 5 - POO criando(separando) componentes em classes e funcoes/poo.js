class Usuario {
    construtor(email, senha) {
        this.email = email;
        this.senha = senha;
    }
    // retornaemail() {
    //     console.log(`email:${this.email}`);
    // }

    // retornasenha() {
    //     console.log(`senha:${this.senha}`);
    // }

    eAdm() {
        if (this.Admin == true) {
            return (`ADM SIM !`);
        } else {
            return (`nao é adm !`)

        }
    }
}


class Admin extends Usuario {
    constructor(email, senha) {
        super (email, senha);
        this.Admin = true;
    }
    usuarioAdmin() {
        console.log(`Admin:${this.admin}`);
    }
}



const user1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');


// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(props) {
        this.props = props;
    }
    static criarCliente(nome, email, senha, numero) {
        return new Cliente({
            id: crypto.randomUUID().toString(),
            nome,
            email,
            senha,
            numero
        });
    }
    get id() {
        return this.props.id;
    }
    get nome() {
        return this.props.nome;
    }
    set nome(nome) {
        this.props.nome = nome;
    }
    get email() {
        return this.props.email;
    }
    set email(email) {
        this.props.email = email;
    }
    get senha() {
        return this.props.senha;
    }
    set senha(senha) {
        this.props.senha = senha;
    }
    get numero() {
        return this.props.numero;
    }
    set numero(numero) {
        this.props.numero = numero;
    }
}
exports.Cliente = Cliente;

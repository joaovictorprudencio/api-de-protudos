"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(props) {
        this.props = props;
    }
    static criarProduto(nome, preco) {
        return new Produto({
            id: crypto.randomUUID().toString(),
            nome,
            preco,
            quantidade: 0,
        });
    }
    static persistencia(id, nome, preco, quantidade) {
        return new Produto({
            id,
            nome,
            preco,
            quantidade,
        });
    }
    get id() {
        return this.props.id;
    }
    get nome() {
        return this.props.nome;
    }
    get preco() {
        return this.props.preco;
    }
    get quantidade() {
        return this.props.quantidade;
    }
    entradaEstoque(valor) {
        this.props.quantidade += valor;
    }
    saidaEstoque(valor) {
        if (this.props.quantidade < valor) {
            throw new Error("quantidade em estoque é insuficiente");
        }
        this.props.quantidade -= valor;
    }
}
exports.Produto = Produto;

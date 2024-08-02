"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoServiceIplement = void 0;
class ProdutoServiceIplement {
    constructor(repository) {
        this.repository = repository;
    }
    build(repository) {
        return __awaiter(this, void 0, void 0, function* () {
            return new ProdutoServiceIplement(repository);
        });
    }
    vender(id, quantidade) {
        return __awaiter(this, void 0, void 0, function* () {
            const produto = yield this.repository.buscar(id);
            if (!produto) {
                throw new Error(`O produto ${id} não foi encontrado`);
            }
            produto.saidaEstoque(quantidade);
            yield this.repository.atualizar(produto);
            const saida = {
                id: produto.id,
                quantidade: produto.quantidade,
            };
            return saida;
        });
    }
    comprar(id, quantidade) {
        return __awaiter(this, void 0, void 0, function* () {
            const produto = yield this.repository.buscar(id);
            if (!produto) {
                throw new Error(`O produto ${id} não foi encontrado`);
            }
            produto.entradaEstoque(quantidade);
            yield this.repository.atualizar(produto);
            const compra = {
                id: produto.id,
                quantidade: produto.quantidade,
            };
            return compra;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const aProdutos = yield this.repository.list();
            const produtos = aProdutos.map((p) => {
                return {
                    id: p.id,
                    nome: p.nome,
                    preco: p.preco,
                    quantidade: p.quantidade,
                };
            });
            const lista = {
                produtos,
            };
            return lista;
        });
    }
}
exports.ProdutoServiceIplement = ProdutoServiceIplement;

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoRepositoryPrisma = void 0;
const conexao_1 = __importDefault(require("./lib/conexao"));
const Produto_1 = require("../../entities/Produto");
class ProdutoRepositoryPrisma {
    constructor(prisma) {
        this.prisma = prisma;
    }
    build(prisma) {
        return new ProdutoRepositoryPrisma(prisma);
    }
    salvar(produto) {
        return __awaiter(this, void 0, void 0, function* () {
            const salvarProduto = yield conexao_1.default.produto.create({
                data: {
                    id: produto.id,
                    nome: produto.nome,
                    preco: produto.preco,
                    quantidade: produto.quantidade,
                },
            });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const allProdutos = yield conexao_1.default.produto.findMany();
            const produtos = allProdutos.map((p) => {
                const { id, nome, preco, quantidade } = p;
                return Produto_1.Produto.persistencia(id, nome, preco, quantidade);
            });
            return produtos;
        });
    }
    atualizar(produto) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                id: produto.id,
                nome: produto.nome,
                preco: produto.preco,
                quantidade: produto.quantidade,
            };
            const atualizar = yield this.prisma.produto.update({
                where: { id: produto.id },
                data,
            });
        });
    }
    buscar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const Aproduto = yield this.prisma.produto.findUnique({
                where: { id },
            });
            if (!Aproduto) {
                throw new Error("produto não encontrado");
                return null;
            }
            const { nome, preco, quantidade } = Aproduto;
            const produto = Produto_1.Produto.persistencia(id, nome, preco, quantidade);
            return produto;
        });
    }
}
exports.ProdutoRepositoryPrisma = ProdutoRepositoryPrisma;

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
exports.ProdutosController = void 0;
const conexao_1 = __importDefault(require("../repository/prisma/lib/conexao"));
const produto_respository_prisma_1 = require("../repository/prisma/produto.respository.prisma");
const protudo_implementation_1 = require("../service/protudo.implementation");
class ProdutosController {
    constructor() { }
    static build() {
        return new ProdutosController();
    }
    criarProduto(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, preco } = request.body;
            const repository = produto_respository_prisma_1.ProdutoRepositoryPrisma.build(conexao_1.default);
            const service = yield protudo_implementation_1.ProdutoServiceIplement.build(repository);
            const entrada = yield service.criar(nome, preco);
            const data = {
                id: entrada.id,
                nome,
                preco,
                quantidade: entrada.quantidade,
            };
            response.status(201).json(data).send();
        });
    }
    listagemProdutos(resquest, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = produto_respository_prisma_1.ProdutoRepositoryPrisma.build(conexao_1.default);
            const service = yield protudo_implementation_1.ProdutoServiceIplement.build(repository);
            const listagem = yield service.list();
            const dataList = {
                produtos: listagem.produtos,
            };
            response.status(200).json(dataList).send();
        });
    }
    CompraProdutos(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { quantidade } = request.body;
            const repository = produto_respository_prisma_1.ProdutoRepositoryPrisma.build(conexao_1.default);
            const service = yield protudo_implementation_1.ProdutoServiceIplement.build(repository);
            const compra = yield service.comprar(id, quantidade);
            const data = {
                id: compra.id,
                quantidade: compra.quantidade,
            };
            response.status(201).json(data).send();
        });
    }
    vender(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { quantidade } = request.body;
            const repository = produto_respository_prisma_1.ProdutoRepositoryPrisma.build(conexao_1.default);
            const service = yield protudo_implementation_1.ProdutoServiceIplement.build(repository);
            const venda = yield service.vender(id, quantidade);
            const data = {
                id: venda.id,
                venda: quantidade
            };
            response.status(200).json(data);
        });
    }
}
exports.ProdutosController = ProdutosController;

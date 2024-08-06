"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller/controller");
const express_1 = require("./controller/express");
function main() {
    const api = express_1.ApiExpress.build();
    const controller = controller_1.ProdutosController.build();
    api.addGetRoute("/produtos", controller.listagemProdutos);
    api.addGetRoute("/produto/id:/comprar", controller.CompraProdutos);
    api.addGetRoute("/produto/id:/vender", controller.vender);
    api.addGetRoute("/produto/novo", controller.criarProduto);
    api.start(3000);
}
main();

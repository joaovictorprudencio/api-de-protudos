import { ProdutosController } from "./controller/controller";
import { ApiExpress } from "./controller/express";


function main(){


    const api = ApiExpress.build();
    const controller = ProdutosController.build();

    api.addGetRoute("/produtos", controller.listagemProdutos);
    api.addGetRoute("/produto/id:/comprar", controller.CompraProdutos);
    api.addGetRoute("/produto/id:/vender", controller.vender);
    api.addGetRoute("/produto/novo", controller.criarProduto)
    api.start(3000);
}

main()


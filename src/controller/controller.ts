import prisma from "../repository/prisma/lib/conexao";
import { Request, Response } from "express";
import { ProdutoRepositoryPrisma } from "../repository/prisma/produto.respository.prisma";
import { ProdutoServiceIplement } from "../service/protudo.implementation";

export class ProdutosController {
  private constructor() {}
  public static build() {
    return new ProdutosController();
  }

  public async criarProduto(request: Request, response: Response) {
    const { nome, preco } = request.body;

    const repository = ProdutoRepositoryPrisma.build(prisma);
    const service = await ProdutoServiceIplement.build(repository);
    const entrada = await service.criar(nome, preco);
    const data = {
      id: entrada.id,
      nome,
      preco,
      quantidade: entrada.quantidade,
    };
    response.status(201).json(data).send();
  }

  public async listagemProdutos(resquest: Request, response: Response) {
    const repository = ProdutoRepositoryPrisma.build(prisma);
    const service = await ProdutoServiceIplement.build(repository);
    const listagem = await service.list();

    const dataList = {
      produtos: listagem.produtos,
    };

    response.status(200).json(dataList).send();
  }

  public async CompraProdutos(request: Request, response: Response) {
    const { id } = request.params;
    const { quantidade } = request.body;
    const repository = ProdutoRepositoryPrisma.build(prisma);
    const service = await ProdutoServiceIplement.build(repository);
    const compra = await service.comprar(id, quantidade);
    const data = {
      id: compra.id,
      quantidade: compra.quantidade,
    };

    response.status(201).json(data).send();
  }

  public async vender(request:Request , response:Response ){
    const { id } = request.params;
    const { quantidade} = request.body;
    const repository = ProdutoRepositoryPrisma.build(prisma);
    const service = await ProdutoServiceIplement.build(repository);
     const venda = await service.vender(id, quantidade)

     const data = {
        id: venda.id,
        venda:quantidade
     }
     response.status(200).json(data)
  }
}

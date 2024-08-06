import prisma from "../repository/prisma/lib/conexao";
import { ProdutoRepositoryPrisma } from "../repository/prisma/produto.respository.prisma";
import { ProdutoRepository } from "../repository/produto.repository";


export class ProdutosController {
 

  public static build() {
    return new ProdutosController();
  }


  public async criarProduto (request: Request , response: Response){

       const  {nome , preco} = request.body;

       const Arepository = ProdutoRepositoryPrisma.build(prisma);
       
       const novoProduto =  ProdutoRepositoryPrisma.salvarProduto(nome,preco)


  }
}

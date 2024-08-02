import { Produto } from "../entities/Produto";
import { ProdutoRepository } from "../repository/produto.repository";
import { listSaidaDto, ProdutoService, VendaSaidaDto } from "./produto.service";

export class ProdutoServiceIplement implements ProdutoService {
  private constructor(readonly repository: ProdutoRepository) {}

  public async build(repository: ProdutoRepository) {
    return new ProdutoServiceIplement(repository);
  }

  public async vender(id: string, quantidade: number): Promise<VendaSaidaDto> {
    const produto = await this.repository.buscar(id);
    if (!produto) {
      throw new Error(`O produto ${id} não foi encontrado`);
    }
    produto.saidaEstoque(quantidade);
    await this.repository.atualizar(produto);
     const saida:VendaSaidaDto = {
        id: produto.id,
        balance: produto.quantidade
     }
     return saida;
  }
  public async comprar(id: string, quantidade: number): Promise<VendaSaidaDto> {
    throw new Error("Method not implemented.");
  }
  public async list(): Promise<listSaidaDto> {
    throw new Error("Method not implemented.");
  }
}

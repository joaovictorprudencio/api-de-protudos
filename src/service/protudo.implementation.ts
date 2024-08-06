import { Produto } from "../entities/Produto";
import { ProdutoRepository } from "../repository/produto.repository";
import {
  CompraSaidaDto,
  CriarEntradaDto,
  listSaidaDto,
  ProdutoService,
  VendaSaidaDto,
} from "./produto.service";

export class ProdutoServiceIplement implements ProdutoService {
  private constructor(readonly repository: ProdutoRepository) {}

  public async criar(nome: string, preco: number): Promise<CriarEntradaDto> {
    const aProduto =  Produto.criarProduto(nome, preco );
    await  this.repository.salvar(aProduto);

      const Entrada: CriarEntradaDto = {
        id: aProduto.id,
         quantidade: aProduto.quantidade
      }

      return Entrada;
  }

  public static async build(repository: ProdutoRepository) {
    return new ProdutoServiceIplement(repository);
  }

  public async vender(id: string, quantidade: number): Promise<VendaSaidaDto> {
    const produto = await this.repository.buscar(id);
    if (!produto) {
      throw new Error(`O produto ${id} não foi encontrado`);
    }
    produto.saidaEstoque(quantidade);
    await this.repository.atualizar(produto);
    const saida: VendaSaidaDto = {
      id: produto.id,
      quantidade: produto.quantidade,
    };
    return saida;
  }
  public async comprar(id: string, quantidade: number): Promise<VendaSaidaDto> {
    const produto = await this.repository.buscar(id);
    if (!produto) {
      throw new Error(`O produto ${id} não foi encontrado`);
    }
    produto.entradaEstoque(quantidade);
    await this.repository.atualizar(produto);
    const compra: CompraSaidaDto = {
      id: produto.id,
      quantidade: produto.quantidade,
    };
    return compra;
  }
  public async list(): Promise<listSaidaDto> {
    const aProdutos = await this.repository.list();
    const produtos = aProdutos.map((p) => {
      return {
        id: p.id,
        nome: p.nome,
        preco: p.preco,
        quantidade: p.quantidade,
      };
    });

    const lista: listSaidaDto = {
      produtos,
    };

    return lista;
  }
}

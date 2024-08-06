import prisma from "./lib/conexao";
import { Produto } from "../../entities/Produto";
import { ProdutoRepository } from "../produto.repository";
import { PrismaClient } from "@prisma/client";

export class ProdutoRepositoryPrisma implements ProdutoRepository {
  private constructor(readonly prisma: PrismaClient) {}

  public static build(prisma: PrismaClient) {
    return new ProdutoRepositoryPrisma(prisma);
  }

  public async salvar(produto: Produto): Promise<void> {
    const salvarProduto = await prisma.produto.create({
      data: {
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        quantidade: produto.quantidade,
      },
    });
  }
  public async list(): Promise<Produto[]> {
    const allProdutos = await  this.prisma.produto.findMany();

    const produtos = allProdutos.map((p) => {
      const { id, nome, preco, quantidade } = p;
      return Produto.persistencia(id, nome, preco, quantidade);
    });

    return produtos;
    
  }
  public async atualizar(produto: Produto): Promise<void> {
    const data = {
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      quantidade: produto.quantidade,
    };
    const atualizar = await this.prisma.produto.update({
      where: { id: produto.id },
      data,
    });
  }
  public async buscar(id: string): Promise<Produto | null> {
    const Aproduto = await this.prisma.produto.findUnique({
      where: { id },
    });

    if (!Aproduto) {
      throw new Error("produto não encontrado");
      return null;
    }

    const { nome, preco, quantidade } = Aproduto;

    const produto = Produto.persistencia(id, nome, preco, quantidade);

    return produto;
  }
}

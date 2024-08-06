import { Produto } from "../entities/Produto";

export interface ProdutoRepository {
    salvar(Produto:Produto): Promise<void>;
    list():Promise<Produto[]>
    atualizar(Produto: Produto): Promise<void>
    buscar(id:string): Promise<Produto | null>
}
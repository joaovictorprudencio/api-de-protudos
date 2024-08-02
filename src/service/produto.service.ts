export type VendaSaidaDto = {
    id:string;
    quantidade: number;

}

export type CompraSaidaDto = {
    id: string;
    quantidade: number;
}

export type listSaidaDto = {
    produtos: {
        id:string;
        nome:string;
        preco:number;
        quantidade:number;
    }[];
}

export interface ProdutoService {
   vender(id:string, quantidade:number): Promise<VendaSaidaDto>;
   comprar(id: string , quantidade:number): Promise<VendaSaidaDto>;
   list(): Promise<listSaidaDto>;
}
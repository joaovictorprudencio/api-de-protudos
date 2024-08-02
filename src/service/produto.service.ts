export type VendaSaidaDto = {
    id:string,
    balance: string;

}

export type CompraSaidaDto = {
    id: string;
    balance: string
}

export type listSaidaDto = {
    produtos: {
        id:string;
        nome:string;
        preco:number;
        balance:string;
    }
}

export interface ProdutoService {
   vender(id:string, quantidade:number): Promise<VendaSaidaDto>;
   comprar(id: string , quantidade:number): Promise<VendaSaidaDto>;
   list(): Promise<listSaidaDto>;
}
export type ProdutosProps = {
    id:string;
    nome: string;
    preco: number;
    quantidade: number;
}

export class Produtos {
   private  constructor(readonly props: ProdutosProps){}
   public static criarProduto(nome:string , preco:number ){

    return new Produtos({
        id: crypto.randomUUID().toString(),
        nome,
        preco,
        quantidade:0
    });
   }
 

   public get id(){
    return this.props.id;
  }

  public get nome(){
    return this.props.nome;
  }
  
  public get preco(){
    return this.props.preco;
  }

  public get quantidade(){
    return this.props.quantidade;
  }

  public addEstoque(valor: number){
    this.props.quantidade += valor;
  }
  

}
export type ProdutosProps = {
    id:string;
    nome: string;
    preco: number;
    quantidade: number;
}

export class Produto {
   private  constructor(readonly props: ProdutosProps){}
   public static criarProduto(nome:string , preco:number ){

    return new Produto({
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

  public entradaEstoque(valor: number){
    this.props.quantidade += valor;
  }

  public saidaEstoque(valor:number){
    if(this.props.quantidade < valor) {
        throw new Error("quantidade em estoque é insuficiente");
    }
    this.props.quantidade -= valor;
  }
  

}
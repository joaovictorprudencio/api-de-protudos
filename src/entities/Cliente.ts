export type ClienteProps = {
  id: string;
  nome: string;
  email: string;
  senha: string;
  numero: string;
}

export class Cliente {


private constructor(readonly props: ClienteProps){}
public static criarCliente (nome: string, email: string, senha: string, numero: string){

  return new Cliente({
    id: crypto.randomUUID().toString(),
    nome,
    email,
    senha,
    numero
  });
}

public get id(){
  return this.props.id
}

public get nome(){
  return this.props.nome
}

public set nome(nome: string) {
  this.props.nome = nome;
}

public get email(){
  return this.props.email
}

public set email(email: string) {
  this.props.email = email;
}


public get senha(){
  return this.props.senha
}

public set senha(senha: string) {
  this.props.senha = senha;
}

public get numero(){
  return this.props.numero
}

public set numero(numero: string) {
  this.props.numero = numero;
}




}





 
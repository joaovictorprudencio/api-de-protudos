import { Api } from "./api.express";
import express, { Express } from "express";
import { Request, Response } from "express";
export class ApiExpress implements Api {


  private constructor( readonly app: Express) {}

 

  public static build() {
    const app = express();
    app.use(express.json());
    return new ApiExpress( app);
  }

  public addGetRoute(path:string, handle: (req: Request, res: Response) => Promise<void>):void {
       this.app.get(path, handle);
  }
  public addPostRoute(path:string, handle: (req: Request, res: Response) => Promise<void>):void {
    this.app.post(path, handle);
}

   public async  start(port: number){
       this.app.listen(port, ()=>{
        console.log("servidor rodando" + port)
       });
   };

   private printRoutes(){
    const routes = this.app._router.stack.filter((route: any) => route.route).map((route: any) => {
        return {
            path: route.route.path,
            method: route.route.stack[0].method
        }
    });
    
   }
};

import { Request, Response } from "express";
import PlanoDeContas from "../../model/PlanoDeContas/PLanoDeContas.model";

class PlanoDeContasController {
  public async getPlanoDeContas(req: Request, res: Response): Promise<void> {
    const planoDeContas = await PlanoDeContas.findAll();
    res.send(planoDeContas);
  }
}

export default new PlanoDeContasController()
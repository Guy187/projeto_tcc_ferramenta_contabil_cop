import { Request, Response } from "express";
import AtividadesModel from "../../model/Atividades/atividades.model";

class atividades {
  public async getatividades(req: Request, res: Response): Promise<void> {
    const Atividades = await AtividadesModel.findAll();
    res.send(Atividades);
  }
}

export default new atividades()
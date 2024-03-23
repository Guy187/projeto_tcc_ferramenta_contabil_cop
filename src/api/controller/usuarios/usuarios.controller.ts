import { Request, Response } from "express";
import usuariosModel from "../model/PlanoDeContas/Usuarios/usuarios.model";

class atividades {
  public async getusuarios(req: Request, res: Response): Promise<void> {
    const usuarios = await usuariosModel.findAll();
    res.send(usuarios);
  }
}


export default new atividades()
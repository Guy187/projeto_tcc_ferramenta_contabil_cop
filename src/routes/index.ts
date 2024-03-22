import { Request, Response, Router } from "express";
import PlanoDeContasController from "../api/controller/PlanoDeContas/PlanoDeContas.controller";
import atividadesController from "../api/controller/atividades/atividades.controller";
import usuariosController from "../api/controller/usuarios.controller";

const routes = Router()

routes.get("/", (req: Request, res: Response)=> {
    res.send("Bem-Vindo a API")
})

routes.get("/planodecontas", PlanoDeContasController.getPlanoDeContas)
routes.get("/atividades", atividadesController.getatividades)
routes.get("/usuarios", usuariosController.getusuarios)

export default routes;
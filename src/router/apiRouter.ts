import { Router } from "express";
import apiControler from "../controler/apiControler";

const router = Router();

router.route("/self").get(apiControler.self);

export default router;
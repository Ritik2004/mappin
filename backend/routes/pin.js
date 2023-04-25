import express  from "express";
const router = express.Router();
import {pinControl, getPin} from "../controllers/pin_controller.js"

//craete a pin
router.post("/", pinControl)

router.get("/", getPin)

export default router
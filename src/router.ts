import  express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller"

router.get("/", memberController.goHome);
/** Member */
router.get("/member/restaurant",memberController.getRestaurant);
router.get("/login", memberController.getLogin);

router.get("/signup", memberController.getSignup);




export default router;
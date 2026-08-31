import {T} from "../libs/types/common"
import { Request, Response } from "express";

const memberService = new MemberService();
const authService = new AuthService();



const memberController: T = {};

memberController.goHome =( req: Request, res: Response ) => {
    try {
        res.send("Home Page");
    } catch (err) {
        console.log("Error, goHome:", err);
        
    }
};

memberController.getRestaurant = async (req: Request, res: Response) => {
    try {
        console.log("getRestaurant");
        const result = await memberService.getRestaurant();
        
        res.status(HttpCode.OK).json(result);
    } catch (err) {
        console.log("Error, getRestaurant", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

memberController.getLogin =( req: Request, res: Response ) => {
    try {
        res.send("Login Page");
    } catch (err) {
        console.log("Error, getLogin:", err);

    }
};

memberController.getSignup =( req: Request, res: Response ) => {
    try {
        res.send("Signup Page");
    } catch (err) {
        console.log("Error, getSignup:", err);
        
    }
};


export default memberController;
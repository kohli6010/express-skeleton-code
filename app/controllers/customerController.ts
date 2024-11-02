import { Service } from "typedi";
import BaseController from "./baseController";
import { NextFunction, Request, Response } from "express";
import CustomerService from "../services/customerService";
import AccessAllowedPermission from "../permissions/accessAllowedPermission";

@Service()
export default class CustomerController extends BaseController {
    
    constructor(private customerService: CustomerService, private fullAccessAllowedPermission: AccessAllowedPermission){
        super(fullAccessAllowedPermission);
    }

    public getAllCustomers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await super.validateRequestPermission(req, res, next);
            let customers = this.customerService.getAllCustomers();
            res.json(customers);
        }catch(err) {

        }
    }
}
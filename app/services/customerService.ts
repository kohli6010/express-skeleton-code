import { Service } from "typedi";
import BaseService from "./baseService";

@Service()
export default class CustomerService extends BaseService {
    public getAllCustomers = () => {
        return [{fname: "Rahul", lname: "Kohli"}, {fname: "Udit", lname: "kohli"}]
    }
}
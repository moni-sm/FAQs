import { describe } from "node:test";
import {getFaqs , createFaqs} from "../src/controllers/faqControllers.js";
import FAQ from "../src/models/faqModel.js";

describe(`FAQ Controller`, ()=>{
    test(`getFaqs should return FAQs `, async()=>{
        const req = {query:{lang:'en'}};
        const res = {json:jest.fn()};
        await getFaqs(req,res);
        expect(res,json).toHaveBeenCalled();
    });

    test(`createFAQ should create a new FAQ`, async()=>{
        const req = {body:{question:'Test?', answer:'Test!'}};
        const res = {status: jest.fn().mockReturnThis(), json:jest.fn()};
        await createFaqs(req,res);
        expect(res.status).toHaveBeenCalledWith(201);
    });
});
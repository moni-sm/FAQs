import express from "express"
import {getFaqs , createFaqs} from "../controllers/faqControllers.js"

const router = express.Router();

router.get('/',getFaqs);
router.post('/',createFaqs);

export default router;
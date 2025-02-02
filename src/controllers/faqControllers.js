import FAQ from "../models/faqModel/js";
import client from "../config/redis";
import translateText from "../services/translationService";

const getFaqs = async(req , res)=>{
    const {lang = 'en'} = req.body;
    const cacheKey = `faqa_${lang}`;

    const cachedFaqs = await FAQ.find();
    if(cachedFaqs)
         return res.json(JSON.parse(cachedFaqs));

    const faqs = await FAQ.find();
    const translatedFaqs = faqs.map(faq =>({
        question : faq.translations[lang]?.question || faq.question,
        answer : faq.translations[lang]?.answer || faq.answer
    }));

    await client.setEx(cacheKey , 3600 , JSON.stringify(translatedFaqs));
    res.json(translatedFaqs);
};

const createFaqs = async(req, res) =>{
    const{question , answer} = req.body;

    const translations = {
        hin : {
            question : await translateText(question , 'hin'),
            answer : await translateText(answer , 'hin')
        },
        kan : {
            question : await translateText(question , 'kan'),
            answer : await translateText(answer , 'kan')
        },
        tel : {
            question : await translateText(question , 'tel'),
            answer : await translateText(answer , 'tel')
        }
    };

    const faq = new FAQ({question , answer , translations});
    await faq.save();

    res.status(201).json(faq);
};

export default {getFaqs , createFaqs} ;

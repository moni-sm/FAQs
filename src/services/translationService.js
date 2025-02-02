import { Translate } from "@google-cloud/translate/build/src/v2";

const translate = new Translate({key : process.env.GOOGLE_TRANSLATE_API_KEY});

const translateText = async(text , targetLanguage) => {
    try{
        const [translation] = await translate.translate(text , targetLanguage);
        return translation;
    }catch(err){
        console.log(`Translation failed:`,err);
        return text;
    }
};


export default translateText;
import mongoose from "mongoose";

const faqSchema = new mongoose.Schema({
    question : {type: String , required: true},
    answer : {type:String, required:true},
    translation:{
        hin:{question : String , answer : String},
        kan:{question : String , answer : String},
        tel:{question : String , answer : String}
    },
});

const FAQ = mongoose.model('FAQ',faqSchema);

export default FAQ;
import { Schema, model } from "mongoose";

const statementSchema = new Schema( {
    statementid: {type:String},
    incidentType: { type:String, enum: ['Criminal', 'Non-Criminal']},
    civilianStatus: { type:String, enum: ['suspect', 'complainant', 'witness']},
    statament:{type:String},
    caseStatus:{type:String, enum:['open', 'closed']},
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date,default:Date.now()},

});

export const statementModel = model("statement", statementSchema);


import { statementModel } from "../models/statement_model.js";

export const addStatement = async(req, res) => {
   
    try {
        console.log('request', req.body)
         const addData = await statementModel.create(req.body);
        res.send("statement Added");
   
    } catch (error) {
        console.log(error)
    }
    
}

// Get all statement
export const getStatements = async (req,res, next) => {
    try {
       const getData = await statementModel.find() 
       {
        res.status(200).json(getData)
       }
    } catch (error) {
       next(error) 
    }
};

// Get A Single Statement by ID
export const getStatement = async (req,res,next) => {
    try {
        const getSingleData = await statementModel.findById(req.params.id)
        {
            res.status(200).json(getSingleData)
        }
    } catch (error) {
      next(error)  
    }
};

// Update a statement
export const updateStatement = async (req,res, next) => {
    try {
       const status = req.params.caseStatus;
       console.log(status)
        const updateData = await StatementModel.findByIdandUpdate(req.params.id, {caseStatus:status})
        {
            res.status(200).json(updateData)
        }
    } catch (error) {
      next(error)  
    }

}
    

// delete a statement

export const deleteStatement = async (req,res, next) => {
try {
    const deleteData = await StatementModel.findByIdandDelete(req.params.id)
    {
        res.status(200).json(`statement with the ID:${req.params.id}has been deleted`)
    }
} catch (error) {
 next(error)   
}

}
import { Router } from "express";
import { addStatement, deleteStatement, getStatement, getStatements, updateStatement } from "../controllers/statement_controller.js";

export const statementRouter = Router()

statementRouter.post('/statement', addStatement)

statementRouter.get('/statement',getStatements)

statementRouter.get('/statement/:id',getStatement)

statementRouter.patch('/statement/:id/:caseStatus',updateStatement)

statementRouter.delete('statement/:id',deleteStatement)






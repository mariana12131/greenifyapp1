import express from 'express';
import { getTest, checkTestAnswers } from '../controllers/testController.js';
const testRouter = express.Router()

testRouter.get('/:ident', getTest)
testRouter.post('/check/:ident', checkTestAnswers)

export default testRouter;

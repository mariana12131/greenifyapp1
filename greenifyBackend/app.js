import 'dotenv/config'
import express from "express"
import mongoose from 'mongoose'
import cors from 'cors'
import userRouter from './routes/userRouter.js'
import taskRouter from './routes/taskRouter.js'
import testRouter from './routes/testRouter.js'

const app = express()

app.use(cors({
	origin: '*',
	credentials: true,
}))

app.use(express.json())
app.use("/user", userRouter)
app.use("/task", taskRouter)
app.use("/test", testRouter)

async function main() {
	await mongoose.connect(process.env.DB_CONNECT + process.env.DB_NAME)
}

main().catch(err => console.log(err))

app.listen(process.env.PORT, () => console.log("Server was runned on port " + process.env.PORT))


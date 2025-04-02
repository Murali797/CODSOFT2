import express from "express"

import taskRoute from "./taskRoute.js"

const router = express.Router()


router.use("/task", taskRoute)

export default router
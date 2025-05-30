import express from "express"
import { createTask, duplicateTask, postTaskActivity, dashboardStatistics, getTask, getTasks, createSubTask, updateTask, trashTask, deleteRestoreTask} from "../controllers/taskController.js"


const router  = express.Router()

router.post("/create", createTask)
router.post("/duplicate/:id",  duplicateTask)
router.post("/activity/:id",  postTaskActivity)

router.get("/dashboard",  dashboardStatistics)
router.get("/", getTasks)
router.get("/:id", getTask)

router.put("/create-subtask/:id", createSubTask)
router.put("/update/:id", updateTask)
router.put("/:id", trashTask)

router.delete("/delete-restore/:id?", deleteRestoreTask)

export default router
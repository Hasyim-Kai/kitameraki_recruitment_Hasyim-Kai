const router = require("express").Router();
import task from "../controllers/task.controller";

router.get("/", task.getAll)
  .post("/", task.add)
  .put("/:id", task.update)
  .delete("/:id", task.del)

export = router;
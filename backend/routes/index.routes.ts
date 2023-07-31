const router = require("express").Router();
import taskRoutes from "./task.routes";

router.use('/task', taskRoutes)

export = router;
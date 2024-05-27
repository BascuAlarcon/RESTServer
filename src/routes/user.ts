import { Router } from "express";
import { deleteUsers, getUser, getUsers, postUsers, updateUsers } from "../controllers/user";

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', postUsers);
router.put('/:id', updateUsers);
router.delete('/:id', deleteUsers);

export default router;
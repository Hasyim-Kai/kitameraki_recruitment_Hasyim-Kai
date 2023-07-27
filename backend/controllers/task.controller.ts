import { Request, Response } from 'express';
import { Task, dummyTask } from '../model/task.model';

let tempMemory = dummyTask

const getAll = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page)
    const itemPerPage = 5
    if (!page || isNaN(page)) {
      return res.status(200).json({ status: false, message: 'Param must be number & exist' });
    }
    const moviesToSkip = (page - 1) * itemPerPage
    const data = tempMemory.slice(moviesToSkip, moviesToSkip + itemPerPage);;
    return res.status(200).json({ status: true, data });
  } catch (err) {
    return res.status(500).json({ success: false, error: "Something went wrong", });
  }
};

const add = async (req: Request, res: Response) => {
  try {
    const newTask = { id: tempMemory.length, ...req.body };
    tempMemory.push(newTask);
    return res.status(201).json({ status: true });
  } catch (err) {
    res.status(500).json({ success: false, error: "Something went wrong", });
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (!id || isNaN(id)) {
      return res.status(200).json({ status: false, message: 'ID must be number & exist' });
    }
    const targetId = tempMemory.findIndex((task: Task) => task.id === id);
    if (targetId !== -1) {
      tempMemory[targetId] = { id, ...req.body }
      return res.status(201).json({ status: true, message: `Edit Success` });
    } else {
      return res.status(201).json({ status: false, message: `Not Found` });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: "Something went wrong", });
  }
};

const del = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (!id || isNaN(id)) {
      return res.status(200).json({ status: false, message: 'ID must be number & exist' });
    }
    const targetId = tempMemory.findIndex((task: Task) => task.id === id);
    if (targetId !== -1) {
      tempMemory = tempMemory.filter((item) => item.id !== id);
      return res.status(201).json({ status: true, message: `Delete Success` });
    } else {
      return res.status(201).json({ status: false, message: `Not Found` });
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ success: false, error: "Something went wrong", });
  }
};

export = { getAll, add, update, del }
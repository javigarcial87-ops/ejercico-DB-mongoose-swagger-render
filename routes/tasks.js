const express = require('express');
const Task = require("../models/Task")

const router =express.Router()


//POST --> crear tarea

router.post("/create", async (req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json(task)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

//GET --> obtener todas las tareas

router.get("/", async (req,res)=>{
    const tasks = await Task.find()
    res.json(tasks)
})

//GET /id/:_id ----> buscar tareas por id

router.get("/id/:_id", async (req, res) => {
  try {
    const task = await Task.findById(req.params._id);

    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });

    res.json(task);
  } catch (error) {
    res.status(400).json({ message: "ID inválido" });
  }
})

//PUT /markAsCompleted/:_id ----> marcar como completada la tarea

router.put("/markAsCompleted/:_id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params._id,
      { completed: true },
      { new: true }
    );

    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT /id/:_id ----> actualizar solo el titulo

router.put("/id/:_id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params._id,
      { title: req.body.title },
      { new: true }
    );

    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


//DELETE /id/:_id ----> eliminar tarea

router.delete("/id/:_id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params._id);
    res.json({ message: "Tarea eliminada correctamente" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
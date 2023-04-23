import express from "express";
import directorModel from "../../models/directors.js";
const route2 = express.Router();

route2.get("/allDirectors", async (req, res) => {
  try {
    const directors1 = await directorModel.find();
    return res.status(200).json(directors1);
  } catch {
    return res.status(500).json({ error: "not able to get" });
  }
});

route2.post("/create", async (req, res) => {
  try {
    const newDirector = req.body;
    const addNewDirector = new directorModel(newDirector);
    await addNewDirector.save();
    return res.json({ message: "director data is created successfully" });
  } catch {
    return res.json({ error: "data isn't pushed" });
  }
});

route2.put("update/:director_id", async (req, res) => {
  const updateDirector = await directorModel.findOneAndUpdate(
    { director_id: req.params.director_id },
    { name: req.body.name }
  );
  return res.json({ director: updateDirector, message: "Director's name updated" });
});

route2.delete("delete/:director_id", async (req, res) => {
  const deleteDirector = await directorModel.findByIdAndDelete({
    director_id: req.params.director_id,
  });
  return res.status(200).json({ director: deleteDirector, message: "Director's data deleted" });
});

export default route2;
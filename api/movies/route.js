import express from "express";
import movieModel from "../../models/movies.js";
const route = express.Router();

route.get("/allMovies", async (req, res) => {
  try {
    const movies1 = await movieModel.find();
    return res.status(200).json(movies1);
  } catch {
    return res.status(500).json({ error: "not able to get" });
  }
});

route.post("/create", async (req, res) => {
  try {
    const newMovie = req.body;
    const addNewMovie = new movieModel(newMovie);
    await addNewMovie.save();
    return res.json({ message: "movie is created" });
  } catch {
    return res.json({ error: "movie isn't pushed" });
  }
});

route.put("update/:movie_id", async (req, res) => {
  const updateMovie = await movieModel.findOneAndUpdate(
    { movie_id: req.params.movie_id },
    { title: req.body.movieTitle }
  );
  return res.json({ movie: updateMovie, message: "Movie's title updated" });
});

route.delete("delete/:movie_id", async (req, res) => {
  const deleteMovie = await movieModel.findByIdAndDelete({
    movie_id: req.params.movie_id,
  });
  return res.status(200).json({ movie: deleteMovie, message: "movie deleted" });
});

export default route;

import express from "express";
import producerModel from "../../models/producers.js";
const route3 = express.Router();

route3.get("/allProducers", async (req, res) => {
  try {
    const producer1 = await producerModel.find();
    return res.status(200).json(movies1);
  } catch {
    return res.status(500).json({ error: "not able to get" });
  }
});

route3.post("/create", async (req, res) => {
  try {
    const newProducer = req.body;
    const addNewProducer = new producerModel(newProducer);
    await addNewProducer.save();
    return res.json({ message: "Producer data is created" });
  } catch { 
    return res.json({ error: "Producer's data isn't pushed" });
  }
});

route3.put("update/:producer_id", async (req, res) => {
  const updateProducer = await producerModel.findOneAndUpdate(
    { producer_id: req.params.producer_id },
    { name: req.body.name }
  );
  return res.json({ producer: updateProducer, message: "producer's name updated" });
});

route3.delete("delete/:producer_id", async (req, res) => {
  const deleteProducer = await producerModel.findByIdAndDelete({
    producer_id: req.params.producer_id,
  });
  return res.status(200).json({ producer: deleteProducer, message: "producer's data deleted" });
});

export default route3;
let cache = null;
let cacheTime = null;
const Task = require("../models/task.model");

exports.getTasks = async (req, res) => {
  // check cache validity (60 seconds)
  if (cache && (Date.now() - cacheTime < 60000)) {
    return res.json({
      source: "cache",
      data: cache
    });
  }

  // fetch from DB
  const tasks = await Task.find();

  // store in cache
  cache = tasks;
  cacheTime = Date.now();

  res.json({
    source: "db",
    data: tasks
  });
};
function clearCache() {
  cache = null;
  cacheTime = null;
}
exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  clearCache(); // IMPORTANT
  res.json(task);
};
exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  clearCache(); // IMPORTANT
  res.json(task);
};
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  clearCache(); // IMPORTANT
  res.send("Deleted");
};
const Record = require("../models/record.model");

// CREATE (Admin only)
exports.createRecord = async (req, res) => {
  try {
    const { amount, type, category, date, note } = req.body;

    const record = await Record.create({
      userId: req.user.id,
      amount,
      type,
      category,
      date,
      note,
    });

    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET (All roles with filtering)
exports.getRecords = async (req, res) => {
  try {
    const { type, category, startDate, endDate } = req.query;

    let filter = {};

    if (type) filter.type = type;
    if (category) filter.category = category;

    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    const records = await Record.find(filter).sort({ date: -1 });

    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE (Admin only)
exports.updateRecord = async (req, res) => {
  try {
    const updated = await Record.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE (Admin only)
exports.deleteRecord = async (req, res) => {
  try {
    await Record.findByIdAndDelete(req.params.id);

    res.json({ message: "Record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

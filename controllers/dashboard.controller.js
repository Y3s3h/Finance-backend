const Record = require("../models/record.model");

// SUMMARY API
exports.getSummary = async (req, res) => {
  try {
    const data = await Record.aggregate([
      {
        $group: {
          _id: "$type", // income / expense
          total: { $sum: "$amount" },
        },
      },
    ]);

    let income = 0;
    let expense = 0;

    data.forEach((item) => {
      if (item._id === "income") income = item.total;
      if (item._id === "expense") expense = item.total;
    });

    res.json({
      totalIncome: income,
      totalExpense: expense,
      netBalance: income - expense,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCategoryBreakdown = async (req, res) => {
  try {
    const data = await Record.aggregate([
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" },
        },
      },
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getRecent = async (req, res) => {
  try {
    const records = await Record.find().sort({ date: -1 }).limit(5);

    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

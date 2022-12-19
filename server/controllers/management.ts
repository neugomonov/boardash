import { Request, Response } from "express";
import mongoose from "mongoose";
import Transaction from "../models/Transaction.js";
import User from "../models/User.js";

export const getAdmins = async (req: Request, res: Response) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json({ message: error.mesage });
  }
};

export const getUserPerformance = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userWithStats = await User.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "affiliatestats",
          localField: "_id",
          foreignField: "userId",
          as: "affiliateStats",
        },
      },
      { $unwind: "$affiliateStats" },
    ]);
    const saleTransactions = await Promise.all(
      userWithStats[0].affiliateStats.affiliateSales.map((id: string) => {
        return Transaction.findById(id);
      })
    );
    const filteredSaleTransactions = saleTransactions.filter(
      (transaction) => transaction !== null
    );
    res
      .status(200)
      .json({ user: userWithStats[0], sales: filteredSaleTransactions });
  } catch (error) {
    res.status(404).json({ message: error.mesage });
  }
};

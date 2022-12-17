import { Request, Response } from "express";
import OverallStat from "../models/OverallStat.js";

export const getSales = async (req: Request, res: Response) => {
  try {
    const overallStats = await OverallStat.find();
    res.status(200).json(overallStats[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

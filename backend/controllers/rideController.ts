import { Request, Response } from 'express';
import Ride from '../models/Ride';

export const createRide = async (req: Request, res: Response) => {
  try {
    const ride = await Ride.create(req.body);
    res.status(201).json(ride);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create ride' });
  }
};

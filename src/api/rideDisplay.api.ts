import { Ride } from "../types";

const BASE = "http://localhost:5000/api/ride-display";

export const loadRecentRides = async (): Promise<Ride[]> => {
  const res = await fetch(`${BASE}/latest`);
  return res.json();
};

export const searchRides = async (
  filters: Record<string, string>
): Promise<Ride[]> => {
  const params = new URLSearchParams(filters).toString();
  const res = await fetch(`${BASE}/search?${params}`);
  return res.json();
};

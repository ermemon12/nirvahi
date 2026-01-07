
export enum AppState {
  LOGIN = 'LOGIN',
  VERIFY_ID = 'VERIFY_ID',
  VERIFYING = 'VERIFYING',
  DASHBOARD = 'DASHBOARD',
  CREATE_RIDE = 'CREATE_RIDE',
  FIND_RIDE = 'FIND_RIDE',
  RIDE_DETAILS = 'RIDE_DETAILS',
  PAYMENT = 'PAYMENT',
  RIDE_IN_PROGRESS = 'RIDE_IN_PROGRESS',
  RATE_RIDE = 'RATE_RIDE'
}

export interface Ride {
  id: string;
  from: string;
  to: string;
  time: string;
  passengers: number;
  status: 'Confirmed' | 'Pending';
  avatars: string[];
}

export interface ImpactStats {
  co2Saved: number;
  moneySaved: number;
  carsReduced: number;
}

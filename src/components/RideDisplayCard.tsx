import { Ride } from "../types";

interface Props {
  ride: Ride;
}

const RideDisplayCard = ({ ride }: Props) => {
  return (
    <div className="ride-card">
      <h4>{ride.from} → {ride.to}</h4>
      <p>Date: {ride.date}</p>
      <p>Seats: {ride.seats}</p>
      <p>Price: ₹{ride.price}</p>
    </div>
  );
};

export default RideDisplayCard;

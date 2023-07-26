import { useSelector } from 'react-redux';
import Message from './Message';

export default function ProfileRockets() {
  const { rockets } = useSelector((store) => store.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.isReserved);
  if (reservedRockets.length === 0) {
    return <Message>You have not reserved any rocket yet.</Message>;
  }
  return (
    <ul className="list-group">
      {reservedRockets.map((rocket) => (
        <li key={rocket.id} className="list-group-item">
          {rocket.name}
        </li>
      ))}
    </ul>
  );
}

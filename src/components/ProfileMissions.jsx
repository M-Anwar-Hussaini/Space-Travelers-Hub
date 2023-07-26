import { useSelector } from 'react-redux';
import Message from './Message';

export default function ProfileMissions() {
  const { missions } = useSelector((store) => store.missions);

  const myMissions = missions.filter((mission) => mission.status);
  return (
    <>
      {myMissions.length === 0 ? (
        <Message type="warning">You have not joined to any mission yet.</Message>
      ) : (
        <ul className="list-group">
          {myMissions.map((mission) => (
            <li key={mission.id} className="list-group-item">
              {mission.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

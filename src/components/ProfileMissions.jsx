import { useSelector } from 'react-redux';
// eslint-disable-next-line import/extensions
import Message from './Message';

export default function ProfileMissions() {
  const { missions, isLoading } = useSelector((store) => store.missions);
  if (isLoading) {
    return <Message />;
  }

  const myMissions = missions.filter((mission) => mission.status);
  return (
    <>
      {myMissions.length === 0 ? (
        <Message type="danger">You have not joined to any mission yet.</Message>
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

import { useSelector } from 'react-redux';
import ProfileMissions from './ProfileMissions';

export default function ProfileContainer() {
  const { rockets } = useSelector((store) => store.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.isReserved);
  return (
    <section>
      <div className="row gx-3">
        <div className="col">
          <h3>Reserved Rockets</h3>
          <ul className="list-group">
            {reservedRockets.map((rocket) => <li className="list-group-item" key={rocket.id}>{rocket.name}</li>)}
          </ul>
        </div>
        <div className="col">
          <h3>My Missions</h3>
          <div>
            <ProfileMissions />
          </div>
        </div>
      </div>
    </section>
  );
}

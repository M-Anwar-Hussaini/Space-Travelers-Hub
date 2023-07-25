import { useSelector } from 'react-redux';

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
          <div className="card">
            ProfileMissions
          </div>
        </div>
      </div>
    </section>
  );
}

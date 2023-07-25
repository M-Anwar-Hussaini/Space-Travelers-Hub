import ProfileMissions from './ProfileMissions';
import ProfileRockets from './ProfileRockets';

export default function ProfileContainer() {
  return (
    <section>
      <div className="row gx-3">
        <div className="col">
          <h3>Reserved Rockets</h3>
          <ProfileRockets />
        </div>
        <div className="col">
          <h3>Joined Missions</h3>
          <div>
            <ProfileMissions />
          </div>
        </div>
      </div>
    </section>
  );
}

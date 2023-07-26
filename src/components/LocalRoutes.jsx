import { Route, Routes } from 'react-router-dom';
import RocketContainer from './RocketContainer';
import MissionContainer from './MissionContainer';
import ProfileContainer from './ProfileContainer';

export default function LocalRoutes() {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<RocketContainer />} />
        <Route path="/missions" element={<MissionContainer />} />
        <Route path="/profile" element={<ProfileContainer />} />
      </Routes>
    </main>
  );
}

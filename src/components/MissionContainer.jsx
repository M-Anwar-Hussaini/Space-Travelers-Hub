import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from './Mission';
import { getMissionsFromApi } from '../redux/missions/missionSlice';
import Message from './Message';

export default function MissionContainer() {
  const { missions, isLoading, hasError } = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissionsFromApi());
  }, [dispatch]);

  if (isLoading) {
    return <Message type="warning">Please wait...</Message>;
  }

  if (hasError) {
    return <Message type="danger">Something went wrong.</Message>;
  }
  return (
    <div>
      <h1>Missions</h1>
      <table className="table table-bordered">
        <thead className="table-primary">
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission
              key={mission.id}
              description={mission.description}
              id={mission.id}
              name={mission.name}
              status={mission.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

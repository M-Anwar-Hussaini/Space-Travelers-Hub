import React from 'react';
import Mission from './Mission';

export default function MissionContainer() {
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
          <Mission />
        </tbody>
      </table>
    </div>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { join, leave } from '../redux/missions/missionSlice';

export default function Mission({
  name, description, status, id,
}) {
  const dispatch = useDispatch();
  return (
    <tr className={status ? 'table-success' : 'table-body'}>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <span className="badge text-bg-primary">Active member</span>
        <span className="badge text-bg-secondary">Not a member</span>
      </td>
      <td className="text-center col-2">
        {status ? (
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => dispatch(leave(id))}
          >
            Leave Mission
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => dispatch(join(id))}
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
}

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

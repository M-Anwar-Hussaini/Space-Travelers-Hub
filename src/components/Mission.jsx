import React from 'react';
import PropTypes from 'prop-types';

export default function Mission({ name, description, status }) {
  return (
    <tr className={status ? 'table-success' : 'table-body'}>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        {status ? (
          <span className="badge text-bg-primary">Active member</span>
        ) : (
          <span className="badge text-bg-secondary">Not a member</span>
        )}
      </td>
      <td className="text-center col-2">
        <button
          type="button"
          className="btn btn-outline-danger"
        >
          Leave Mission
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
        >
          Join Mission
        </button>
      </td>
    </tr>
  );
}

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

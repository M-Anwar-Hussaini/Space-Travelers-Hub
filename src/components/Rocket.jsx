import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserve, cancelReservation } from '../redux/rockets/rocketSlice';

export default function Rocket({
  image, description, name, id, isReserved,
}) {
  const className = isReserved ? 'bg-success-subtle' : '';
  return (
    <figure className={`container mb-2 border rounded p-3 ${className}`}>
      <div className="row align-items-center">

        <div className="col-3">
          <img src={image} alt={name} className="img-thumbnail" />
        </div>

        <div className="col-9">
          <h3>{name}</h3>
          <p>
            {isReserved && <Badge />}
            {description}
          </p>
          {isReserved ? <CancelBtn id={id} /> : <ReserveBtn id={id} /> }
        </div>

      </div>
    </figure>
  );
}

Rocket.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isReserved: PropTypes.bool.isRequired,
};

function ReserveBtn({ id }) {
  const dispatch = useDispatch();
  return (
    <button type="button" className="btn btn-success" onClick={() => dispatch(reserve(id))}>
      Reserve Rocket
    </button>
  );
}

ReserveBtn.propTypes = {
  id: PropTypes.string.isRequired,
};

function CancelBtn({ id }) {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={() => dispatch(cancelReservation(id))}
    >
      Cancel Reservation
    </button>
  );
}

CancelBtn.propTypes = {
  id: PropTypes.string.isRequired,
};

function Badge() {
  return (
    <>
      <span className="badge text-bg-info">Reserved</span>
      &nbsp;
    </>
  );
}

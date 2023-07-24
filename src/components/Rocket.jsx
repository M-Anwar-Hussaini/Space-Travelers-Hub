import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserve } from '../redux/rockets/rocketSlice';

export default function Rocket({
  image, description, name, id, isReserved,
}) {
  const reservedBadge = <span className="badge text-bg-info">Reserved</span>;

  return (
    <figure className="container mb-2 border rounded p-3">
      <div className="row">

        <div className="col-3">
          <img src={image} alt={name} className="img-thumbnail" />
        </div>

        <div className="col-9">
          <h3>{name}</h3>

          <p>
            {isReserved && reservedBadge}
            &nbsp;
            {description}
          </p>

          {isReserved || <ReserveBtn id={id} />}
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
      Reserve
    </button>
  );
}

ReserveBtn.propTypes = {
  id: PropTypes.string.isRequired,
};

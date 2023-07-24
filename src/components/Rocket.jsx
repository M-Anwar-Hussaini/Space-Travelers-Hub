import PropTypes from 'prop-types';

export default function Rocket({
  image, description, name,
}) {
  return (
    <figure className="container mb-2 border rounded p-3">
      <div className="row">
        <div className="col-3">
          <img src={image} alt={name} className="img-thumbnail" />
        </div>
        <div className="col-9">
          <h3>{name}</h3>
          <p>{description}</p>
          <button type="button" className="btn btn-primary">Reserve</button>
        </div>
      </div>
    </figure>
  );
}

Rocket.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

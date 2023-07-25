import PropTypes from 'prop-types';

export default function Message({ type, children }) {
  return (
    <div role="alert" className={`alert alert-${type}`}>
      {children}
    </div>
  );
}

Message.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
};

Message.defaultProps = {
  type: 'warning',
  children: 'Please wait...',
};

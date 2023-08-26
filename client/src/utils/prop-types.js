import PropTypes from 'prop-types';

const cardPropType = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  bid: PropTypes.number,
  finishTime: PropTypes.number,
});

export default cardPropType;

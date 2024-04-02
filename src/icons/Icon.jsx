
import PropTypes from 'prop-types';

const Icon = ({ svg: Svg, ...props }) => {
  // Asume que `Svg` es un componente React
  return <Svg {...props} />;
};

Icon.propTypes = {
  svg: PropTypes.elementType.isRequired,
};

export default Icon;

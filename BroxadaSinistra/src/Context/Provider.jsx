import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';



function MyProvider({ children }) {
  const [expandImage, setExpandImage] = useState(false);
  const [currentExpandedImage, setCurrentExpandedImage] = useState('');

  const state = useMemo(() => ({
    expandImage, setExpandImage,
    currentExpandedImage, setCurrentExpandedImage
  }), [
    expandImage, setExpandImage,
    currentExpandedImage, setCurrentExpandedImage
  ]);

  return (
    <MyContext.Provider value={ state }>{children}</MyContext.Provider>
  );
}

export default MyProvider;

MyProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};
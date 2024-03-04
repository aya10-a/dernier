import React from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

const Panier = () => {
  return (
    <div style={{ marginRight: '15px' }}>
      <Link to='/GererPanier'>
        <FeatherIcon icon="shopping-cart" size={22} color="black" />
      </Link>
    </div>
  );
};

export default Panier;

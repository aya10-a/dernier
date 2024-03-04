import React from 'react';
import { Button, CardBody } from 'reactstrap';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';

function GererPanier() {
  return (
    <>
    <div className="page-content d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <CardBody className="pt-0 text-center d-flex flex-column align-items-center justify-content-center">
        <div>
          <FeatherIcon icon="shopping-cart" size={50} />
        </div>
        <div>
          <p style={{ fontWeight: 'bold' }}>Votre panier est vide!</p>
          <p>Parcourez nos catégories et découvrez nos meilleures offres!</p>
          <Link className='link_boutton' to='/advance-ui-swiper'> 
          <Button color="primary" className="rounded-pill">Commencer vos Achats</Button>
          </Link>
        </div>
      </CardBody>
    </div>
    </>
  );
}
export default GererPanier;
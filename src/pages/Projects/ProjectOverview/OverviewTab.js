import React from 'react';
import { Card, CardBody,Col,Row} from 'reactstrap';

const OverviewTab = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={9} lg={8}>
                    <Card>
                        <CardBody>
                            <div className="text-muted">
                                <h6 className="mb-3 fw-semibold text-uppercase">About us</h6>
                                <p>
                                    Bienvenue chez [...], votre partenaire de confiance pour la gestion efficace de votre boutique
                                    en ligne. Chez [...], nous comprenons les défis uniques auxquels sont confrontés les propriétaires
                                    de boutiques en ligne, et nous nous engageons à fournir les solutions les plus innovantes pour vous 
                                    aider à prospérer dans le monde numérique en constante évolution.
                                </p>    

                                <p>  
                                Ce qui distingue [Nom de votre entreprise], c'est notre engagement envers l'excellence
                                et l'innovation. Nous travaillons sans relâche pour vous offrir des outils de gestion
                                de boutique en ligne intuitifs, puissants et entièrement personnalisables, vous 
                                permettant ainsi de gérer efficacement vos opérations, d'optimiser vos performances
                                 et de développer votre entreprise avec succès.
                                </p>

                                <p>
                                Nous croyons fortement que le succès de nos clients est notre propre réussite. 
                                C'est pourquoi nous nous efforçons de fournir un soutien exceptionnel à nos clients,
                                en les aidant à surmonter les obstacles, à saisir les opportunités et à atteindre
                                 leurs objectifs commerciaux.
                                </p>

                                <div className="pt-3 border-top border-top-dashed mt-4">
                                    <Row>
                                        <Col lg={3} sm={6}>
                                            <div>
                                                <p className="mb-2 text-uppercase fw-medium">Create Date :</p>
                                                <h5 className="fs-15 mb-0"> 1 Janvier 2024</h5>
                                            </div>
                                        </Col>  
                                    </Row>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default OverviewTab;
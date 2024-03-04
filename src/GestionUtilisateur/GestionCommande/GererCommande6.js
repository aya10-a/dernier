import React, { useState } from "react";
import {Button,Card,CardBody,Col,Container,Input,Label,Tooltip,Nav,NavItem,NavLink,Row, TabContent, TabPane,} from "reactstrap";

import product2 from "./img-2.jpg";
import product3 from "./img-3.jpg";
import product4 from  "./img-4.jpg";
import product15 from "./img-27.jpg";

import BreadCrumb from './BreadCrumb';

import { productDetailsWidgets } from "./ecommerce";

import { Swiper, SwiperSlide } from "swiper/react";
import classnames from "classnames";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { Link } from "react-router-dom";

SwiperCore.use([FreeMode, Navigation, Thumbs]);
const PricingWidgetList = (props) => {
  
  return (
    <React.Fragment>
      <Col lg={3} sm={6}>
        <div className="p-2 border border-dashed rounded">
          <div className="d-flex align-items-center">
            <div className="avatar-sm me-2">
              <div className="avatar-title rounded bg-transparent text-success fs-24">
                <i className={props.pricingDetails.icon}></i>
              </div>
            </div>
            <div className="flex-grow-1">
              <p className="text-muted mb-1">{props.pricingDetails.label} :</p>
              <h5 className="mb-0">{props.pricingDetails.labelDetail}</h5>
            </div>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};


function GererCommande6(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [ttop, setttop] = useState(false);

  const [ssize, setssize] = useState(false);
  const [msize, setmsize] = useState(false);
  const [lsize, setlsize] = useState(false);
  const [xlsize, setxlsize] = useState(false);
  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = tab => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };

document.title ="Product Details ";
  return (
    <div className="page-content">
      <Container fluid>  
      <BreadCrumb title="Product Details" pageTitle="Ecommerce"/>
        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <Row className="gx-lg-5">
                  <Col xl={4} md={8} className="mx-auto">
                    <div className="product-img-slider sticky-side-div">
                      <Swiper
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        className="swiper product-thumbnail-slider p-2 rounded bg-light"
                      >
                        <div className="swiper-wrapper">
                          <SwiperSlide>
                            <img
                              src={product2}
                              alt=""
                              className="img-fluid d-block"
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={product3}
                              alt=""
                              className="img-fluid d-block"
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              src={product4}
                              alt=""
                              className="img-fluid d-block"
                            />
                          </SwiperSlide>
                        
                        </div>
                      </Swiper>

                      <div className="product-nav-slider mt-2">
                        <Swiper
                          onSwiper={setThumbsSwiper}
                          slidesPerView={4}
                          freeMode={true}
                          watchSlidesProgress={true}
                          spaceBetween={10}
                          className="swiper product-nav-slider mt-2 overflow-hidden"
                        >
                          <div className="swiper-wrapper">
                            <SwiperSlide className="rounded">
                              <div className="nav-slide-item">
                                <img
                                  src={product2}
                                  alt=""
                                  className="img-fluid d-block rounded"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="nav-slide-item">
                                <img
                                  src={product3}
                                  alt=""
                                  className="img-fluid d-block rounded"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="nav-slide-item">
                                <img
                                  src={product4}
                                  alt=""
                                  className="img-fluid d-block rounded"
                                />
                              </div>
                            </SwiperSlide>
                           
                          </div>
                        </Swiper>
                      </div>
                    </div>
                  </Col>

                  <Col xl={8}>
                    <div className="mt-xl-0 mt-5">
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <h4>Friteuse à air Ninja AF161</h4>
                          <div className="hstack gap-3 flex-wrap">
                            <div>
                              <Link to="#" className="text-primary d-block">
                              Ninja
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <div>
                            <Tooltip
                              placement="top"
                              isOpen={ttop}
                              target="TooltipTop"
                              toggle={() => {
                                setttop(!ttop);
                              }}
                            >
                              Edit
                            </Tooltip>
                            <a
                              href="apps-ecommerce-add-product"
                              id="TooltipTop"
                              className="btn btn-light"
                            >
                              <i className="ri-pencil-fill align-bottom"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                   
                      <div className="d-flex flex-wrap gap-2 align-items-center mt-3">
                        <div className="text-muted fs-16">
                          <span className="mdi mdi-star text-warning"></span>
                          <span className="mdi mdi-star text-warning"></span>
                          <span className="mdi mdi-star text-warning"></span>
                          <span className="mdi mdi-star text-warning"></span>
                          <span className="mdi mdi-star text-warning"></span>
                        </div>
                        <div className="text-muted">
                          ( 5.50k Customer Review )
                        </div>
                      </div>

                      <Row className="mt-4">
                        {productDetailsWidgets.map((pricingDetails, key) => (
                          <PricingWidgetList
                            pricingDetails={pricingDetails}
                            key={key}
                          />
                        ))}
                      </Row>

                      <Row>
                        <Col xl={6}>
                          <div className=" mt-4">
                            <h5 className="fs-14">Sizes :</h5>
                            <div className="d-flex flex-wrap gap-2">
                              <Tooltip
                                placement="top"
                                isOpen={ssize}
                                target="TooltipSSize"
                                toggle={() => {
                                  setssize(!ssize);
                                }}
                              >
                                100 Items Available
                              </Tooltip>
                              <Tooltip
                                placement="top"
                                isOpen={msize}
                                target="TooltipMSize"
                                toggle={() => {
                                  setmsize(!msize);
                                }}
                              >
                                04 Items Available
                              </Tooltip>
                              <Tooltip
                                placement="top"
                                isOpen={lsize}
                                target="TooltipLSize"
                                toggle={() => {
                                  setlsize(!lsize);
                                }}
                              >
                                06 Items Available
                              </Tooltip>
                              <Tooltip
                                placement="top"
                                isOpen={xlsize}
                                target="TooltipXlSize"
                                toggle={() => {
                                  setxlsize(!xlsize);
                                }}
                              >
                                Out of Stock
                              </Tooltip>

                              <Input
                                type="radio"
                                className="btn-check"
                                name="productsize-radio"
                              />
                              <Label
                                className="btn btn-soft-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center"
                                id="TooltipSSize"
                              >
                                2L
                              </Label>

                              <Input
                                type="radio"
                                className="btn-check"
                                name="productsize-radio"
                              />
                              <Label
                                className="btn btn-soft-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center"
                                id="TooltipMSize"
                              >
                                3L
                              </Label>

                              <Input
                                type="radio"
                                className="btn-check"
                                name="productsize-radio"
                              />
                              <Label
                                className="btn btn-soft-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center"
                                id="TooltipLSize"
                              >
                                4L
                              </Label>

                              <Input
                                type="radio"
                                className="btn-check"
                                name="productsize-radio"
                              />
                              <Label
                                className="btn btn-soft-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center"
                                id="TooltipXlSize"
                              >
                                5L
                              </Label>
                            </div>
                          </div>
                        </Col>

                        <Col xl={6}>
                          <div className=" mt-4">
                            <h5 className="fs-14">Colors :</h5>
                            <div className="d-flex flex-wrap gap-2">
                              <div
                                data-bs-toggle="tooltip"
                                data-bs-trigger="hover"
                                data-bs-placement="top"
                                title="Out of Stock"
                              >
                                <button
                                  type="button"
                                  className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-primary"
                                  disabled
                                >
                                  <i className="ri-checkbox-blank-circle-fill"></i>
                                </button>
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-bs-trigger="hover"
                                data-bs-placement="top"
                                title="03 Items Available"
                              >
                                <button
                                  type="button"
                                  className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-secondary"
                                >
                                  <i className="ri-checkbox-blank-circle-fill"></i>
                                </button>
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-bs-trigger="hover"
                                data-bs-placement="top"
                                title="03 Items Available"
                              >
                                <button
                                  type="button"
                                  className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-success"
                                >
                                  <i className="ri-checkbox-blank-circle-fill"></i>
                                </button>
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-bs-trigger="hover"
                                data-bs-placement="top"
                                title="02 Items Available"
                              >
                                <button
                                  type="button"
                                  className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-info"
                                >
                                  <i className="ri-checkbox-blank-circle-fill"></i>
                                </button>
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-bs-trigger="hover"
                                data-bs-placement="top"
                                title="01 Items Available"
                              >
                                <button
                                  type="button"
                                  className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-warning"
                                >
                                  <i className="ri-checkbox-blank-circle-fill"></i>
                                </button>
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-bs-trigger="hover"
                                data-bs-placement="top"
                                title="04 Items Available"
                              >
                                <button
                                  type="button"
                                  className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-danger"
                                >
                                  <i className="ri-checkbox-blank-circle-fill"></i>
                                </button>
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-bs-trigger="hover"
                                data-bs-placement="top"
                                title="03 Items Available"
                              >
                                <button
                                  type="button"
                                  className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-light"
                                >
                                  <i className="ri-checkbox-blank-circle-fill"></i>
                                </button>
                              </div>
                              <div
                                data-bs-toggle="tooltip"
                                data-bs-trigger="hover"
                                data-bs-placement="top"
                                title="04 Items Available"
                              >
                                <button
                                  type="button"
                                  className="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-20 text-dark"
                                >
                                  <i className="ri-checkbox-blank-circle-fill"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>

                      <div className="mt-4 text-muted">
                        <h5 className="fs-14">Description :</h5>
                        <p>
                        Friteuse à air Ninja AF161 Max XL qui cuit, croustille, rôtit, cuit, réchauffe et déshydrate, avec une capacité de 5,5 litres<br/>
                         et une finition très brillante, gris
                        </p>
                      </div>

                      <Row>
                        <Col sm={6}>
                          <div className="mt-3">
                            <h5 className="fs-14">Features :</h5>
                            <ul className="list-unstyled">
                              <li className="py-1">
                                <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                Programmable
                              </li>
                              <li className="py-1">
                                <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                Plastique
                              </li>
                              <li className="py-1">
                                <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                All Sizes available
                              </li>
                              <li className="py-1">
                                <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                2 Different Colors
                              </li>
                            </ul>
                          </div>
                        </Col>
                        <Col sm={6}>
                          <div className="mt-3">
                            <h5 className="fs-14">Services :</h5>
                            <ul className="list-unstyled product-desc-list">
                              <li className="py-1">10 Days Replacement</li>
                              <li className="py-1">
                                Cash on Delivery available
                              </li>
                            </ul>
                          </div>
                        </Col>
                      </Row>

                      <div className="product-content mt-5">
                        <h5 className="fs-14 mb-3">Product Description :</h5>
                        <Nav tabs className="nav-tabs-custom nav-success">
                          <NavItem>
                            <NavLink
                              style={{ cursor: "pointer" }}
                              className={classnames({
                                active: customActiveTab === "1",
                              })}
                              onClick={() => {
                                toggleCustom("1");
                              }}
                            >
                              Specification
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              style={{ cursor: "pointer" }}
                              className={classnames({
                                active: customActiveTab === "2",
                              })}
                              onClick={() => {
                                toggleCustom("2");
                              }}
                            >
                              Details
                            </NavLink>
                          </NavItem>
                        </Nav>

                        <TabContent
                        activeTab={customActiveTab}
                          className="border border-top-0 p-4"
                          id="nav-tabContent"
                        >
                          <TabPane
                            id="nav-speci"
                            tabId="1"
                          >
                            <div className="table-responsive">
                              <table className="table mb-0">
                                <tbody>
                                  <tr>
                                    <th scope="row" style={{ width: "200px" }}>
                                      Category
                                    </th>
                                    <td>Friteuse à air</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Brand</th>
                                    <td>Ninja</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Color</th>
                                    <td>Noir</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Material</th>
                                    <td>Plastique</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Capacity</th>
                                    <td>5 Litres</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </TabPane>
                          <TabPane
                            id="nav-detail"
                            tabId="2"
                          >
                            <div>
                              <h5 className="font-size-16 mb-3">
                              Friteuse à air Ninja
                              </h5>
                              <p>
                              AF161 Max XL qui cuit, croustille, rôtit, cuit, réchauffe et déshydrate,<br/> 
                              avec une capacité de 5,5 litres et une finition très brillante, gris
                              </p>
                              <div>
                                <p className="mb-2">
                                  <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                  MOINS DE GRAISSE : Jusqu'à 75 % de graisse en moins que les méthodes traditionnelles de friture à l'air libre.<br/>
                                   Testé contre des frites coupées à la main et frites.
                                </p>
                                <p className="mb-2">
                                  <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                  CAPACITÉ XL
                                </p>
                                <p className="mb-2">
                                  <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                  TECHNOLOGIE MAX CRISP
                                </p>
                                <p className="mb-0">
                                  <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                  NETTOYAGE FACILE : Le panier en céramique est à la fois antiadhésif et passe au lave-vaisselle
                                </p>
                              </div>
                            </div>
                          </TabPane>
                        </TabContent>
                      </div>

                      <div className="mt-5">
                        <div>
                          <h5 className="fs-14 mb-3">Ratings</h5>
                        </div>
                        <Row className="gy-4 gx-0">
                          <Col lg={4}>
                            <div>
                              <div className="pb-3">
                                <div className="bg-light px-3 py-2 rounded-2 mb-2">
                                  <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                      <div className="fs-16 align-middle text-warning">
                                        <i className="ri-star-fill"></i>{" "}
                                        <i className="ri-star-fill"></i>{" "}
                                        <i className="ri-star-fill"></i>{" "}
                                        <i className="ri-star-fill"></i>{" "}
                                        <i className="ri-star-half-fill"></i>
                                      </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                      <h6 className="mb-0">4.5 out of 5</h6>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div className="text-muted">
                                    Total{" "}
                                    <span className="fw-medium">5.50k</span>{" "}
                                    reviews
                                  </div>
                                </div>
                              </div>

                              <div className="mt-3">
                                <Row className="align-items-center g-2">
                                  <div className="col-auto">
                                    <div className="p-2">
                                      <h6 className="mb-0">5 star</h6>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="p-2">
                                      <div className="progress animated-progess progress-sm">
                                        <div
                                          className="progress-bar bg-success"
                                          role="progressbar"
                                          style={{ width: "50.16%" }}
                                          aria-valuenow="50.16"
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="p-2">
                                      <h6 className="mb-0 text-muted">2758</h6>
                                    </div>
                                  </div>
                                </Row>

                                <Row className="align-items-center g-2">
                                  <div className="col-auto">
                                    <div className="p-2">
                                      <h6 className="mb-0">4 star</h6>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="p-2">
                                      <div className="progress animated-progess progress-sm">
                                        <div
                                          className="progress-bar bg-success"
                                          role="progressbar"
                                          style={{ width: "19.32%" }}
                                          aria-valuenow="19.32"
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="p-2">
                                      <h6 className="mb-0 text-muted">1063</h6>
                                    </div>
                                  </div>
                                </Row>

                                <Row className="align-items-center g-2">
                                  <div className="col-auto">
                                    <div className="p-2">
                                      <h6 className="mb-0">3 star</h6>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="p-2">
                                      <div className="progress animated-progess progress-sm">
                                        <div
                                          className="progress-bar bg-success"
                                          role="progressbar"
                                          style={{ width: "18.12%" }}
                                          aria-valuenow="18.12"
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="p-2">
                                      <h6 className="mb-0 text-muted">997</h6>
                                    </div>
                                  </div>
                                </Row>

                                <Row className="align-items-center g-2">
                                  <div className="col-auto">
                                    <div className="p-2">
                                      <h6 className="mb-0">2 star</h6>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="p-2">
                                      <div className="progress animated-progess progress-sm">
                                        <div
                                          className="progress-bar bg-warning"
                                          role="progressbar"
                                          style={{ width: "7.42%" }}
                                          aria-valuenow="7.42"
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-auto">
                                    <div className="p-2">
                                      <h6 className="mb-0 text-muted">408</h6>
                                    </div>
                                  </div>
                                </Row>

                                <Row className="align-items-center g-2">
                                  <div className="col-auto">
                                    <div className="p-2">
                                      <h6 className="mb-0">1 star</h6>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="p-2">
                                      <div className="progress animated-progess progress-sm">
                                        <div
                                          className="progress-bar bg-danger"
                                          role="progressbar"
                                          style={{ width: "4.98%" }}
                                          aria-valuenow="4.98"
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <div className="p-2">
                                      <h6 className="mb-0 text-muted">274</h6>
                                    </div>
                                  </div>
                                </Row>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <Link to='/apps-ecommerce-checkout'>
                      <Button color="success " className="rounded-pill" style={{ width: '200px' }}>Acheter</Button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
       
      </Container>
    </div>
  );
}
export default GererCommande6;
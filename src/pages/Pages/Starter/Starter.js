
   import React, { useState } from "react";
   import { Button,Card, CardBody, Col, Container,Input,Label,Tooltip,Nav,NavItem, NavLink, Row, TabContent, TabPane,} from "reactstrap";
    
   import BreadCrumb from "../../../Components/Common/BreadCrumb";
   
   import product30 from "../../../assets/images/products/img-30.jpg";
   import product31 from "../../../assets/images/products/img-31.jpg";
   import product32 from "../../../assets/images/products/img-32.jpg";
   import product33 from "../../../assets/images/products/img-33.jpg";
   
   import { productDetailsWidgets, reviews } from "../../../common/data/ecommerce";
   
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
   
   function EcommerceProductDetail(props) {
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
   
   document.title ="Product Details | Velzon - React Admin & Dashboard Template";
     return (
       <div className="page-content">
         <Container fluid>        
           <BreadCrumb title="Product Details" pageTitle="Ecommerce" />
   
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
                                 src={product30}
                                 alt=""
                                 className="img-fluid d-block"
                               />
                             </SwiperSlide>
                             <SwiperSlide>
                               <img
                                 src={product31}
                                 alt=""
                                 className="img-fluid d-block"
                               />
                             </SwiperSlide>
                             <SwiperSlide>
                               <img
                                 src={product32}
                                 alt=""
                                 className="img-fluid d-block"
                               />
                             </SwiperSlide>
                             <SwiperSlide>
                               <img
                                 src={product33}
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
                                     src={product30}
                                     alt=""
                                     className="img-fluid d-block rounded"
                                   />
                                 </div>
                               </SwiperSlide>
                               <SwiperSlide>
                                 <div className="nav-slide-item">
                                   <img
                                     src={product31}
                                     alt=""
                                     className="img-fluid d-block rounded"
                                   />
                                 </div>
                               </SwiperSlide>
                               <SwiperSlide>
                                 <div className="nav-slide-item">
                                   <img
                                     src={product32}
                                     alt=""
                                     className="img-fluid d-block rounded"
                                   />
                                 </div>
                               </SwiperSlide>
                               <SwiperSlide>
                                 <div className="nav-slide-item">
                                   <img
                                     src={product33}
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
                             <h4>CHAUSSURE CAMPUS 00S</h4>
                             <div className="hstack gap-3 flex-wrap">
                               <div>
                                 <Link to="#" className="text-primary d-block">
                                   ADIDAS
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
                                   Out of Stock
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
                                   39
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
                                   40
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
                                   41
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
                                   42
                                 </Label>
                                 <Label
                                   className="btn btn-soft-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center"
                                   id="TooltipXlSize"
                                 >
                                   42
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
                           La chaussure adidas Campus a fait ses débuts sur les parquets,
                            mais a rapidement été adoptée à peu près partout ailleurs.<br />
                             Avec cette paire, nous revisitons la silhouette iconique avec des matières,
                              des couleurs et des proportions modernes.<br />
                               Elle est dotée d'une tige en cuir premium doublée en tissu éponge doux.<br />
                                Le tout est monté sur une semelle intermédiaire blanc cassé, 
                                fidèle à l'héritage de la Campus.
                           </p>
                         </div>
   
                         <Row>
                           <Col sm={6}>
                             <div className="mt-3">
                               <h5 className="fs-14">Features :</h5>
                               <ul className="list-unstyled">
                                 <li className="py-1">
                                   <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                   Doublure textile en molleton.
                                 </li>
                                 <li className="py-1">
                                   <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                   Semelle extérieure en caoutchouc.
                                 </li>
                                 <li className="py-1">
                                   <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                   All Sizes available
                                 </li>
                                 <li className="py-1">
                                   <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                   4 Different Color
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
                                       <td>CHAUSSURE </td>
                                     </tr>
                                     <tr>
                                       <th scope="row">Brand</th>
                                       <td>ADIDAS</td>
                                     </tr>
                                     <tr>
                                       <th scope="row">Color</th>
                                       <td>Gris</td>
                                     </tr>
                                     <tr>
                                       <th scope="row">Matériau extérieur</th>
                                       <td>Tige en cuir souple</td>
                                     </tr>
                                     <tr>
                                       <th scope="row">Matériau de la semelle</th>
                                       <td>Caoutchouc</td>
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
                                 CHAUSSURE CAMPUS 00S 
                                 </h5>
                                 <p>
                                 Ces chaussures adidas ne se contentent pas d'enfreindre les règles,<br />
                                  elles les changent. Avec une nouvelle perspective sur nos coloris Campus 80s,<br />
                                   ces baskets rehaussent le look universitaire classique avec du daim de qualité supérieure et des « nuances de » délavées sur la tige.<br />
                                    La semelle intercalaire blanc cassé et les 3 bandes emblématiques font un clin d'œil au look OG tandis que les lacets en zigzag <br />
                                    et la marque Y2K ouvrent la voie à une sensation de fraîcheur avec une ambiance infusée de skate.
                                 </p>
                                 <div>
                                   <p className="mb-2">
                                     <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                     Machine Wash
                                   </p>
                                   <p className="mb-2">
                                     <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                     Fit Type: Regular
                                   </p>
                                   <p className="mb-2">
                                     <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                     Doublure textile en molleton.
                                   </p>
                                   <p className="mb-0">
                                     <i className="mdi mdi-circle-medium me-1 text-muted align-middle"></i>{" "}
                                     Fermeture à lacets.
                                   </p>
                                 </div>
                               </div>
                             </TabPane>
                           </TabContent>
                         </div>
   
                         <div className="mt-5">
                           <div>
                             <h5 className="fs-14 mb-3">Ratings & Reviews</h5>
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
                                           ></div>product
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
   
   export default EcommerceProductDetail;
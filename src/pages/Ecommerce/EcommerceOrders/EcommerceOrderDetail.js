import React, { useState } from "react";
import {Card,CardBody,Col,Container,Row} from "reactstrap";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { productDetails } from "../../../common/data/ecommerce";
import EcommerceOrderProduct from "./EcommerceOrderProduct";


const EcommerceOrderDetail = (props) => {

  const [col3, setcol3] = useState(true);
 
  document.title = "Order Details | Velzon - React Admin & Dashboard Template";
  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Order Details" pageTitle="Ecommerce" />

        <Row>
          <Col xl={9}>
            <Card>
              <CardBody>
                <div className="table-responsive table-card">
                  <table className="table table-nowrap align-middle table-borderless mb-0">
                    <thead className="table-light text-muted">
                      <tr>
                        <th scope="col">Product Details</th>
                        <th scope="col">Item Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Rating</th>
                        <th scope="col" className="text-end">
                          Total Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {productDetails.map((product, key) => (
                        <EcommerceOrderProduct product={product} key={key} />
                      ))}
                      <tr className="border-top border-top-dashed">
                        <td colSpan="3"></td>
                        <td colSpan="2" className="fw-medium p-0">
                          <table className="table table-borderless mb-0">
                            <tbody>
                              <tr>
                                <td>Sub Total :</td>
                                <td className="text-end">$359.96</td>
                              </tr>
                              <tr>
                                <td>
                                  Discount{" "}
                                  <span className="text-muted">(VELZON15)</span>{" "}
                                  : :
                                </td>
                                <td className="text-end">-$53.99</td>
                              </tr>
                              <tr>
                                <td>Shipping Charge :</td>
                                <td className="text-end">$65.00</td>
                              </tr>
                              <tr>
                                <td>Estimated Tax :</td>
                                <td className="text-end">$44.99</td>
                              </tr>
                              <tr className="border-top border-top-dashed">
                                <th scope="row">Total (USD) :</th>
                                <th className="text-end">$415.96</th>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EcommerceOrderDetail;
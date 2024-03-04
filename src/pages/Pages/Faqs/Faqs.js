import React, { useState } from 'react';
import { Card, Col, Collapse, Container, Row } from 'reactstrap';
import classnames from "classnames";

// Import Images
import faqImg from "../../../assets/images/faq-img.png";

const Faqs = () => {
  const [col1, setcol1] = useState(true)
  const [col2, setcol2] = useState(false)
  const [col3, setcol3] = useState(false)
  const [col4, setcol4] = useState(false)

  const [col5, setcol5] = useState(false)
  const [col6, setcol6] = useState(true)
  const [col7, setcol7] = useState(false)
  const [col8, setcol8] = useState(false)

  const [col9, setcol9] = useState(true)
  const [col10, setcol10] = useState(false)
  const [col11, setcol11] = useState(false)
  const [col12, setcol12] = useState(false)


  const t_col1 = () => {
    setcol1(!col1)
    setcol2(false)
    setcol3(false)
    setcol4(false)

  }

  const t_col2 = () => {
    setcol2(!col2)
    setcol1(false)
    setcol3(false)
    setcol4(false)

  }

  const t_col3 = () => {
    setcol3(!col3)
    setcol1(false)
    setcol2(false)
    setcol4(false)

  }  
  
  const t_col4 = () => {
    setcol4(!col4)
    setcol1(false)
    setcol2(false)
    setcol3(false)
  }  

  const t_col5 = () => {
    setcol5(!col5)
    setcol6(false)
    setcol7(false)
    setcol8(false)

  }

  const t_col6 = () => {
    setcol6(!col6)
    setcol5(false)
    setcol7(false)
    setcol8(false)

  }

  const t_col7 = () => {
    setcol7(!col7)
    setcol6(false)
    setcol5(false)
    setcol8(false)

  }  
  
  const t_col8 = () => {
    setcol8(!col8)
    setcol5(false)
    setcol6(false)
    setcol7(false)
  }

  const t_col9 = () => {
    setcol9(!col9)
    setcol10(false)
    setcol11(false)
    setcol12(false)

  }

  const t_col10 = () => {
    setcol10(!col10)
    setcol11(false)
    setcol12(false)
    setcol9(false)

  }

  const t_col11 = () => {
    setcol11(!col11)
    setcol9(false)
    setcol10(false)
    setcol12(false)

  }  
  
  const t_col12 = () => {
    setcol12(!col12)
    setcol9(false)
    setcol10(false)
    setcol11(false)
  }

document.title="FAQs | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
       <div className="page-content">
                    <Container fluid>
                        <Row>
                            <Col lg={12}>
                                <Card className="rounded-0 bg-soft-success mx-n4 mt-n4 border-top">
                                    <div className="px-4">
                                        <Row>
                                            <Col xxl={5} className="align-self-center">
                                                <div className="py-4">
                                                    <h4 className="display-6 coming-soon-text">Frequently asked questions</h4>
                                                    <p className="text-success fs-15 mt-3">If you can not find answer to your question in our FAQ, you can always contact us or email us. We will answer you shortly!</p>
                                                </div>
                                            </Col>
                                            <div className="col-xxl-3 ms-auto">
                                                <div className="mb-n5 pb-1 faq-img d-none d-xxl-block">
                                                    <img src={faqImg} alt="" className="img-fluid"/>
                                                </div>
                                            </div>
                                        </Row>
                                    </div>                                    
                                </Card>                              
                                <Row className="justify-content-evenly">
                                    <Col lg={4}>
                                        <div className="mt-3">
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="flex-shrink-0 me-1">
                                                    <i className="ri-question-line fs-24 align-middle text-success me-1"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-16 mb-0 fw-semibold">General Questions</h5>
                                                </div>
                                            </div>

                                            <div className="accordion accordion-border-box" id="genques-accordion">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="genques-headingOne">
                                                    <button
                                                        className={classnames(
                                                          "accordion-button",
                                                          "fw-medium",
                                                          { collapsed: !col1 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col1}
                                                        style={{ cursor: "pointer" }}
                                                      >
                                                          What types of products are sold on the platform?
                                                      </button>
                                                    </h2>
                                                    <Collapse isOpen={col1} className="accordion-collapse">
                                                        <div className="accordion-body">
                                                        Our platform offers a diverse range of products, including electronics, clothing, home goods, beauty products, and more. Our goal is to meet the diverse needs and preferences of consumers..
                                                        </div>
                                                    </Collapse>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="genques-headingTwo">
                                                    <button
                                                      className={classnames(
                                                        "accordion-button",
                                                        "fw-medium",
                                                        { collapsed: !col2 }
                                                      )}
                                                      type="button"
                                                      onClick={t_col2}
                                                      style={{ cursor: "pointer" }}
                                                    > 
                                                         How frequently are new products added?
                                                        </button>
                                                    </h2>
                                                    <Collapse isOpen={col2} className="accordion-collapse">
                                                        <div className="accordion-body">
                                                        New products are added to our platform regularly, typically on a weekly basis. We work hard to ensure our inventory remains current, offering our customers the newest trends and products available.
                                                        </div>
                                                    </Collapse>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="genques-headingThree">
                                                    <button
                                                      className={classnames(
                                                        "accordion-button",
                                                        "fw-medium",
                                                        { collapsed: !col3 }
                                                      )}
                                                      type="button"
                                                      onClick={t_col3}
                                                      style={{ cursor: "pointer" }}
                                                    >
                                                         What payment methods are accepted ?
                                                        </button>
                                                    </h2>
                                                    <Collapse isOpen={col3} className="accordion-collapse">
                                                        <div className="accordion-body">
                                                        We accept various payment methods to accommodate our customers' preferences, including credit/debit cards, PayPal, Apple Pay, Google Pay, and bank transfers. This ensures a seamless and convenient checkout experience for all users.
                                                        </div>
                                                    </Collapse>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="genques-headingFour">
                                                    <button
                                                      className={classnames(
                                                        "accordion-button",
                                                        "fw-medium",
                                                        { collapsed: !col4 }
                                                      )}
                                                      type="button"
                                                      onClick={t_col4}
                                                      style={{ cursor: "pointer" }}
                                                    >
                                                            Are customer reviews available for products?
                                                        </button>
                                                    </h2>
                                                    <Collapse isOpen={col4} className="accordion-collapse">
                                                        <div className="accordion-body">
                                                        Yes, customer reviews are available for products on our platform. We encourage our customers to share their experiences and feedback to help others make informed purchasing decisions. 
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                   <Col lg={4}>
                                        <div className="mt-3">
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="flex-shrink-0 me-1">
                                                    <i className="ri-user-settings-line fs-24 align-middle text-success me-1"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-16 mb-0 fw-semibold">Manage Account</h5>
                                                </div>
                                            </div>

                                            <div className="accordion accordion-border-box" id="manageaccount-accordion">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="manageaccount-headingOne">
                                                    <button
                                                        className={classnames(
                                                          "accordion-button",
                                                          "fw-medium",
                                                          { collapsed: !col5 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col5}
                                                        style={{ cursor: "pointer" }}
                                                      >
                                                           Can users update their personal information, such as email address or shipping address?
                                                        </button>
                                                    </h2>
                                                    <Collapse isOpen={col5} className="accordion-collapse">
                                                        <div className="accordion-body">
                                                          
                                                        Yes, users have the ability to update their personal information, including their
                                                         email address and shipping address, through their account settings. This allows
                                                          users to ensure that their account details are accurate and up-to-date to 
                                                          facilitate smooth transactions and communication.
                                                        </div>
                                                    </Collapse>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="manageaccount-headingTwo">
                                                    <button
                                                        className={classnames(
                                                          "accordion-button",
                                                          "fw-medium",
                                                          { collapsed: !col6 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col6}
                                                        style={{ cursor: "pointer" }}
                                                      >
                                                            Are there any requirements or guidelines for creating strong passwords?
                                                        </button>
                                                    </h2>
                                                    <Collapse isOpen={col6} className="accordion-collapse">
                                                        <div className="accordion-body">
                                                        Yes, the platform has requirements and guidelines in place to ensure users 
                                                        create strong passwords. Typically, these guidelines include a minimum character
                                                        length, the use of a combination of uppercase and lowercase letters, numbers,
                                                        and special characters. By adhering to these guidelines, users can create
                                                        passwords that are more resilient to unauthorized access attempts, enhancing
                                                         the security of their accounts.
                                                        </div>
                                                    </Collapse>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="manageaccount-headingThree">
                                                    <button
                                                        className={classnames(
                                                          "accordion-button",
                                                          "fw-medium",
                                                          { collapsed: !col7 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col7}
                                                        style={{ cursor: "pointer" }}
                                                      >
                                                         
                                                     How does a user create an account on your platform?
                                                        </button>
                                                    </h2>
                                                    <Collapse isOpen={col7} className="accordion-collapse">
                                                        <div className="accordion-body">
                                                            
                                                     To create an account on our platform, users can typically navigate to the 
                                                     "Sign Up"  section, usually located in the top-right 
                                                     corner of the website. From there, they are prompted to provide certain 
                                                     information such as their name, email address, and a password. After filling 
                                                     out the required fields, users typically need to verify their email address
                                                      through a confirmation link sent to the provided email. Once verified, 
                                                      the account creation process is complete, and users can access their newly
                                                     created account to start using the platform's features and services.
                                                        </div>
                                                    </Collapse>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="manageaccount-headingFour">
                                                    <button
                                                        className={classnames(
                                                          "accordion-button",
                                                          "fw-medium",
                                                          { collapsed: !col8 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col8}
                                                        style={{ cursor: "pointer" }}
                                                      >
                                                           What information is required during the account creation process?
                                                        </button>
                                                    </h2>
                                                    <Collapse isOpen={col8} className="accordion-collapse">
                                                        <div className="accordion-body">
                                                           
                                                        During the account creation process, users are typically required to provide
                                                         the following information:
                                                        Full Name: Users are usually asked to provide their full legal name.

                                                        Email Address: A valid email address is required for account verification and 
                                                        communication purposes.

                                                        Password: Users need to create a secure password to protect their account.

                                                        Additional Information (optional): Depending on the platform, users may be asked
                                                         to provide additional information such as their date of birth, gender, or 
                                                         preferences, though these fields are often optional.
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    
                                    <Col lg={4}>
                                        <div className="mt-3">
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="flex-shrink-0 me-1">
                                                    <i className="ri-shield-keyhole-line fs-24 align-middle text-success me-1"></i>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-16 mb-0 fw-semibold">Privacy &amp; Security</h5>
                                                </div>
                                            </div>

                                            <div className="accordion accordion-border-box" id="privacy-accordion">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="privacy-headingOne">
                                                    <button
                                                        className={classnames(
                                                          "accordion-button",
                                                          "fw-medium",
                                                          { collapsed: !col9 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col9}
                                                        style={{ cursor: "pointer" }}
                                                      >
                                                      How the storage and protection of data are ensured?
                                                        </button>
                                                    </h2>
                                                    <Collapse isOpen={col9} className="accordion-collapse">
                                                        <div className="accordion-body">
                                                        User data is stored securely using encryption methods and protected through robust security measures.
                                                        </div>
                                                    </Collapse>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="privacy-headingTwo">
                                                    <button
                                                        className={classnames(
                                                          "accordion-button",
                                                          "fw-medium",
                                                          { collapsed: !col10 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col10}
                                                        style={{ cursor: "pointer" }}
                                                      >
                                                           Are payment transactions encrypted and secure?
                                                        </button>
                                                    </h2>
                                                    <Collapse isOpen={col10} className="accordion-collapse">
                                                        <div className="accordion-body">
                                                        Payment transactions are encrypted to ensure secure transmission,
                                                         and sensitive information like credit card details is handled in
                                                          accordance with strict compliance standards, employing encryption
                                                           and tokenization techniques for enhanced security.
                                                        </div>
                                                    </Collapse>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="privacy-headingThree">
                                                    <button
                                                        className={classnames(
                                                          "accordion-button",
                                                          "fw-medium",
                                                          { collapsed: !col11 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col11}
                                                        style={{ cursor: "pointer" }}

                                                      >How do you handle sensitive information ?
                                                        </button>
                                                    </h2>
                                                    <Collapse isOpen={col11} className="accordion-collapse">
                                                        <div className="accordion-body">
                                                            
                                                  Sensitive information like credit card details is handled with the highest
                                                   level of care and security. We utilize encryption and tokenization techniques
                                                    to safeguard this data during transmission and storage. Additionally,
                                                     we adhere to strict compliance standards, such as PCI DSS, to ensure that
                                                      all handling of credit card details meets industry best practices for security
                                                       and privacy.
                                                        </div>
                                                    </Collapse>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="privacy-headingFour">
                                                    <button
                                                        className={classnames(
                                                          "accordion-button",
                                                          "fw-medium",
                                                          { collapsed: !col12 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col12}
                                                        style={{ cursor: "pointer" }}
                                                      >
                                                            How does the platform prioritize and uphold privacy and security standards?
                                                        </button>
                                                    </h2>
                                                    <Collapse isOpen={col12} className="accordion-collapse">
                                                        <div className="accordion-body">
                                                        The platform prioritizes privacy and security by implementing robust encryption protocols,
                                                        regularly updating security measures, and adhering to industry standards and regulations
                                                        such as GDPR and CCPA. Additionally, stringent access controls and authentication
                                                        mechanisms are in place to safeguard user data from unauthorized access. Regular 
                                                        security audits and assessments are conducted to identify and address any potential 
                                                        vulnerabilities, ensuring a secure environment for users' sensitive information.
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>                        
                    </Container>                    
                </div>
    </React.Fragment>
  )
}

export default Faqs
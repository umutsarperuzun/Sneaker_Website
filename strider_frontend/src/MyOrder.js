import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome CSS
import './App.css'; // Custom CSS

const PaymentForm = () => {
  // State to track the selected payment method
  const [selectedTab, setSelectedTab] = useState('credit-card');

  // Function to handle tab selection
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="container py-5">
      {/* For demo purpose */}
      <div className="row mb-4">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-6">Payment Section</h1>
        </div>
      </div>
      {/* End */}
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="card rounded">
            <div className="card-header">
              <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                {/* Credit card form tabs */}
                <ul role="tablist" className="nav bg-light nav-pills rounded nav-fill mb-3">
                  <li className="nav-item">
                    <a
                      href="#credit-card"
                      className={`nav-link ${selectedTab === 'credit-card' ? 'active' : ''}`}
                      onClick={() => handleTabClick('credit-card')}
                    >
                      <i className="fas fa-credit-card mr-2"></i> Credit Card
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#paypal"
                      className={`nav-link ${selectedTab === 'paypal' ? 'active' : ''}`}
                      onClick={() => handleTabClick('paypal')}
                    >
                      <i className="fab fa-paypal mr-2"></i> PayPal
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#net-banking"
                      className={`nav-link ${selectedTab === 'net-banking' ? 'active' : ''}`}
                      onClick={() => handleTabClick('net-banking')}
                    >
                      <i className="fas fa-mobile-alt mr-2"></i> Net Banking
                    </a>
                  </li>
                </ul>
              </div>
              {/* End */}
              {/* Credit card form content */}
              <div className="tab-content">
                {/* Credit card info */}
                <div id="credit-card" className={`tab-pane fade ${selectedTab === 'credit-card' ? 'show active' : ''} pt-3`}>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                      <label htmlFor="username">
                        <h6 className="bold">Card Owner</h6>
                      </label>
                      <input
                        type="text"
                        name="username"
                        placeholder="Card Owner Name"
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cardNumber">
                        <h6 className="bold">Card Number</h6>
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="Valid card number"
                          className="form-control"
                          required
                        />
                        <div className="input-group-append">
                          <span className="input-group-text text-muted">
                            <i className="fab fa-cc-visa mx-1"></i>
                            <i className="fab fa-cc-mastercard mx-1"></i>
                            <i className="fab fa-cc-amex mx-1"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="form-group">
                          <label>
                            <h6 className="bold">Expiration Date</h6>
                          </label>
                          <div className="input-group">
                            <input
                              type="number"
                              placeholder="MM"
                              name="expiryMonth"
                              className="form-control"
                              required
                            />
                            <input
                              type="number"
                              placeholder="YY"
                              name="expiryYear"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group mb-4">
                          <label
                            data-toggle="tooltip"
                            title="Three digit CV code on the back of your card"
                          >
                            <h6 className="bold">
                              CVV <i className="fa fa-question-circle d-inline"></i>
                            </h6>
                          </label>
                          <input type="text" required className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button type="button" className="subscribe btn btn-primary btn-block shadow-sm">
                        Confirm Payment
                      </button>
                    </div>
                  </form>
                </div>
                {/* End Credit card info */}

                {/* PayPal info */}
                <div id="paypal" className={`tab-pane fade ${selectedTab === 'paypal' ? 'show active' : ''} pt-3`}>
                  <h6 className="pb-2 bold">Select your PayPal account type</h6>
                  <div className="form-group">
                    <label className="radio-inline">
                      <input type="radio" name="optradio" defaultChecked /> Domestic
                    </label>
                    <label className="radio-inline">
                      <input type="radio" name="optradio" className="ml-5" /> International
                    </label>
                  </div>
                  <p>
                    <button type="button" className="btn btn-primary">
                      <i className="fab fa-paypal mr-2"></i> Log into my PayPal
                    </button>
                  </p>
                  <p className="text-muted">
                    Note: After clicking on the button, you will be directed to a secure gateway for
                    payment. After completing the payment process, you will be redirected back to
                    the website to view details of your order.
                  </p>
                </div>
                {/* End PayPal info */}

                {/* Net Banking info */}
                <div id="net-banking" className={`tab-pane fade ${selectedTab === 'net-banking' ? 'show active' : ''} pt-3`}>
                  <div className="form-group">
                    <label htmlFor="bankSelect">
                      <h6 className="bold">Select Your Bank</h6>
                    </label>
                    <select className="form-control" id="bankSelect">
                      <option value="" disabled>
                        --Please select your Bank--
                      </option>
                      <option>HSBC Holdings Plc</option>
                      <option>Lloyds Banking Group Plc</option>
                      <option>Barclays Plc</option>
                      <option>Standard Chartered Plc</option>
                      <option>NatWest Group Plc</option>
                      <option>Nationwide Building Society</option>
                      <option>Santander UK PLC</option>
                      <option>Investec plc</option>
                      <option>Virgin Money UK Plc</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <p>
                      <button type="button" className="btn btn-primary">
                        <i className="fas fa-mobile-alt mr-2"></i> Proceed Payment
                      </button>
                    </p>
                  </div>
                  <p className="text-muted">
                    Note: After clicking on the button, you will be directed to a secure gateway for
                    payment. After completing the payment process, you will be redirected back to
                    the website to view details of your order.
                  </p>
                </div>
                {/* End Net Banking info */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;


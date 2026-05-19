"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const orderItems = [
  {
    id: 1,
    name: "Headphone",
    qty: 2,
    total: "$36.00",
    image: "/assets/images/resource/products/1.jpg",
  },
  {
    id: 2,
    name: "Lagage",
    qty: 3,
    total: "$115.00",
    image: "/assets/images/resource/products/2.jpg",
  },
  {
    id: 3,
    name: "Watch",
    qty: 1,
    total: "$68.00",
    image: "/assets/images/resource/products/3.jpg",
  },
];

const paymentMethods = [
  {
    id: "card",
    title: "Credit Card / Debit Card",
  },
  {
    id: "bank",
    title: "Direct Bank Transfer",
    content:
      "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.",
  },
  {
    id: "cheque",
    title: "Cheque Payment",
    content:
      "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.",
  },
  {
    id: "other",
    title: "Other Payment",
    content:
      "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.",
  },
];

export default function CheckoutSection() {
  const [activePayment, setActivePayment] = useState("card");

  return (
    <section>
      <div className="container pt-70 pb-120">
        <div className="section-content">
          <form id="checkout-form" action="#">
            <div className="row mt-30">
              <div className="col-md-6">
                <div className="billing-details">
                  <h3 className="mb-30">Billing Details</h3>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label htmlFor="checkout-fname">First Name</label>
                      <input
                        id="checkout-fname"
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>

                    <div className="mb-3 col-md-6">
                      <label htmlFor="checkout-lname">Last Name</label>
                      <input
                        id="checkout-lname"
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>

                    <div className="col-md-12">
                      <div className="mb-3">
                        <label htmlFor="checkout-cname">Company Name</label>
                        <input
                          id="checkout-cname"
                          type="text"
                          className="form-control"
                          placeholder="Company Name"
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="checkout-email">Email Address</label>
                        <input
                          id="checkout-email"
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="checkout-address">Address</label>
                        <input
                          id="checkout-address"
                          type="text"
                          className="form-control"
                          placeholder="Street address"
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Apartment, suite, unit etc. (optional)"
                        />
                      </div>
                    </div>

                    <div className="mb-3 col-md-6">
                      <label htmlFor="checkout-city">City</label>
                      <input
                        id="checkout-city"
                        type="text"
                        className="form-control"
                        placeholder="City"
                      />
                    </div>

                    <div className="mb-3 col-md-6">
                      <label>State/Province</label>
                      <select className="form-control">
                        <option>Select State</option>
                        <option>Australia</option>
                        <option>UK</option>
                        <option>USA</option>
                      </select>
                    </div>

                    <div className="mb-3 col-md-6">
                      <label htmlFor="checkout-zip">Zip/Postal Code</label>
                      <input
                        id="checkout-zip"
                        type="text"
                        className="form-control"
                        placeholder="Zip/Postal Code"
                      />
                    </div>

                    <div className="mb-3 col-md-6">
                      <label>Country</label>
                      <select className="form-control">
                        <option>Select Country</option>
                        <option>Australia</option>
                        <option>UK</option>
                        <option>USA</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="col-md-6">
                <h3>Additional information</h3>

                <label htmlFor="order_comments">
                  Order notes <span className="optional">(optional)</span>
                </label>

                <textarea
                  id="order_comments"
                  className="form-control"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  rows={3}
                />
              </div>

              {/* Order Table */}
              <div className="col-md-12 mt-30">
                <h3>Your order</h3>

                <table className="table tbl-shopping-cart">
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Product Name</th>
                      <th>Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {orderItems.map((item) => (
                      <tr key={item.id}>
                        <td className="product-thumbnail">
                          <Link href="/shop-product-details">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={70}
                              height={70}
                            />
                          </Link>
                        </td>

                        <td className="product-name">
                          <Link href="/shop-product-details">{item.name}</Link> x{" "}
                          {item.qty}
                        </td>

                        <td>
                          <span className="amount">{item.total}</span>
                        </td>
                      </tr>
                    ))}

                    <tr>
                      <td>Cart Subtotal</td>
                      <td>&nbsp;</td>
                      <td>$180.00</td>
                    </tr>

                    <tr>
                      <td>Shipping and Handling</td>
                      <td>&nbsp;</td>
                      <td>Free Shipping</td>
                    </tr>

                    <tr>
                      <td>Order Total</td>
                      <td>&nbsp;</td>
                      <td>$250.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Payment Methods */}
              <div className="col-md-12 mt-60">
                <div className="payment-method">
                  <h3>Choose a Payment Method</h3>

                  <ul className="accordion-box">
                    {paymentMethods.map((method) => (
                      <li
                        key={method.id}
                        className={`accordion block ${
                          activePayment === method.id ? "active-block" : ""
                        }`}
                      >
                        <div
                          className={`acc-btn ${
                            activePayment === method.id ? "active" : ""
                          }`}
                          onClick={() => setActivePayment(method.id)}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="icon-outer">
                            <i className="lnr-icon-chevron-down"></i>
                          </div>
                          {method.title}
                        </div>

                        {activePayment === method.id && (
                          <div className="acc-content current">
                            {method.id === "card" ? (
                              <div className="payment-info">
                                <div className="row clearfix">
                                  <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="field-input mb-3">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name on the Card"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="field-input mb-3">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Card Number"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="field-input mb-3">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Expiry Date"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="field-input mb-3">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Security Code"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="field-input message-btn">
                                      <button type="submit" className="theme-btn btn-style-one" data-loading-text="Please wait..."><span className="btn-title"><span className="btn-text">Make Payment</span></span></button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="payment-info">
                                <p>{method.content}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
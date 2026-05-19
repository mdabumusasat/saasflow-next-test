"use client";
import React from 'react';
import Link from 'next/link';
import ProgressBar2 from '../../components/elements/ProgressBar2';

const TeamDetails = () => {
	return (
		<>
      <section className="team-details pt-120">
          <div className=""></div>
          <div className="container pb-100">
              <div className="team-details__top pb-70">
                  <div className="row">
                      <div className="col-xl-5 col-lg-6">
                          <div className="team-details__top-left">
                              <div className="team-details__top-img">
                                  <img src="assets/images/resource/team.jpg" alt="Image" />
                                  <div className="team-details__big-text">12 years of experience</div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-7 col-lg-6">
                          <div className="team-details__top-right">
                              <div className="team-details__top-content">
                                  <h3 className="team-details__top-name">Sarah Lee <span className="text-theme-colored1">/ Managing Director & CEO</span></h3>
                                  <p className="team-details__text-1 mb-0">
                                      Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on
                                      visitors.
                                  </p>
                                  <p className="team-details__text-2">Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium doloremque</p>
                                  <div className="info-outer-box">
                                      <div className="info-left">
                                          <div className="team-details-contact mb-30">
                                              <h5 className="title">Email</h5>
                                              <div className="text"><span>info@yourdomain.com</span></div>
                                          </div>
                                          <div className="team-details-contact mb-30">
                                              <h5 className="title">Phone</h5>
                                              <div className="text"><span>+012-3456-789</span></div>
                                          </div>
                                          <div className="team-details-contact">
                                              <h5 className="title">Website</h5>
                                              <div className="text"><span>www.yourdomain.com</span></div>
                                          </div>
                                      </div>
                                      <div className="info-right">
                                          <div className="team-details-contact mb-30">
                                              <h5 className="title">Blod Group</h5>
                                              <div className="text"><span>AB+</span></div>
                                          </div>
                                          <div className="team-details-contact mb-30">
                                              <h5 className="title">Age</h5>
                                              <div className="text"><span>25 Years</span></div>
                                          </div>
                                          <div className="team-details-contact">
                                              <h5 className="title">Address</h5>
                                              <div className="text"><span>121 King Street, Melbourne</span></div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="team-details__social">
                                      <Link href="/"><i className="fa fa-x"></i></Link>
                                      <Link href="/"><i className="fab fa-facebook"></i></Link>
                                      <Link href="/"><i className="fab fa-pinterest-p"></i></Link>
                                      <Link href="/"><i className="fab fa-instagram"></i></Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="team-details__bottom">
                  <h4 className="team-details__bottom-left-title">Short Biography​</h4>
                  <p className="team-details__bottom-left-text">
                      Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors.Sed ut
                      perspiciatis unde omnis natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiamea queipsa quae abillo inventore veritatis et quasi architecto beatae There are many variations
                  </p>
                  <div className="row">
                      <div className="col-xl-6 col-lg-6">
                          <div className="team-details__bottom-left">
                              <h4 className="team-details__bottom-left-title">Contact Us</h4>
                              <p className="team-details__bottom-left-text">Bring to the table win-win survival strategies to ensure proactive domination going forward, a new normal that has evolved simply</p>
                              <form id="contact_form" name="contact_form" action="/" method="post">
                                  <div className="row">
                                      <div className="col-sm-6">
                                          <div className="mb-3">
                                          <input name="form_name" className="form-control" type="text" placeholder="Your Full Name"/>
                                          </div>
                                      </div>
                                      <div className="col-sm-6">
                                          <div className="mb-3">
                                          <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-sm-6">
                                          <div className="mb-3">
                                          <input name="form_subject" className="form-control required" type="text" placeholder="Subject"/>
                                          </div>
                                      </div>
                                      <div className="col-sm-6">
                                          <div className="mb-3">
                                          <input name="form_phone" className="form-control" type="text" placeholder="Your Budget"/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="mb-3">
                                      <textarea name="form_message" className="form-control required" rows={5} placeholder="Message"></textarea>
                                  </div>
                                  <div className="mb-3 text-center">
                                      <input name="form_botcheck" className="form-control" type="hidden" value=""/>
                                      <button type="submit" className="theme-btn btn-style-one" data-loading-text="Please wait..."><span className="btn-title">Send Message</span></button>
                                  </div>
                              </form>
                          </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="team-details__bottom-right">
                          <h4 className="team-details__bottom-left-title">
                            Expertise &amp; Skills
                          </h4>

                          <p className="team-details__bottom-left-text">
                            Bring to the table win-win survival strategies to ensure proactive
                            domination. Going forward, a new normal that has evolved from
                            Generation X is on the runway heading toward a streamlined
                            solution. Survival strategies ensure sustainable growth and
                            cloud-based innovation.
                          </p>
                          <div className="team-details__progress">
                            {[
                              {
                                title: "Scalable Solutions",
                                targetPercentage: 80,
                              },
                              {
                                title: "Automation Features",
                                targetPercentage: 70,
                              },
                              {
                                title: "24/7 Support",
                                targetPercentage: 90,
                              },
                            ].map((item, index) => (
                              <div
                                key={index}
                                className="team-details__progress-single">
                                <h4 className="team-details__progress-title">
                                  {item.title}
                                </h4>
                                <ProgressBar2
                                  title={item.title}
                                  targetPercentage={item.targetPercentage}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
		</>
	);
};

export default TeamDetails;

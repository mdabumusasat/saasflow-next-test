"use client";
import React from "react";
import CounterUp from '../../components/elements/CounterUp';

const counters = [
  { value: 185 },  
  { value: 38 },
  { value: 99 },
  { value: 80 },
];


const Service2SectionThree = () => {
  return (
  <section className="services-section-three pt-110">
    <div className="auto-container">
      <div className="sec-title">
        <div className="row">
          <div className="col-xl-5">
            <div className="h2 title">Helping you succeed, every step of ways</div>
          </div>
          <div className="col-xl-5 offset-xl-2">
            <div className="text">Our Help Desk is packed with powerful features designed to We combine reliability, speed, and user-friendly design to deliver support that works for everyone.</div>
          </div>
        </div>
      </div>
      <div className="outer-box">
        <div className="row g-0">
          <div className="service-block-three col-xl-3 col-lg-6 col-sm-6">
            <div className="inner-block">
              <div className="icon"><img src="/assets/images/icons/service3-icon1.png" alt=""/></div>
              <div className="h6 count-box"><span className="count-text"><CounterUp end={counters[0].value} /></span>k+ Global Users</div>
              <div className="text">With over <span>185k+</span> users worldwide trusted by businesses.</div>
            </div>
          </div>
          <div className="service-block-three col-xl-3 col-lg-6 col-sm-6">
            <div className="inner-block color3">
              <div className="icon"><img src="/assets/images/icons/service3-icon2.png" alt=""/></div>
              <div className="h6 count-box"><span className="count-text"><CounterUp end={counters[1].value} /></span>k+ Download apps</div>
              <div className="text">Our mobile app has downloaded by <span>38,000+</span> users, making.</div>
            </div>
          </div>
          <div className="service-block-three col-xl-3 col-lg-6 col-sm-6">
            <div className="inner-block color4">
              <div className="icon"><img src="/assets/images/icons/service3-icon3.png" alt=""/></div>
              <div className="h6 count-box"><span className="count-text"><CounterUp end={counters[2].value} /></span>% Positive Reviews</div>
              <div className="text">With a remarkable <span>99%</span> positive reviews help desk earned</div>
            </div>
          </div>
          <div className="service-block-three col-xl-3 col-lg-6 col-sm-6">
            <div className="inner-block color2 border-0">
              <div className="icon"><img src="/assets/images/icons/service3-icon4.png" alt=""/></div>
              <div className="h6 count-box"><span className="count-text"><CounterUp end={counters[3].value} /></span>+ Integrations</div>
              <div className="text">Help Desk seamlessly connects with <span>180+</span> apps and platforms</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Service2SectionThree;
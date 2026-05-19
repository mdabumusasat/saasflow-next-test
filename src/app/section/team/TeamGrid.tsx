"use client";
import React from "react";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "Wade Warren",
    designation: "UX Designer, Research",
    image: "/assets/images/resource/team3-1.png",
    delay: "200",
  },
  {
    id: 2,
    name: "Leslie Alexander",
    designation: "UX Designer, Research",
    image: "/assets/images/resource/team3-2.png",
    delay: "400",
  },
  {
    id: 3,
    name: "Eleanor Pena",
    designation: "UX Designer, Research",
    image: "/assets/images/resource/team3-3.png",
    delay: "600",
  },
  {
    id: 4,
    name: "Leslie Alexander",
    designation: "UX Designer, Research",
    image: "/assets/images/resource/team3-2.png",
    delay: "400",
  },
  {
    id: 5,
    name: "Eleanor Pena",
    designation: "UX Designer, Research",
    image: "/assets/images/resource/team3-3.png",
    delay: "600",
  },
  {
    id: 6,
    name: "Wade Warren",
    designation: "UX Designer, Research",
    image: "/assets/images/resource/team3-1.png",
    delay: "200",
  },
];

const socialLinks = [
  {
    icon: "fab fa-instagram",
    link: "#",
    label: "Instagram",
  },
  {
    icon: "fab fa-linkedin-in",
    link: "#",
    label: "LinkedIn",
  },
  {
    icon: "fab fa-youtube",
    link: "#",
    label: "YouTube",
  },
];

const TeamSection: React.FC = (): JSX.Element => {
  return (
    <section className="team-section pb-0">
      <div className="container">
        <div className="row">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="col-lg-4 col-md-6">
              <div
                className="team-block"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={member.delay}>
                <div className="inner-box text-center">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="/page-team-details">
                        <img
                          src={member.image}
                          alt={member.name}
                        />
                      </Link>
                      <svg
                        className="shape-style1"
                        width="304"
                        height="543"
                        viewBox="0 0 304 543"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z" />
                      </svg>
                      <ul className="social-icon-list1">
                        {socialLinks.map((social, index) => (
                          <li key={index}>
                            <Link
                              href={social.link}
                              aria-label={social.label}>
                              <i className={social.icon}></i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </figure>
                  </div>
                  <div className="content-box">
                    <div className="h4 name">
                      <Link href="/page-team-details">
                        {member.name}
                      </Link>
                    </div>
                    <span className="designation">
                      {member.designation}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
import React from "react";
import "./plans.css";

function Plans() {
  //Array is created to store the details bellow//
  const pricingData = [
    {
      title: "Regular Member",
      price: "$50",
      duration: "/month",
      color: "#fff",
      features: [
        "Unlimitted access to the Courses",
        "Customer Support",
        "Personal Member",
        "5 Classes Per Week",
      ],
    },
    {
      title: "Premium Member",
      price: "$100",
      duration: "/month",
      color: "#6f55f2",
      features: [
        "Unlimitted acess to the Courses",
        "Customer Support",
        "Personal Member",
        "Standard Options",
        "5 classes Per week",
      ],
    },
    {
      title: "Standard Member",
      price: "$10",
      duration: "/month",
      color: "#fff",
      features: [
        "Unlimitted access to the course",
        "Customer Support",
        "Personal member",
        "Standard Options",
        "5 classes per week",
      ],
    },
  ];
  return (
    //Three pricing cards are made//

    <div className="container">
      <div className="pricing_top">
        <h2 className="section_title">Premium Pricing Plan</h2>
        <p>
          Unlock tech services with our Premium Pricing Plan and Score ahead of
          the competition{" "}
        </p>
      </div>

      <div className="pricing_wrapper">
        {pricingData.map((pricingItem, index) => (
          <div className="pricing_item" key={index}>
            <div
              className="pricing_card_top"
              style={{ background: pricingItem.color }}
            >
              <h2 className="section_title">{pricingItem.title}</h2>
              <h2 className="pricing_section_title">
                {pricingItem.price}
                <span>{pricingItem.duration}</span>
              </h2>
            </div>

            <div className="services">
              <ul>
                {pricingItem.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <button className="register_button">Join</button>
            </div>
          </div>
          //Mapping is created to retrive each data from the array//
          //Index is used to separete the details uniquely from the array pricingData//
        ))}
      </div>
    </div>
  );
}

export default Plans;

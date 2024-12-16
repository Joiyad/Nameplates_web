import React, { Fragment } from "react";
import Home from "../components/Home/Home";
import ServiceCard from "../components/ServiceCard/ServiceCard.jsx";
import { serviceCardsData } from "../data/serviceCards/serviceCards.js";

const HomePage = () => {
  return (
    <Fragment>
      <Home />
      <div className="flex flex-wrap gap-2 md:gap-4 justify-center items-center">
        {serviceCardsData.map(({ id, title, description, imageUrl, path, bgcolor }) => (
          <ServiceCard
            key={id}
            title={title}
            description={description}
            imageUrl={imageUrl}
            path={path}
            bgcolor={bgcolor}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default HomePage;

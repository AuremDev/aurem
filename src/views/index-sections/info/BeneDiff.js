import React from "react";
import {
  // Container,
  // Carousel,
  // CarouselIndicators,
  // CarouselItem,
  // Row,
  // Col
} from "reactstrap";
import Benefits from "./bene_diff/Benefits";
import Differential from "./bene_diff/Differential";
function BeneDiff() {
  return(
    <>
      <div class="justify-content-center">
        <Benefits/>
        <Differential/>
      </div>
    </>
  );
}

export default BeneDiff;
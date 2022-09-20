import React from "react";
import { StyledCounterNumber } from "./CounterNumber.styled";
import AnimatedOnScroll from "../../AnimatedOnScroll";

const CounterNumber = () => {
  return (
    <AnimatedOnScroll>
      <StyledCounterNumber colCount={3} gap={5}>
        <div>
          <p className="counter-number">+200</p>
          <p className="counter-description">
            Description of the number. People always pay attention to numbers.{" "}
          </p>
        </div>
        <div>
          <p className="counter-number">20%</p>
          <p className="counter-description">
            Description of the number. People always pay attention to numbers.{" "}
          </p>
        </div>
        <div>
          <p className="counter-number">12 tys.</p>
          <p className="counter-description">
            Description of the number. People always pay attention to numbers.{" "}
          </p>
        </div>
      </StyledCounterNumber>
    </AnimatedOnScroll>
  );
};

export default CounterNumber;

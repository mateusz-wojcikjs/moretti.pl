import React from "react";
import AnimatedOnScroll from "components/AnimatedOnScroll";
import { StyledCounterNumber } from "./CounterNumber.styled";
import { CountersProps } from "interfaces/page.interface";

const CounterNumber = ({ data }: { data: CountersProps }) => {
  return (
    <AnimatedOnScroll>
      <StyledCounterNumber colCount={3} gap={5}>
        {data.attributes.counter.map((count) => (
          <div key={count.id}>
            <p className="counter-number">{count.count}</p>
            <p className="counter-description">{count.description}</p>
          </div>
        ))}
      </StyledCounterNumber>
    </AnimatedOnScroll>
  );
};

export default CounterNumber;

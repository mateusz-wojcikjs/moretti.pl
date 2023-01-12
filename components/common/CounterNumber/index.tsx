import React from "react";
import AnimatedOnScroll from "components/AnimatedOnScroll";
import { StyledCounterNumber } from "./CounterNumber.styled";
import { CountersProps } from "interfaces/page.interface";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const CounterNumber = ({ data }: { data: CountersProps }) => {
  const [ref, inView] = useInView();
  return (
    <AnimatedOnScroll>
      <StyledCounterNumber colCount={3} gap={5} ref={ref}>
        {data.attributes.counter.map((count) => {
          return (
            <div key={count.id}>
              {inView && (
                <p className="counter-number">
                  <CountUp
                    prefix={count.prefix || ""}
                    end={Number(count.count)}
                    suffix={count.suffix || ""}
                  />
                </p>
              )}
              <p className="counter-description">{count.description}</p>
            </div>
          );
        })}
      </StyledCounterNumber>
    </AnimatedOnScroll>
  );
};

export default CounterNumber;

import React from "react";
import { StyledTimeline, TimelineItem } from "./Timeline.styled";
import AnimatedOnScroll from "../../AnimatedOnScroll";

const placeholder = [
  { id: 1, year: "1996", content: "szczotki przemysłowe" },
  {
    id: 2,
    year: "2000",
    content: "linie granulujące do  pasz i drewna, matryce, rolki",
  },
  { id: 3, year: "2003", content: "silosy z włókna szklanego" },
  { id: 4, year: "2004", content: "kompletne zakłady paszowe pod klucz" },
  { id: 5, year: "2008", content: "linie ekstruzji" },
  { id: 6, year: "2009", content: "technologie granulacji słomy i biomasy" },
];

const Timeline = () => {
  return (
    <AnimatedOnScroll>
      <StyledTimeline>
        <ol>
          {placeholder.map((item, i) => {
            return (
              <TimelineItem
                key={item.id}
                className={i % 2 === 0 ? "right" : "left"}
                row={i}
              >
                <div className="tl-content">{item.content}</div>
                <div className="tl-year">{item.year} r.</div>
              </TimelineItem>
            );
          })}
        </ol>
      </StyledTimeline>
    </AnimatedOnScroll>
  );
};

export default Timeline;

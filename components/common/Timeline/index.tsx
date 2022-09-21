import React from "react";
import AnimatedOnScroll from "components/AnimatedOnScroll";
import { StyledTimeline, TimelineItem } from "./Timeline.styled";
import {TimelineItems} from "interfaces/page.interface";

const Timeline = ({timelineItems}: TimelineItems) => {
  return (
    <AnimatedOnScroll>
      <StyledTimeline>
        <ol>
          {timelineItems.map((item, i) => {
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

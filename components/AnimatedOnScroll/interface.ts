import React from "react";
import { AosOptions } from "aos";

export interface AnimationOnScrollProps {
  children: React.ReactNode;
  type?: AosOptions["animatedClassName"];
}

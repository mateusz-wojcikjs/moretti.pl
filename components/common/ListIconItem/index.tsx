import React from "react";
import { StyledListIconItem } from "./ListIconItem.styled";

interface IProps {
  data: IData;
  icon?: any;
}

interface IData {
  type: string;
  icon: string;
  title: string;
  content: string;
}

const ListIconItem = ({ data, icon }: IProps) => {
  return (
    <StyledListIconItem>
      <div className="icon-box">{icon}</div>
      <div className="list-item-content">
        <div className="title">{data.title}</div>
        <div className="content">
          {data.type === "tel" && (
            <a href={`tel:${data.content.replaceAll(" ", "")}`}>
              {data.content}
            </a>
          )}
          {data.type === "email" && (
            <a href={`mailto:${data.content}`}>{data.content}</a>
          )}
          {data.type === "company" && <p>{data.content}</p>}
        </div>
      </div>
    </StyledListIconItem>
  );
};

export default ListIconItem;

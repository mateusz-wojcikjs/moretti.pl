import React from "react";
import { StyledListIconItem } from "./ListIconItem.styled";
import PhoneIcon from "icons/phone";
import EmailIcon from "icons/email";
import ContactIcon from "icons/contact";
import { ContactIcon as IContactIcon } from "interfaces/page.interface";

interface IData {
  data: IContactIcon;
}

const ListIconItem = ({ data }: IData) => {
  return (
    <StyledListIconItem>
      <div className="icon-box">
        {data.type === "tel" && <PhoneIcon />}
        {data.type === "email" && <EmailIcon />}
        {data.type === "company" && <ContactIcon />}
      </div>
      <div className="list-item-content">
        <div className="title">{data.title} </div>
        <div className="content">
          {data.type === "tel" && (
            <a href={`tel:${data.subTitle.replaceAll(" ", "")}`}>
              {data.subTitle}
            </a>
          )}
          {data.type === "email" && (
            <a href={`mailto:${data.subTitle}`}>{data.subTitle}</a>
          )}
          {data.type === "company" && <p>{data.subTitle}</p>}
        </div>
      </div>
    </StyledListIconItem>
  );
};

export default ListIconItem;

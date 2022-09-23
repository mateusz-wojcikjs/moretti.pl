import { PageType } from "types/page";
import * as Constants from "../constants";

export const getPageData = async (pageType: PageType) => {
  let uri;
  switch (pageType) {
    case Constants.PAGE_TYPES.HOME:
      uri = Constants.URI.HOME;
      break;
    case Constants.PAGE_TYPES.ABOUT:
      uri = Constants.URI.ABOUT;
      break;
    case Constants.PAGE_TYPES.CONTACT:
      uri = Constants.URI.CONTACT;
      break;
    case Constants.PAGE_TYPES.PRIVACY:
      uri = Constants.URI.PRIVACY;
      break;
    case Constants.PAGE_TYPES.OFFER:
      uri = Constants.URI.OFFER;
      break;
    default:
      uri = "";
      break;
  }

  const res = await fetch(process.env.API_URL + uri);
  const pageData = await res.json();
  return pageData.data.attributes;
};

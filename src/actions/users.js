import api from "../request";
import { find, split, isNull, startCase } from "lodash";

export function getUsers(params = "") {
  return dispatch => {
    dispatch({
      type: "GET_ALL_USERS",
      loading: true
    });
    return api()
      .get("/users", { params })
      .then(response => {
        return dispatch({
          type: "FILL_USERS",
          users: response.data,
          pagination_links: headerLinkToArray(response.headers.link)
        });
      });
  };
}

function headerLinkToArray(param) {
  let links = find(param, "link") ? param : null;
  if (isNull(links)) {
    return [];
  }
  links = split(links, ",");
  links = links.map(function(item) {
    const splitedItem = split(item, ";");
    return {
      page: urlToObject(splitedItem[0]),
      rel: startCase(splitedItem[1]
        .replace(" ", "")
        .replace(/"/g, "")
        .replace("rel=", ""))
    };
  });
  return links;
}

function urlToObject(fullUrl) {
  const splitedItem = fullUrl.replace(/<|>/g,'').split("?");
  return splitedItem[1].split("&").filter(function(params) {
    const p = params.split('=');
    return (p[0] == '_page');
  }).map(function(params) {
    const p = params.split('=');
    return p[1];
  }).toString()
};

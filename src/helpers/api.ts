import axios from "axios";
import {serverUrl} from "./routes";
import {replaceSpace} from "./replaceString";

export const getByName = (name: string) => {
  return axios
    .get(`${serverUrl}?beer_name=${replaceSpace(name)}&page=1&per_page=3`)
    .then(({ data }) => {
      return data;
    })
    .catch(function (error) {
      return error;
    });
};

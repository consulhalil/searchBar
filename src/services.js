import {mockData} from "./mockData";

export const fetchData = () => new Promise(res => {
   setTimeout(() => {
      return res(mockData);
   }, 2000);
});

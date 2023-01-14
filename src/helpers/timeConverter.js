import moment from "moment/moment";

export const timeConverter = (item) => {
  if (moment(item.dt_txt).hour() === 15 && item) return item;
};

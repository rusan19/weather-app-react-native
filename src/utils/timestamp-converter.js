export const timestamp = (unix_timestamp) => {
  // Will display time in 10:30:23 format
  var formattedTime = new Date(unix_timestamp * 1000);

  let formattedTime2 =
    formattedTime.getDay() -
    1 +
    "." +
    (formattedTime.getMonth() + 1) +
    "." +
    formattedTime.getFullYear();
  return formattedTime2;
};

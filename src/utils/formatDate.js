const formatDate = (dateString) => {
  const date = new Date(dateString);
  return (
    date.getMonth() +
    "/" +
    date.getDay() +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    "h" +
    date.getMinutes()
  );
};

export default formatDate;

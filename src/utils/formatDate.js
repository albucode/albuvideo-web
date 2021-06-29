const formatDate = (dateString) => {
  const date = new Date(dateString);
  return (
    (date.getMonth() + 1) +
    "/" +
    date.getDate() +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    "h" +
    date.getMinutes()
  );
};

export default formatDate;

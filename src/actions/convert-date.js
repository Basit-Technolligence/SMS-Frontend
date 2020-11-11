export const convertDate = (date) => {
  let convertedDate = new Date(date);
  const dd = String(convertedDate.getDate()).padStart(2, "0");
  const mm = String(convertedDate.getMonth() + 1).padStart(2, "0");
  const yyyy = convertedDate.getFullYear();
  return (date = mm + "/" + dd + "/" + yyyy);
};

export const convertToDate = (date) => {
  let formatedDate = new Date(date)
    .toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
    .split(" ")[1]
    .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
  return formatedDate;
};

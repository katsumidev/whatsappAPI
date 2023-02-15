export const convertToPhone = (p) => {
  if (p != null) {
    p =
      "+" +
      p.substr(0, 2) +
      " (" +
      p.substr(2, 2) +
      ") " +
      p.substr(4, 4) +
      "-" +
      p.substr(8, 4);
    return p;
  }
};

export const convertToDate = (date) => {
  let formatedDate = new Date(date)
    .toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
    .split(" ")[1]
    .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
  return formatedDate;
};

export const convertToFullDate = (date) => {
  let formatedDate = new Date(date).toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
  return formatedDate;
};

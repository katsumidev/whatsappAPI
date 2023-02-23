import moment from 'moment';
import 'moment/locale/pt';

// classe responsavel por fazer algumas conversões para o brasil

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
  let resultDate = "";

  let formatedDate = new Date(date).toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
  const currentDate = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  if (currentDate.split(" ")[0] === formatedDate.split(" ")[0]) {
    resultDate = formatedDate
      .split(" ")[1]
      .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
  } else {
    resultDate = formatedDate.split(" ")[0];
  }

  return resultDate;
};

export const convertToHour = (date) => {
  let formatedDate = new Date(date)
    .toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    })
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

export const convertToMessageFormat = (date) => {
  let resultDate = "";

  let formatedDate = new Date(date).toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
  const currentDate = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  if (currentDate.split(" ")[0] === formatedDate.split(" ")[0]) {
    resultDate = formatedDate
      .split(" ")[1]
      .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
  } else {
    resultDate = `${formatedDate.split(" ")[0]} - ${formatedDate
      .split(" ")[1]
      .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")}`;
  }

  return resultDate;
};

export const convertoToFullStringDate = (date) => {
  return moment(date).locale("pt").format("LLLL")
}
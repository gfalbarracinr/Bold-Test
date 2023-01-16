import Icon from "./components/Icon";
import { CardType, FilterType, TransactionType } from "./types";
import { BsLink45Deg } from 'react-icons/bs'
import TerminalLogo from'./assets/icons/terminal.png';
import MasterCardLogo from './assets/icons/mastercard.png';
import VisaLogo from './assets/icons/visa.png';

const getMonth = (date: Date): string => {
  return new Intl.DateTimeFormat("es-CO", {month: 'long'}).format(date);
}
export const formatDateDay = (date: Date): string => {
  return new Intl.DateTimeFormat("es-CO", {day:'numeric', month:'numeric',year:'numeric'}).format(date);
}

export const formatDateHour = (date: Date): string => {
  return new Intl.DateTimeFormat("en-GB", {hour:'numeric', minute: 'numeric', second:'numeric'}).format(date);
}
export const toCapitalize =  (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export const getFilterTitle = (filter: FilterType, date: Date) => {
  switch(filter) {
    case FilterType.DAY:
      return 'hoy';
    case FilterType.WEEK:
      return 'esta semana'
    case FilterType.MONTH:
      return getMonth(date);
  }
}

export const getFilterText = (filter: FilterType, date: Date) => {
  switch(filter) {
    case FilterType.DAY:
      return `${toCapitalize(getMonth(date))} ${date.getDate()}` ;
    case FilterType.MONTH:
    case FilterType.WEEK:
      return `${toCapitalize(getMonth(date))}, ${date.getFullYear()}`;
  }
}
export const formatNumberToCurrency = (number: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(number);
}

export const resolveTransactionTypeIcon = (transaction: TransactionType) => {
  switch (transaction) {
    case TransactionType.LINK:
      return <BsLink45Deg />
    case TransactionType.TERMINAL:
      return <Icon path={TerminalLogo}/>;
  }
}

export const resolveCardTypeIcon = (card: CardType) => {
  switch (card) {
    case CardType.MASTERCARD:
      return <Icon path={MasterCardLogo}/>
    case CardType.VISA:
      return <Icon path={VisaLogo}/>;
  }
}
export const createMockCardNumber = (cardNumber: number) => {
  if (cardNumber.toString().length === 4) {
    return `**** **** **** ${cardNumber}`;
  }
}
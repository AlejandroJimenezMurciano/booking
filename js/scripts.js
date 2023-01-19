//Me traigo los id del html para poder usarlos
const calendarElement = document.getElementById('calendar');
const formElement = document.getElementById('form');
const dinnersElement = document.getElementById('dinners');
const shiftElement = document.getElementById('shift');
const hoursElement = document.getElementById('hours');
const reserveElement = document.getElementById('reserve');
const reserveStatusElement = document.getElementById('reserve-status');
const rootStyles = document.documentElement.style;

//Objeto con dias de la semana
const daysOfMonth = {
  january: 31,
  february: isLeap(actualYear) ? 29 : 28,
  march: 31,
  april: 30,
  may: 31,
  june: 30,
  july: 31,
  august: 30,
  september: 31,
  october: 30,
  november: 31,
  december: 30
};

//Array con meses del año
const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december'
];

//Array con semanas del año
const daysOfWeek = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday'
];

//funcion para ver si un año es bisiesto
const isLeap = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

//Constantes y variables
const date = new Date();
const today = date.getDay();
const currentMonth = date.getDate();
const actualYear = date.getMonth();
const currentDate = date.getFullYear();

let allDays;
let WeekDay;
let dinners;
let reserve;
let reservationDay;
let reservationHour;

//funcion para poner los dias de la semana en el cabecero del calendario
for (const day of daysOfWeek) {
  const headerDays = document.createElement('span');
  headerDays.classList.add('day-header');
  headerDays.textContent = day;
  calendarElement.append(headerDays);
}

//función para poner los dias de la semana
const getDaysOfWeek = day => newDate(actualYear, currentMonth, day).getDay();

//funcion para imprimir los dias que tiene cada mes
const printDaysOfMonth = () => {
  const firstDay = getDayOfWeek(1);
  rootStyles.setProperty('--first-day-column', firstDay === 0 ? 7 : firstDay);

  const newDay = document.createElement('span');
  newDay.classList.add('first', 'first-day');
  if (actualDate > 1) newDay.classList.add('disabled');
  calendarElement.append(newDay);
  for (let i = 2; i <= daysOfMonth[months[currentMonth]]; i++) {
    const newDay = document.createElement('span');
    newDay.classList.add('day');
    newDay.textContent = i;
  }
};

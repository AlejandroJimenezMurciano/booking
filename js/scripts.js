//Me traigo los id del html para poder usarlos
const calendarElement = document.getElementById('calendar');
const formElement = document.getElementById('form');
const dinnersElement = document.getElementById('dinners');
const shiftElement = document.getElementById('shift');
const hoursElement = document.getElementById('hours');
const reserveElement = document.getElementById('reserve');
const reserveStatusElement = document.getElementById('reserve-status');
const rootStyles = document.documentElement.style;

//funcion para ver si un año es bisiesto
const isLeap = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

const date = new Date();

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let allNumericDays;
let getTheWeekDay;

const firstDay = new Date(year, month, '1');

//Objeto con dias de la semana
const daysOfMonth = {
  january: 31,
  february: isLeap(year) ? 29 : 28,
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

//funcion para imprimir el calendario en pantalla
const createCalendar = () => {
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < daysOfWeek.length; index++) {
    const weekDayCalendar = document.createElement('div');
    weekDayCalendar.textContent = daysOfWeek[index];
    fragment.append(weekDayCalendar);
  }

  for (let index = 1; index <= daysOfMonth[months[months]]; index++) {
    const dayCalendar = document.createElement('div');
    dayCalendar.classList.add('day');
    fragment.append(dayCalendar);
    dayCalendar.textContent = index;

    if (index < day) {
      dayCalendar.classList.add('disabled');
    } else if (day === index) {
      dayCalendar.classList.add('today');
    }

    if (index === 1) {
      dayCalendar.classList.add('first-day');
    }
    let column;
    if (firstDay.getDay() === 0) column = 7;
    else column = firstDay.getDay();

    rootStyles.setProperty('--first-day-column', column);
  }
  calendarElement.append(fragment);
  allNumericDays = document.querySelectorAll('.day');
};

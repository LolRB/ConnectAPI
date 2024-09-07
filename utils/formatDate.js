const addDateSuffix = (date) => {
  const lastDigit = date % 10;
  const lastTwoDigits = date % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) return `${date}th`;
  switch (lastDigit) {
    case 1:
      return `${date}st`;
    case 2:
      return `${date}nd`;
    case 3:
      return `${date}rd`;
    default:
      return `${date}th`;
  }
};

const formatTimestamp = (
  timestamp,
  { monthLength = "short", dateSuffix = true } = {}
) => {
  const months = [
    { short: "Jan", long: "January" },
    { short: "Feb", long: "February" },
    { short: "Mar", long: "March" },
    { short: "Apr", long: "April" },
    { short: "May", long: "May" },
    { short: "Jun", long: "June" },
    { short: "Jul", long: "July" },
    { short: "Aug", long: "August" },
    { short: "Sep", long: "September" },
    { short: "Oct", long: "October" },
    { short: "Nov", long: "November" },
    { short: "Dec", long: "December" },
  ];

  const dateObj = new Date(timestamp);
  const month = months[dateObj.getMonth()][monthLength];
  const day = dateSuffix ? addDateSuffix(dateObj.getDate()) : dateObj.getDate();
  const year = dateObj.getFullYear();

  const hours = dateObj.getHours() % 12 || 12;
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");
  const period = dateObj.getHours() >= 12 ? "pm" : "am";

  return `${month} ${day}, ${year} at ${hours}:${minutes} ${period}`;
};

export default { addDateSuffix, formatTimestamp };

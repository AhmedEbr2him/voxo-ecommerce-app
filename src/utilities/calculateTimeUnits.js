export const calculateTimeUnits = () => {
  //   let days = Math.floor(time / (1000 * 60 * 60 * 24));
  //   let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  //   let minutes = Math.floor((time / (1000 * 60)) % 60);
  //   let second = Math.floor((time / 1000) % 60);

  //   return { days, hours, minutes, second };

  let year = new Date().getFullYear();

  const diffrence = +new Date(`10/6/${year}`) - +new Date();

  let timeLeft = {};

  if (diffrence > 0) {
    timeLeft = {
      days: Math.floor((diffrence / 1000) * 60 * 60 * 24),
      hours: Math.floor((diffrence / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diffrence / (1000 * 60)) % 60),
      seconds: Math.floor((diffrence / 1000) % 60),
    };
  }
  return timeLeft;
};

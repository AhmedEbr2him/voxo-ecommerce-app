import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const calculateTimeUnits = targetDate => {
  const currentDate = new Date();
  const diffrence = +new Date(targetDate) - +currentDate;

  let timeLeft = {};

  if (diffrence > 0) {
    timeLeft = {
      days: Math.floor(diffrence / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diffrence / (1000 * 60 * 60)) % 24),
      min: Math.floor((diffrence / (1000 * 60)) % 60),
      sec: Math.floor((diffrence / 1000) % 60),
    };
  }

  for (let unit in timeLeft) {
    if (timeLeft[unit] < '01') {
      timeLeft[unit] = '0' + '0';
    } else if (timeLeft[unit] < 10) {
      timeLeft[unit] = '0' + timeLeft[unit];
    }
  }
  return timeLeft;
};

const CountDown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeUnits(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeUnits(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, targetDate]);

  return (
    <div className='countdown'>
      <ul className='countdown-list'>
        {Object.keys(timeLeft).map((timeUnit, index) => {
          let timeValue = timeLeft[timeUnit];
          if (!timeValue) {
            return;
          }

          return (
            <li key={index} className='countdown-item'>
              <span>{timeValue}</span>
              <span>{timeUnit}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default CountDown;

CountDown.propTypes = {
  targetDate: PropTypes.string,
};

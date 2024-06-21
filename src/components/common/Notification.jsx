import PropTypes from 'prop-types';
import { useContext, useEffect, useRef } from 'react';
import { MainContext } from '../../context/MainContext';

const Notification = ({ notificationMsg }) => {
  const { isNotificationActive, setIsNotificationActive } = useContext(MainContext);
  const msgRef = useRef();

  useEffect(() => {
    const msgTime = setTimeout(() => {
      setIsNotificationActive(false);
      return () => clearTimeout(msgTime);
    }, 2000);

    return () => clearTimeout(msgTime);
  }, [isNotificationActive, setIsNotificationActive]);

  return (
    <div className={`notification-container ${isNotificationActive ? 'active' : ''}`}>
      <div className='notification'>
        {isNotificationActive ? (
          <p ref={msgRef}>{`Added to ${notificationMsg}`}</p>
        ) : (
          <p ref={msgRef}>{`Removed from ${notificationMsg}`}</p>
        )}
      </div>
    </div>
  );
};
export default Notification;

Notification.propTypes = {
  notificationMsg: PropTypes.string,
};

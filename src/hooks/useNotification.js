import { useContext } from 'react';
import { Notification } from '../components';
import { MainContext } from '../context/MainContext';

const useNotification = () => {
  const { isNotificationActive, handleNotification } = useContext(MainContext);
};

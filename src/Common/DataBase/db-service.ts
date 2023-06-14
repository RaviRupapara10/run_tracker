import { DEBUG, enablePromise, openDatabase } from 'react-native-sqlite-storage';

export const getDBConnection = async () => {
  return await openDatabase({ name: 'RunTracker.db', createFromLocation: '~/RunTracker.db' },okCallback,cancelCallback);
};
const okCallback = () => {
  console.log('Open');
}

const cancelCallback = (e: any) => {
  console.log('Canceled', e);
}
enablePromise(true);

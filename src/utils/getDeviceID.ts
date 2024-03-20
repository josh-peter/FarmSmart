import * as SecureStore from 'expo-secure-store';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


const createDeviceId = async () => {
  const deviceID = JSON.stringify(uuidv4());
  await SecureStore.setItemAsync('secure_deviceid', deviceID);
  return deviceID
}

export const getDeviceId = async () => {
  const deviceID = await SecureStore.getItemAsync("secure_deviceid")
  if (deviceID) return deviceID
  return await createDeviceId()
}
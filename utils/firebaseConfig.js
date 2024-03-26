// firebaseConfig.js
import { initializeApp } from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
apiKey: "AIzaSyBf9vUMn6l8nqXJ5qcQb-kA_Q8L-nbC0YU",
  authDomain: "farmsmarter-assessment.firebaseapp.com",
  projectId: "farmsmarter-assessment",
  storageBucket: "farmsmarter-assessment.appspot.com",
  messagingSenderId: "312010132283",
  appId: "1:312010132283:web:d260f078ce97e56f40451e",
  measurementId: "G-3RK04CSMR6"
};

const app = initializeApp(firebaseConfig);

// Export the initialized Firebase app
export default app;

// Export the function to save coordinates to Firestore
export const saveCoordinatesToFirestore = async (coordinates) => {
  const db = getFirestore(app);
  const coordinatesRef = collection(db, 'coordinates');

  try {
    await addDoc(coordinatesRef, { coordinates });
    Alert.alert('Success', 'Coordinates saved to Firestore.');
  } catch (error) {
    Alert.alert('Error', 'Failed to save coordinates: ' + error.message);
  }
};


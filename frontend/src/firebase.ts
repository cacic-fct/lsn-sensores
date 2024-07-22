import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyC3QS-o0_hORedGN6MsU6wKuVHJoUalEKA',
	databaseURL: 'https://sensoreslsn.firebaseio.com',
	storageBucket: 'sensoreslsn.appspot.com'
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {  initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyCN0PIXk5rO-R3QdloEqLLscmQYu-Gwcc0",
	authDomain: "central-eatery.firebaseapp.com",
	projectId: "central-eatery",
	storageBucket: "central-eatery.firebasestorage.app",
	messagingSenderId: "735662423815",
	appId: "1:735662423815:web:a00076d1fccd468e800fa2",
	measurementId: "G-M0X0LN7CYB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
// const firestore = getFirestore(app)
const firestore = initializeFirestore(app,
	{
		localCache:
			persistentLocalCache({ tabManager: persistentMultipleTabManager() })
	});
export { auth, firestore, storage, analytics };

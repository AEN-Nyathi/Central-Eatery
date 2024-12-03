import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {  initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: "AIzaSyAqkzwgP4IpzDZ8g6K3jr1jXozP60efiLg",
	authDomain: "rise-and-shine-shop.firebaseapp.com",
	projectId: "rise-and-shine-shop",
	storageBucket: "rise-and-shine-shop.appspot.com",
	messagingSenderId: "1000695658741",
	appId: "1:1000695658741:web:aaa173d3ce97f3a70a6dbc",
	measurementId: "G-2JJGQFTT4K"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

// const firestore = getFirestore(app)
const firestore = initializeFirestore(app,
	{
		localCache:
			persistentLocalCache({ tabManager: persistentMultipleTabManager() })
	});
export { auth, firestore, storage };

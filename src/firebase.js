import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'

// Configura tus credenciales de Firebase
const firebaseConfig = {
	apiKey: "AIzaSyCl6Cum-zKYBZbw-68bRUr1_yyIZv_2Lck",
	authDomain: "gastos-2b065.firebaseapp.com",
	databaseURL: "https://gastos-2b065-default-rtdb.firebaseio.com",
	projectId: "gastos-2b065",
	storageBucket: "gastos-2b065.appspot.com",
	messagingSenderId: "683135440178",
	appId: "1:683135440178:web:ac212a786cd2f12927b32b"
};

// Inicializa Firebase con la configuración
firebase.initializeApp(firebaseConfig);

export default firebase 

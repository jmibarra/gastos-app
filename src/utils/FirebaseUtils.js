import firebase from '../firebase'
import { getDatabase, ref, get, set, remove, push, orderByChild, equalTo, query, child } from 'firebase/database';
import 'firebase/compat/database';

class FirebaseUtils {
    constructor() {
        // Crea una instancia de la base de datos de Firebase
        this.database = getDatabase();
    }

    peticionGet = async (dataStructure,config = null) => { 
        const itemRef = ref(this.database);
        const pathRef = child(itemRef, dataStructure);
    
        let peticionesQuery = query(pathRef);
    
        if (config) {
            if (config.orderBy && config.equalTo) {
                peticionesQuery = orderByChild(peticionesQuery, config.orderBy).equalTo(config.equalTo).once('value');
            }
        }
    
        const snapshot = await get(peticionesQuery);
        
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return [];
        }
    };

    // Agrega un elemento a la base de datos de Firebase
    peticionPost = (formItem, dataStructure) => {
        if(formItem.motivo === '')
            return

        // Obtiene una referencia a la ubicación en la base de datos donde se va a agregar el elemento
        const dbRef = ref(this.database, dataStructure);
        // Agrega el elemento a la base de datos
        push(dbRef, formItem).then(() => {
            console.log('Item agregado exitosamente');
        }).catch((error) => {
            console.log('Error al agregar item', error);
        });
    };

  // Actualiza un elemento existente en la base de datos de Firebase
  peticionPut = (formItem, dataStructure) => {
    // Obtiene una referencia al elemento que se va a actualizar
    const itemRef = ref(this.database, dataStructure);
    // Actualiza el elemento en la base de datos
    set(itemRef, formItem)
      .then(() => {
        console.log("Item actualizado correctamente");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Elimina un elemento existente en la base de datos de Firebase
  peticionDelete = (dataStructure) => {
        // Obtiene una referencia al elemento que se va a eliminar
        const dbRef = ref(this.database, dataStructure);
        // Elimina el elemento de la base de datos
        remove(dbRef).catch((error) => {
            console.log(error);
        });
  };
}

// Crea una instancia de la clase FirebaseUtils y la exporta
const firebaseUtils = new FirebaseUtils();
export default firebaseUtils;

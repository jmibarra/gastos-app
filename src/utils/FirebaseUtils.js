import firebase from '../firebase'
import { getDatabase, ref, get, set, remove, push, orderByChild, equalTo, query } from 'firebase/database';
import 'firebase/compat/database';

class FirebaseUtils {
    constructor() {
        // Crea una instancia de la base de datos de Firebase
        this.database = getDatabase();
    }

    peticionGet = async (dataStructure,config = null) => {   
        if (config) {
            if (config.orderBy && config.equalTo) {
                const getRef = query(ref(getDatabase(), dataStructure), orderByChild(config.orderBy), equalTo(config.equalTo));
                const snapshot = await get(getRef);
                if (snapshot.exists()) {
                    console.log(snapshot.val())
                    return snapshot.val();
                } else {
                    return [];
                }

            }
        }else{
            const itemRef = ref(this.database,dataStructure);
            const snapshot = await get(itemRef);
            if (snapshot.exists()) {
                return snapshot.val();
            } else {
                return [];
            }
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

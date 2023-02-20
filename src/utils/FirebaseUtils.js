import firebase from '../firebase'
import { getDatabase, ref, get, set, remove, push } from 'firebase/database';
import 'firebase/compat/database';

class FirebaseUtils {
  constructor() {
    // Crea una instancia de la base de datos de Firebase
    this.database = getDatabase();
  }

  // Agrega un elemento a la base de datos de Firebase
  peticionPost = (formItem, año, mes, tipo,userUID) => {

    if(formItem.motivo === '')
        return

    // Obtiene una referencia a la ubicación en la base de datos donde se va a agregar el elemento
    const dbRef = ref(this.database, `${userUID}/${tipo}/${año}/${mes}`);
    // Agrega el elemento a la base de datos
    push(dbRef, formItem).then(() => {
      console.log('Item agregado exitosamente');
    }).catch((error) => {
      console.log('Error al agregar item', error);
    });
  };

  // Actualiza un elemento existente en la base de datos de Firebase
  peticionPut = (formItem, año, mes, tipo, id, userUID) => {
    // Obtiene una referencia al elemento que se va a actualizar
    const itemRef = ref(this.database, `${userUID}/${tipo}/${año}/${mes}/${id}`);
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
  peticionDelete = (formItem, año, mes, tipo, id,userUID) => {
    // Solicita la confirmación del usuario para eliminar el elemento
    if (
      window.confirm(
        `Estás seguro que deseas eliminar el elemento ${
          formItem && formItem.motivo
        }?`
      )
    ) {
      // Obtiene una referencia al elemento que se va a eliminar
      const dbRef = ref(this.database, `${userUID}/${tipo}/${año}/${mes}/${id}`);
      // Elimina el elemento de la base de datos
      remove(dbRef).catch((error) => {
        console.log(error);
      });
    }
  };

  // Obtiene los elementos existentes en la base de datos de Firebase
  peticionGet = async (año, mes, tipo, userUID) => {
    // Inicializa la respuesta como un arreglo vacío
    let response = [];
    // Obtiene los datos de la ubicación especificada en la base de datos
    const snapshot = await get(ref(this.database, `${userUID}/${tipo}/${año}/${mes}`));
    // Si los datos existen, los asigna a la respuesta
    if (snapshot.exists()) {
      response = snapshot.val();
    }
    // Devuelve la respuesta
    return response;
  };
}

// Crea una instancia de la clase FirebaseUtils y la exporta
const firebaseUtils = new FirebaseUtils();
export default firebaseUtils;

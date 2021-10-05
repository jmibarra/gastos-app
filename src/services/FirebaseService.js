import firebase from '../firebase';

class FirebaseService{

  //Construyo la petición para el post en firebase indicando el año, el mes y el tipo de item(Gasto o ingreso)
  peticionPost=(formItem,año,mes,tipo)=>{
    firebase.child(tipo).child(año).child(mes).push(formItem,
      error=>{
        if(error)console.log(error)
      });
  }

  peticionPut=(formItem,año,mes,tipo,id)=>{
    firebase.child(tipo).child(año).child(mes).child(id).set(
      formItem,
      error=>{
        if(error)console.log(error)
      });
  }

  peticionDelete=(formItem,año,mes,tipo,id)=>{
    if(window.confirm(`Estás seguro que deseas eliminar el elemento ${formItem && formItem.motivo}?`))
    {
    firebase.child(tipo).child(año).child(mes).child(id).remove(
      error=>{
        if(error)console.log(error)
      });
    }
  }

  peticionGetGastos = async (año,mes) => {
    await firebase.child("gastos").child(año).child(mes).once("value", (gastos) => {
      if (gastos.val() !== null) {
          console.log("Llega de la base: "+gastos.val().toString())
        return gastos.val();
      } else {
          return []
      }
    });
  };

}

const firebaseService = new FirebaseService();

export default firebaseService;

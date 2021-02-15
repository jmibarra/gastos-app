import React, { Component } from "react";
import firebase from './../firebase';

class FirebaseUtils{

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
    if(window.confirm(`Estás seguro que deseas eliminar el canal ${formItem && formItem.canal}?`))
    {
    firebase.child(tipo).child(año).child(mes).child(id).remove(
      error=>{
        if(error)console.log(error)
      });
    }
  }

  petitionGetAvailableYears = () => {
    console.log(firebase.child("gastos").on("value", (key) => { return key.val()}));
  }

  peticionGet = (año,mes,tipo) => {
    firebase.child(año).child(mes).child(tipo).on("value", (motivo) => {
      if (motivo.val() !== null) {
        return (this.setState({ ...this.state.dataGastos, dataGastos: motivo.val() }))
      } else {
        return (this.setState({ dataGastos: [] }))
      }
    });
  };

}

const firebaseUtils = new FirebaseUtils();

export default firebaseUtils;

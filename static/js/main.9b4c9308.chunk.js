(this["webpackJsonpgastos-app"]=this["webpackJsonpgastos-app"]||[]).push([[0],{103:function(e,t,s){"use strict";s.r(t);var a=s(5),n=s.n(a),c=s(21),r=s.n(c),o=(s(72),s(25)),i=s.n(o),l=s(33),j=s(34),d=s(23),h=s(35),b=s(60),O=s(67),m=s(65),u=s(121),x=s(122),p=s(123),f=s(124),g=s(125),I=s(126),C=s(20),v=s(64).a.initializeApp({apiKey:"AIzaSyCl6Cum-zKYBZbw-68bRUr1_yyIZv_2Lck",authDomain:"gastos-2b065.firebaseapp.com",databaseURL:"https://gastos-2b065-default-rtdb.firebaseio.com",projectId:"gastos-2b065",storageBucket:"gastos-2b065.appspot.com",messagingSenderId:"683135440178",appId:"1:683135440178:web:ac212a786cd2f12927b32b"}).database().ref(),y=new function e(){Object(h.a)(this,e),this.peticionPost=function(e,t,s,a){v.child(a).child(t).child(s).push(e,(function(e){e&&console.log(e)}))},this.peticionPut=function(e,t,s,a,n){v.child(a).child(t).child(s).child(n).set(e,(function(e){e&&console.log(e)}))},this.peticionDelete=function(e,t,s,a,n){window.confirm("Est\xe1s seguro que deseas eliminar el elemento ".concat(e&&e.motivo,"?"))&&v.child(a).child(t).child(s).child(n).remove((function(e){e&&console.log(e)}))},this.peticionGetGastos=function(){var e=Object(l.a)(i.a.mark((function e(t,s){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.child("gastos").child(t).child(s).on("value",(function(e){return null!==e.val()?e.val():[]}));case 2:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}()},G=s(66),k=s(104),S=s(105),_=s(106),T=s(107),E=s(108),N=s(128),D=s(127),P=s(129),M=s(109),w=s(3),F=function(e){var t=Object(a.useState)(!1),s=Object(G.a)(t,2),n=s[0],c=s[1];return Object(w.jsx)("div",{children:Object(w.jsxs)(k.a,{color:"light",light:!0,expand:"md",children:[Object(w.jsxs)(S.a,{href:"/",children:["Gastos ",e.monthName," ",e.year," "]}),Object(w.jsx)(_.a,{onClick:function(){return c(!n)}}),Object(w.jsx)(T.a,{isOpen:n,navbar:!0,children:Object(w.jsxs)(E.a,{className:"navbar navbar-light",navbar:!0,children:[Object(w.jsxs)(N.a,{nav:!0,inNavbar:!0,children:[Object(w.jsx)(D.a,{nav:!0,caret:!0,children:"A\xf1o"}),Object(w.jsxs)(P.a,{right:!0,children:[Object(w.jsx)(M.a,{onClick:function(){return e.selectDate("2021",e.month)},children:"2021"}),Object(w.jsx)(M.a,{onClick:function(){return e.selectDate("2022",e.month)},children:"2022"}),Object(w.jsx)(M.a,{divider:!0}),Object(w.jsx)(M.a,{children:"Agregar a\xf1o"})]})]}),Object(w.jsxs)(N.a,{nav:!0,inNavbar:!0,children:[Object(w.jsx)(D.a,{nav:!0,caret:!0,children:"Mes"}),Object(w.jsxs)(P.a,{right:!0,children:[Object(w.jsx)(M.a,{onClick:function(){return e.selectDate(e.year,"01")},children:"Enero"}),Object(w.jsx)(M.a,{onClick:function(){return e.selectDate(e.year,"02")},children:"Febrero"}),Object(w.jsx)(M.a,{onClick:function(){return e.selectDate(e.year,"03")},children:"Marzo"}),Object(w.jsx)(M.a,{onClick:function(){return e.selectDate(e.year,"04")},children:"Abril"}),Object(w.jsx)(M.a,{onClick:function(){return e.selectDate(e.year,"05")},children:"Mayo"}),Object(w.jsx)(M.a,{onClick:function(){return e.selectDate(e.year,"06")},children:"Junio"}),Object(w.jsx)(M.a,{onClick:function(){return e.selectDate(e.year,"07")},children:"Julio"}),Object(w.jsx)(M.a,{onClick:function(){return e.selectDate(e.year,"08")},children:"Agosto"}),Object(w.jsx)(M.a,{onClick:function(){return e.selectDate(e.year,"09")},children:"Septiembre"}),Object(w.jsx)(M.a,{onClick:function(){return e.selectDate(e.year,"10")},children:"Octubre"}),Object(w.jsx)(M.a,{onClick:function(){return e.selectDate(e.year,"11")},children:"Noviembre"}),Object(w.jsx)(M.a,{onClick:function(){return e.selectDate(e.year,"12")},children:"Diciembre"})]})]})]})})]})})},A=s(111),$=s(112),z=s(110),B=function(e){switch(e.estado){case"Pendiente":return Object(w.jsx)(z.a,{href:"#",color:"secondary",children:e.estado});case"Estimado":return Object(w.jsx)(z.a,{href:"#",color:"warning",children:e.estado});case"Pago":return Object(w.jsx)(z.a,{href:"#",color:"success",children:e.estado});default:return Object(w.jsx)(z.a,{href:"#",color:"primary",children:e.estado})}},J=function(e){return Object(w.jsxs)(A.a,{children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Motivo"}),Object(w.jsx)("th",{children:"Fecha"}),Object(w.jsx)("th",{children:"Importe"}),Object(w.jsx)("th",{children:"Estado"}),Object(w.jsx)("th",{children:"Acciones"})]})}),Object(w.jsx)("tbody",{children:Object.keys(e.dataItem).map((function(t){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:e.dataItem[t].motivo}),Object(w.jsx)("td",{children:e.dataItem[t].fecha}),Object(w.jsxs)("td",{children:["$ ",e.dataItem[t].total]}),Object(w.jsx)("td",{children:Object(w.jsx)(B,{estado:e.dataItem[t].estado})}),Object(w.jsx)("td",{children:Object(w.jsxs)($.a,{children:[Object(w.jsxs)("button",{className:"btn btn-primary",onClick:function(){return e.seleccionarCanal(e.dataItem[t],t,"Editar",e.tipo)},children:[" ",Object(w.jsx)(C.b,{})]})," ","   ",Object(w.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.seleccionarCanal(e.dataItem[t],t,"Eliminar",e.tipo)},children:Object(w.jsx)(C.a,{})})]})})]},t)}))})]})},L=function(e){return Object(w.jsxs)(A.a,{hover:!0,children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Tarjeta"}),Object(w.jsx)("th",{children:"Fecha cierre"}),Object(w.jsx)("th",{children:"Fecha vencimiento"}),Object(w.jsx)("th",{children:"Importe"}),Object(w.jsx)("th",{children:"Estado"}),Object(w.jsx)("th",{children:"Acciones"})]})}),Object(w.jsx)("tbody",{children:Object.keys(e.dataItem).map((function(t){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:e.dataItem[t].motivo}),Object(w.jsx)("td",{children:e.dataItem[t].fecha_cierre}),Object(w.jsx)("td",{children:e.dataItem[t].fecha}),Object(w.jsxs)("td",{children:["$ ",e.dataItem[t].total]}),Object(w.jsx)("td",{children:Object(w.jsx)(B,{estado:e.dataItem[t].estado})}),Object(w.jsx)("td",{children:Object(w.jsxs)($.a,{children:[Object(w.jsxs)("button",{className:"btn btn-primary",onClick:function(){return e.seleccionarCanal(e.dataItem[t],t,"Editar",e.tipo)},children:[" ",Object(w.jsx)(C.b,{})]})," ","   ",Object(w.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.seleccionarCanal(e.dataItem[t],t,"Eliminar",e.tipo)},children:Object(w.jsx)(C.a,{})})]})})]},t)}))}),Object(w.jsx)("tfoot",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{colspan:"3",children:Object(w.jsx)("b",{children:"Total tarjetas de cr\xe9dito"})}),Object(w.jsx)("td",{colspan:"3",children:Object(w.jsxs)("b",{children:["$ ",e.totales]})})]})})]})},q=s(130),R=s(113),K=s(114),U=s(115),Y=s(116),Z=s(117),H=s(118),Q=s(119),V=s(63),W=s(120),X=(s(58),s(59),function(e){return Object(w.jsxs)(q.a,{isOpen:e.isOpen,children:[Object(w.jsx)(R.a,{children:e.title}),Object(w.jsx)(K.a,{children:Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Motivo: "}),Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"text",className:"form-control",name:"motivo",onChange:e.handleChange,required:!0}),Object(w.jsx)("br",{}),Object(w.jsxs)(U.a,{children:[Object(w.jsx)(Y.a,{for:"exampleDate",children:"Fecha:"}),Object(w.jsx)(Z.a,{type:"date",name:"fecha",id:"fecha",placeholder:"Fecha de gasto",onChange:e.handleChange})]}),Object(w.jsx)("label",{children:"Total: "}),Object(w.jsx)("br",{}),Object(w.jsxs)(H.a,{children:[Object(w.jsx)(Q.a,{addonType:"prepend",children:Object(w.jsx)(V.a,{children:"$"})}),Object(w.jsx)("input",{type:"text",className:"form-control",name:"total",onChange:e.handleChange})]}),Object(w.jsx)("br",{}),Object(w.jsx)("label",{children:"Estado: "}),Object(w.jsx)("br",{}),Object(w.jsxs)("select",{className:"form-control",name:"estado",onChange:e.handleChange,required:!0,children:[Object(w.jsx)("option",{value:"Estimado",selected:"selected",children:"Estimado"}),Object(w.jsx)("option",{value:"Pendiente",children:"Pendiente"}),Object(w.jsx)("option",{value:"Pago",children:"Pago"})]})]})}),Object(w.jsxs)(W.a,{children:[Object(w.jsx)("button",{className:"btn btn-primary",onClick:function(){return e.doPost(e.tipo)},children:"Insertar"}),"   ",Object(w.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.closeModal()},children:"Cancelar"})]})]})}),ee=function(e){return Object(w.jsxs)(q.a,{isOpen:e.isOpen,children:[Object(w.jsx)(R.a,{children:"Editar Registro"}),Object(w.jsx)(K.a,{children:Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Motivo: "}),Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"text",className:"form-control",name:"motivo",onChange:e.handleChange,value:e.formItem&&e.formItem.motivo}),Object(w.jsx)("br",{}),Object(w.jsxs)(U.a,{children:[Object(w.jsx)(Y.a,{for:"exampleDate",children:"Fecha:"}),Object(w.jsx)(Z.a,{type:"date",name:"fecha",id:"fecha",placeholder:"Fecha de gasto",value:e.formItem&&e.formItem.fecha,onChange:e.handleChange})]}),Object(w.jsx)("label",{children:"Total: "}),Object(w.jsx)("br",{}),Object(w.jsxs)(H.a,{children:[Object(w.jsx)(Q.a,{addonType:"prepend",children:Object(w.jsx)(V.a,{children:"$"})}),Object(w.jsx)("input",{type:"text",className:"form-control",name:"total",onChange:e.handleChange,value:e.formItem&&e.formItem.total})]}),Object(w.jsx)("br",{}),Object(w.jsx)("label",{children:"Estado: "}),Object(w.jsx)("br",{}),Object(w.jsxs)("select",{className:"form-control",name:"estado",onChange:e.handleChange,value:e.formItem&&e.formItem.estado,children:[Object(w.jsx)("option",{value:"Estimado",children:"Estimado"}),Object(w.jsx)("option",{value:"Pendiente",children:"Pendiente"}),Object(w.jsx)("option",{value:"Pago",children:"Pago"})]})]})}),Object(w.jsxs)(W.a,{children:[Object(w.jsx)("button",{className:"btn btn-primary",onClick:function(){return e.updateItem(e.elementoEdicion)},children:"Editar"}),"   ",Object(w.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.closeModal()},children:"Cancelar"})]})]})},te=function(e){Object(O.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(h.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={dataGastos:[],dataIngresos:[],dataGastosTC:[],elementoEdicion:"",modalInsertarGastos:!1,modalInsertarIngresos:!1,modalInsertarGastosTC:!1,modalEditar:!1,formItem:{motivo:"",fecha:"",fecha_cierre:"",total:"",estado:""},"a\xf1o":"",mes:"",mes_name:"",ingresos_mes:0,gastos_mes:0,gastos_tc_mes:0,ahorros_mes:0,id:0},e.doPost=function(t){y.peticionPost(e.state.formItem,e.state.a\u00f1o,e.state.mes,t),e.closeModal(),e.peticionGetGastos(e.state.a\u00f1o,e.state.mes),e.peticionGetIngresos(e.state.a\u00f1o,e.state.mes),e.peticionGetGastosTC(e.state.a\u00f1o,e.state.mes)},e.closeModal=function(){e.setState({modalInsertarIngresos:!1}),e.setState({modalInsertarGastos:!1}),e.setState({modalInsertarGastosTC:!1}),e.setState({modalEditar:!1})},e.updateItem=function(t){y.peticionPut(e.state.formItem,e.state.a\u00f1o,e.state.mes,t,e.state.id),e.setState({modalEditar:!1})},e.peticionGetGastos=function(t,s){v.child("gastos").child(t).child(s).on("value",(function(t){null!==t.val()?(e.setState(Object(d.a)(Object(d.a)({},e.state.dataGastos),{},{dataGastos:t.val()})),e.calcularGastosTotales(t.val())):(e.setState({dataGastos:[]}),e.setState({gastos_mes:0}))}))},e.peticionGetGastosTC=function(t,s){v.child("tc").child(t).child(s).on("value",(function(t){null!==t.val()?(e.setState(Object(d.a)(Object(d.a)({},e.state.dataGastosTC),{},{dataGastosTC:t.val()})),e.calcularGastosTCTotales(t.val())):(e.setState({dataGastosTC:[]}),e.setState({gastos_tc_mes:0}))}))},e.peticionGetIngresos=function(t,s){v.child("ingresos").child(t).child(s).on("value",(function(t){null!==t.val()?(e.setState(Object(d.a)(Object(d.a)({},e.state.dataIngresos),{},{dataIngresos:t.val()})),e.calcularIngresosTotales(t.val())):(e.setState({dataIngresos:[]}),e.setState({ingresos_mes:0}))}))},e.calcularIngresosTotales=function(t){var s=0;Object.keys(t).map((function(e){s+=parseInt(t[e].total)})),e.setState({ingresos_mes:s})},e.calcularGastosTotales=function(t){var s=0;Object.keys(t).map((function(e){s+=parseInt(t[e].total)})),e.setState({gastos_mes:s})},e.calcularGastosTCTotales=function(t){var s=0;Object.keys(t).map((function(e){s+=parseInt(t[e].total)})),e.setState({gastos_tc_mes:s})},e.selectDate=function(t,s){e.setState({"a\xf1o":t}),e.setState({mes:s}),e.setState({mes_name:e.getMonthName(s)}),e.peticionGetGastos(t,s),e.peticionGetIngresos(t,s),e.peticionGetGastosTC(t,s)},e.getMonthName=function(e){return["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"][parseInt(e,10)-1]},e.handleChange=function(t){e.setState({formItem:Object(d.a)(Object(d.a)({},e.state.formItem),{},Object(j.a)({},t.target.name,t.target.value))})},e.seleccionarCanal=function(){var t=Object(l.a)(i.a.mark((function t(s,a,n,c){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({formItem:s,id:a});case 2:"Editar"===n?e.setState({modalEditar:!0,elementoEdicion:c}):y.peticionDelete(e.state.formItem,e.state.a\u00f1o,e.state.mes,c,e.state.id);case 3:case"end":return t.stop()}}),t)})));return function(e,s,a,n){return t.apply(this,arguments)}}(),e}return Object(b.a)(s,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,s,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new Date,s=String(t.getMonth()+1).padStart(2,"0"),a=t.getFullYear(),this.selectDate(a,s);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsxs)(u.a,{fluid:!0,children:[Object(w.jsx)(x.a,{children:Object(w.jsx)(p.a,{children:Object(w.jsx)(F,{year:this.state.a\u00f1o,month:this.state.mes,monthName:this.state.mes_name,selectDate:this.selectDate})})}),Object(w.jsxs)(x.a,{className:"p-3 bg-dark my-2 rounded",children:[Object(w.jsx)(p.a,{xs:"6",sm:"4",children:Object(w.jsxs)(f.a,{children:[Object(w.jsx)(g.a,{children:Object(w.jsx)("h3",{children:"Ingresos"})}),Object(w.jsx)(I.a,{children:Object(w.jsxs)("h3",{children:["$ ",this.state.ingresos_mes]})})]})}),Object(w.jsx)(p.a,{xs:"6",sm:"4",children:Object(w.jsxs)(f.a,{children:[Object(w.jsx)(g.a,{children:Object(w.jsx)("h3",{children:" Gastos "})}),Object(w.jsxs)(I.a,{children:[Object(w.jsxs)("h3",{children:[" $ ",this.state.gastos_mes," "]})," ",Object(w.jsx)("br",{}),Object(w.jsxs)("h3",{children:[" $ ",this.state.gastos_tc_mes," (TC)"]}),Object(w.jsx)("hr",{}),Object(w.jsxs)("h3",{children:[" $ ",parseInt(this.state.gastos_tc_mes)+parseInt(this.state.gastos_mes)]})]})]})}),Object(w.jsxs)(p.a,{xs:"6",sm:"4",children:[Object(w.jsxs)(f.a,{children:[Object(w.jsx)(g.a,{children:Object(w.jsx)("h3",{children:"Sobrante"})}),Object(w.jsx)(I.a,{children:Object(w.jsxs)("h3",{children:[" $ ",parseInt(this.state.ingresos_mes)-parseInt(this.state.gastos_tc_mes)+parseInt(this.state.gastos_mes)," "]})})]}),Object(w.jsxs)(f.a,{children:[Object(w.jsx)(g.a,{children:Object(w.jsx)("h3",{children:"Ahorros"})}),Object(w.jsx)(I.a,{children:Object(w.jsxs)("h3",{children:[" $ ",this.state.ahorros_mes," "]})})]})]})]}),Object(w.jsxs)(x.a,{children:[Object(w.jsxs)(p.a,{xs:"6",children:[Object(w.jsxs)("h1",{children:[" Ingresos ",Object(w.jsx)("button",{className:"btn btn-success",onClick:function(){return e.setState({modalInsertarIngresos:!0})},children:Object(w.jsx)(C.c,{})})," "]}),Object(w.jsx)(J,{dataItem:this.state.dataIngresos,tipo:"ingresos",seleccionarCanal:this.seleccionarCanal})]}),Object(w.jsxs)(p.a,{xs:"6",children:[Object(w.jsxs)("h1",{children:[" Gastos ",Object(w.jsx)("button",{className:"btn btn-success",onClick:function(){return e.setState({modalInsertarGastos:!0})},children:Object(w.jsx)(C.c,{})})," "]}),Object(w.jsx)(J,{dataItem:this.state.dataGastos,tipo:"gastos",seleccionarCanal:this.seleccionarCanal})]})]}),Object(w.jsx)(x.a,{children:Object(w.jsxs)(p.a,{sm:"12",md:{size:8,offset:2},children:[Object(w.jsxs)("h1",{children:[" Gastos Tarjeta de cr\xe9dito ",Object(w.jsx)("button",{className:"btn btn-success",onClick:function(){return e.setState({modalInsertarGastosTC:!0})},children:Object(w.jsx)(C.c,{})})," "]}),Object(w.jsx)(L,{dataItem:this.state.dataGastosTC,totales:this.state.gastos_tc_mes,tipo:"tc",seleccionarCanal:this.seleccionarCanal})]})})]}),Object(w.jsx)(X,{isOpen:this.state.modalInsertarIngresos,title:"Insertar Ingresos",tipo:"ingresos",handleChange:this.handleChange,doPost:this.doPost,closeModal:this.closeModal}),Object(w.jsx)(X,{isOpen:this.state.modalInsertarGastos,title:"Insertar gastos",tipo:"gastos",handleChange:this.handleChange,doPost:this.doPost,closeModal:this.closeModal}),Object(w.jsx)(X,{isOpen:this.state.modalInsertarGastosTC,title:"Insertar gastos TC",tipo:"tc",handleChange:this.handleChange,doPost:this.doPost,closeModal:this.closeModal}),Object(w.jsx)(ee,{isOpen:this.state.modalEditar,handleChange:this.handleChange,formItem:this.state.formItem,updateItem:this.updateItem,elementoEdicion:this.state.elementoEdicion,closeModal:this.closeModal})]})}}]),s}(a.Component),se=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,131)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),c(e),r(e)}))};r.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(te,{})}),document.getElementById("root")),se()},72:function(e,t,s){}},[[103,1,2]]]);
//# sourceMappingURL=main.9b4c9308.chunk.js.map
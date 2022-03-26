import { 
    Modal, 
    ModalBody, 
    ModalHeader, 
    ModalFooter,
    FormGroup, 
    Label, 
    Input,
    InputGroup,
    InputGroupText 
} from "reactstrap";
import firebaseUtils from "../../../utils/FirebaseUtils";


const EditModalComponent = (props) => {

    const updateItem = () => {
        firebaseUtils.peticionPut(props.formItem,props.year,props.month,props.tipo,props.formItemId);
        props.closeModal();
    }

    return(
        <Modal isOpen={props.isOpen}>
            <ModalHeader>Editar Registro</ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Motivo: </label>
              <br />
              <input type="text" className="form-control" name="motivo" onChange={props.handleUpdateChange} value={props.formItem && props.formItem.motivo}/>
              <br />
              <FormGroup>
                <Label for="exampleDate">Fecha:</Label>
                <Input
                  type="date"
                  name="fecha"
                  id="fecha"
                  placeholder="Fecha de gasto"
                  value={props.formItem && props.formItem.fecha}
                  onChange={props.handleUpdateChange}
                />
              </FormGroup>
              <label>Total: </label>
              <br />
              <InputGroup>
                <InputGroupText>$</InputGroupText>
                <input type="text" className="form-control" name="total" onChange={props.handleUpdateChange} value={props.formItem && props.formItem.total}/>
              </InputGroup>
              <br />
              <label>Estado: </label>
              <br />
              <select className="form-control" name="estado" onChange={props.handleUpdateChange} value={props.formItem && props.formItem.estado}>
                    <option value="" selected="selected">Elegir un estado...</option>
                    <option value="Estimado">Estimado</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Pago">Pago</option>
              </select>
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={()=>updateItem()}>Editar</button>{"   "}
            <button className="btn btn-danger" onClick={()=>props.closeModal()}>Cancelar</button>
          </ModalFooter>
        </Modal>
    )

}

export default EditModalComponent;



    
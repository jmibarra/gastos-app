import { 
    Form,
    FormGroup, 
    Label, 
    Input,
    InputGroup, 
    InputGroupText 

} from "reactstrap";

const TCForm = ({handleChange,formItem}) => {
  return (
    <>
        <Form>
            <FormGroup floating>
                <Input
                    id="motivo"
                    name="motivo"
                    placeholder="Motivo"
                    type="text"
                    onChange={handleChange}
                    value={formItem && formItem.motivo}
                    required
                />
                <Label for="motivo">
                    Motivo
                </Label>
            </FormGroup>
            <FormGroup floating>
                <Input
                    id="fecha"
                    name="fecha"
                    placeholder="date placeholder"
                    type="date"
                    value={formItem && formItem.fecha}
                    onChange={handleChange}
                />
                <Label for="fecha">
                    Fecha
                </Label>
            </FormGroup>
            <FormGroup floating>
                <Label for="total">
                    Total
                </Label>
                <InputGroup>
                    <InputGroupText>$</InputGroupText>
                    <Input
                        id="total"
                        name="total"
                        type="text"
                        placeholder='Total'
                        value={formItem && formItem.total}
                        onChange={handleChange}
                    />
                </InputGroup>

            </FormGroup>
            <FormGroup>
                <Label for="estado">
                    Estado
                </Label>
                <Input
                id="estado"
                name="estado"
                type="select"
                value={formItem && formItem.estado}
                onChange={handleChange}
                >
                    <option>
                        Estimado
                    </option>
                    <option>
                        Pendiente
                    </option>
                    <option>
                        Pago
                    </option>
                </Input>

            </FormGroup>
        </Form>
    </>
  )
}

export default TCForm
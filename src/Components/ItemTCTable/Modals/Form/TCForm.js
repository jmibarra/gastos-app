import { 
    Form,
    FormGroup, 
    Label, 
    Input,
    InputGroup, 
    InputGroupText 

} from "reactstrap";

const TCForm = ({handleChange}) => {
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
                    required
                />
                <Label for="motivo">
                    Motivo
                </Label>
            </FormGroup>
            <FormGroup floating>
                <Input
                    id="fecha-cierre"
                    name="fecha_cierre"
                    placeholder="date placeholder"
                    type="date"
                    onChange={handleChange}
                />
                <Label for="fecha-cierre">
                    Fecha de cierre
                </Label>
            </FormGroup>
            <FormGroup floating>
                <Input
                    id="fecha"
                    name="fecha"
                    placeholder="date placeholder"
                    type="date"
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
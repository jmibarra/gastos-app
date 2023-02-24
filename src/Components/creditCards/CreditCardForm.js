import React from 'react'
import "./css/credit-card.css";
import "./css/form-style.css";
import Cards from "react-credit-cards-2"
import 'react-credit-cards-2/es/styles-compiled.css';

const CreditCardForm = ({formData,setFormData}) => {

    const handleInputFocus = (evt) => {
        setFormData((prev) => ({ ...prev, focus: evt.target.name }));
    }

    //function to handle  input and update the state of variable
    const handleInputChange = (e) => {
        const { name, id, value } = e.target;

        if (id === "cardHolder") {
            var ele = document.getElementById(id);
            //if user enters any invalid characters it gets replaced
            ele.value = ele.value.replace(
                /[}"`~_=.\->\]|<?+*/,\d;[:{\\!@#/'$%^&*()]/g, 
                ""
            );
            setFormData({
                ...formData,
                [name]: ele.value
            })

        } else{
            setFormData({
                ...formData,
                [name]: value
            })
        }
    };

    const addSpace = (e) => {
        const { value, id } = e.target;
        var ele = document.getElementById(id);
        if (value.length === 4 || value.length === 9 || value.length === 14)
          ele.value = ele.value.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
    };

    const  validateInput = (e) => {
        const { name, value} = e.target;
    
          //if user enters any invalid characters it gets replaced
          let newValue = value.replace(
            /[A-Za-z}"`~_=.\->\]|<?+*/,;[:{\\!@#/'$%^&*()]/g,
            ""
          );
          setFormData({
            ...formData,
            [name]: newValue
          })
        
      };
    
    return (
        <>
            <div className="credit-card ">
                <Cards
                        locale={{ valid: "Expira" }}
                        placeholders={{ name: "ALIAS TC" }}
                        expiry={formData && formData.expiry+"/"+formData.expiryyear}
                        focused={formData && formData.focus}
                        name={formData && formData.alias}
                        number={formData && formData.number}
                    />
            </div>
            <div className="card">
                <form className="payment-form">
                    <div className="form-group">
                        <label htmlFor="cardNumber" className="card-label">
                            Número
                        </label>
                        <input
                            type="text"
                            onChange={validateInput}
                            value={formData && formData.number}
                            onPaste={(e) => e.preventDefault()}
                            onKeyPress={addSpace}
                            onFocus={handleInputFocus}
                            name="number"
                            maxLength="19"
                            id="cardNumber"
                            className="form-control form-control-lg"
                        />
                    </div>
                    <div className="form-group">
                    <label htmlFor="cardHolder" className="card-label">
                        Alias
                    </label>
                    <input
                        type="text"
                        name="alias"
                        spellCheck="false"
                        value={formData && formData.alias}
                        maxLength="25"
                        autoComplete="off"
                        onPaste={(e) => e.preventDefault()}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        id="cardHolder"
                        className="form-control form-control-lg"
                    />
                    </div>
                    <div className="expiry-class">
                        <div className="form-group card-month ">
                            <label htmlFor="cardMonth" className="card-label">
                                Vencimiento
                            </label>
                            <select
                                id="cardMonth"
                                data-ref="cardDate"
                                value={formData && formData.expiry}
                                name="expiry"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                className="form-control form-control-lg"
                            >
                                <option value="" defaultChecked="true">
                                Mes
                                </option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div className="form-group card-year">
                            <select
                                id="cardYear"
                                data-ref="cardDate"
                                value={formData && formData.expiryyear}
                                name="expiryyear"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                className="form-control form-control-lg"
                            >
                                <option value="" defaultChecked="true">
                                Año
                                </option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                                <option value="2031">2031</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreditCardForm
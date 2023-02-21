import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconManager from '../../../utils/IconManager';

const ItemCategorySelector = (props) => {

  const [iconName, setIconName] = useState(props.formItem && props.formItem.categoria);

  const icon = IconManager.icons[iconName];

  const handleCategoriaSeleccionada = (event) => {
    setIconName(event.target.value);
    props.handleChange(event)
  };

  return (
    <div>
      <div className="input-group">
        <span className="input-group-text">
          <FontAwesomeIcon icon={icon} />
        </span>
        <select
          className="form-select"
          id="categoria"
          name="categoria"
          placeholder="categoria placeholder"
          type="date"
          value={props.formItem && props.formItem.categoria}
          onChange={handleCategoriaSeleccionada}
        >
          { !props.formItem && (<option value="">Seleccione una opción</option>)}
          {Object.keys(IconManager.icons).map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ItemCategorySelector;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconManager from '../../../utils/IconManager';

const ItemCategorySelector = (props) => {
  const [categorias, setCategorias] = useState([
    { id: 1, nombre: 'Comida' },
    { id: 2, nombre: 'Transporte'},
    { id: 3, nombre: 'Entretenimiento'},
    { id: 4, nombre: 'Ropa' },
  ]);

  const [iconName, setIconName] = useState("faList");

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
          <option value="">Seleccione una opción</option>
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.nombre}>
              {categoria.nombre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ItemCategorySelector;

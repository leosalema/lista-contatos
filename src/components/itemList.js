import React from 'react';
import '../styles/list.css';

export default props => (
  <tr>
    <th scope="row">{props.index + 1}</th>
    <td className="itemList">{props.contato.nome}</td>
    <td className="itemList">{props.contato.canal}</td>
    <td className="itemList">{props.contato.valor}</td>
    <td className="itemList">{props.contato.obs}</td>
    <td className="itemList" onClick={() => props.clickEdit(props.contato.id)}>
      <i className="fa fa-edit"/>
    </td>
    <td className="itemList" onClick={() => props.clickDelete(props.contato.id)}>
      <i className="fa fa-trash" />
    </td>
  </tr>
);

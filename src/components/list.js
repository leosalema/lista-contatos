import React from 'react';
import ItemList from './itemList';
import '../styles/list.css'

export default props => (
  <table className='table table-striped'>
    <thead>
      <tr>
        <th className='listName' scope='col'>#</th>
        <th className='listName' scope='col' onClick={props.handleName}>Nome</th>
        <th className='listName' scope='col' onClick={props.handleCanal}>Canal</th>
        <th className='listName' scope='col'>Valor</th>
        <th className='listName' scope='col'>Obs</th>
        <th className='listName' scope='col'></th>
        <th className='listName' scope='col'></th>
      </tr>
    </thead>
    <tbody>
        {props.contatos.map((contato, index) => (
            <ItemList key={index} contato={contato} index={index}
                clickEdit={id => props.handleEdit(id)}
                clickDelete={id => props.handleDelete(id)}
            />
        ))}
    </tbody>
  </table>
);

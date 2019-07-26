import React from 'react';

export default props => (
  <form>
    <div className="form-row align-items-center">
      <div className="col-xl-6 col-sm-12">
        <label className="sr-only" htmlFor="name">Nome do Contato</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Digite o nome completo"
          autoFocus
          onChange={value => props.handleChangeName (value)}
          value={props.nameValue}
        />
      </div>
      <div className="col-xl-3 col-sm-12">
        <label className="sr-only" htmlFor="canal">Tipo de Contato</label>
        <select
          className="custom-select"
          id="canal"
          onChange={value => props.handleChangeSelect (value)}
          value={props.selectValue}
        >
          <option />
          <option>e-mail</option>
          <option>Telefone Celular</option>
          <option>Telefone Fixo</option>
        </select>
      </div>
      <div className="col-xl-3 col-sm-12">
        {props.selectValue === 'e-mail'
          ? <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Digite o email"
                onChange={value => props.handleChangeValue (value)}
                value={props.myValue}
              />
            </div>
          : <div />}
        {props.selectValue === 'Telefone Celular'
          ? <div>
              <label className="sr-only" htmlFor="valor">Telefone</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Digite o telefone"
                onChange={value => props.handleChangeValue (value)}
                value={props.myValue}
              />
            </div>
          : <div />}
        {props.selectValue === 'Telefone Fixo'
          ? <div>
              <label className="sr-only" htmlFor="valor">Telefone</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Digite o telefone"
                onChange={value => props.handleChangeValue (value)}
                value={props.myValue}
              />
            </div>
          : <div />}
      </div>
      <div className="col-xl-11 col-sm-12">
        <label className="sr-only" htmlFor="obs">Nome do Contato</label>
        <input
          type="text"
          className="form-control"
          id="obs"
          placeholder="Digite alguma observação"
          onChange={value => props.handleChangeObs (value)}
          value={props.obsValue}
        />
      </div>
      <div className="col-auto my-5">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => props.handleSubmit ()}
        >
          Salvar
        </button>
      </div>
    </div>
  </form>
);

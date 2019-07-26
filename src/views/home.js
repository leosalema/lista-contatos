import React, {Component} from 'react';
import axios from 'axios';
import List from '../components/list';
import Form from '../components/formContact';
import '../styles/home.css';

const URL_BASE = 'http://localhost:4000/contatos';

class Home extends Component {
  state = {
    contatos: [],
    selectValue: '',
    contato: {id: null, nome: '', canal: '', valor: '', obs:''},
  };

  componentDidMount () {
    this.getList ();
  }

  getList () {
    axios.get (URL_BASE).then (resp => {
      this.handleAlphabeticalOrder (resp.data);
    });
  }

  handleAlphabeticalOrder = value => {
    const contatos = value.sort (function (nomeA, nomeB) {
      return nomeA.nome > nomeB.nome ? 1 : -1;
    });
    this.setState ({
      contatos,
      contato: {id: null, nome: '', canal: '', valor: '', obs:''},
    });
  };

  handleCanalOrder = value => {
    const contatos = value.sort (function (nomeA, nomeB) {
      if (nomeA.nome > nomeB.nome && nomeA.canal < nomeB.canal) return -1;
      else return 1;
    });
    this.setState ({
      contatos,
      contato: {id: null, nome: '', canal: '', valor: '', obs:''},
    });
  };

  handleEdit = id => {
    const contato = this.state.contatos.filter (contato => contato.id === id);
    this.setState ({contato: contato[0], selectValue: contato[0].canal});
  };

  handleDelete = id => {
    if (window.confirm ('Você realmente deseja excluir esse registro?')) {
      const contatos = this.state.contatos.filter (
        contato => contato.id !== id
      );
      axios.delete (`${URL_BASE}/${id}`);
      this.setState ({contatos});
    }
  };

  handleName = event =>
    this.setState ({
      contato: {...this.state.contato, nome: event.target.value},
    });

  handleSelect = event =>
    this.setState ({
      selectValue: event.target.value,
      contato: {...this.state.contato, canal: event.target.value},
    });

  handleValue = event =>
    this.setState ({
      contato: {...this.state.contato, valor: event.target.value},
    });

  handleObs = event =>
    this.setState ({contato: {...this.state.contato, obs: event.target.value}});

  handleSubmit () {
    if (this.state.contato.nome === '' || this.state.contato.valor === '')
      alert ('É necessário que você digite o nome do contato');
    else {
      if (this.state.contato.id === null)
        axios
          .post (URL_BASE, this.state.contato, {
            headers: {Accept: 'application/json'},
          })
          .then(res => this.getList())
          .catch (error => alert ('Erro ao tentar gravar o registro!'));
      else
        axios.put(`${URL_BASE}/${this.state.contato.id}`, this.state.contato, {headers: {Accept: 'application/json'}})
          .then(res => this.getList())
          .catch (error => alert ('Erro ao tentar gravar o registro!'));
      
    }
  }

  render () {
    const {contatos, selectValue, contato} = this.state;
    return (
      <div className="container">
        <header className="blog-header py-3">
          <h1>Lista de Contatos</h1>
        </header>
        <div className="row">
          <div className="col-xs-12 col-sm-offset-3 col-sm-12">
            <div className="panel-heading c-controls">
              <Form
                handleChangeName={event => this.handleName (event)}
                nameValue={contato.nome}
                handleChangeSelect={event => this.handleSelect (event)}
                selectValue={selectValue}
                handleChangeValue={event => this.handleValue (event)}
                myValue={contato.valor}
                handleChangeObs={event => this.handleObs (event)}
                obsValue={contato.obs}
                handleSubmit={() => this.handleSubmit ()}
              />
            </div>
            <List
              handleName={() => this.handleAlphabeticalOrder (contatos)}
              handleCanal={() => this.handleCanalOrder (contatos)}
              handleEdit={id => this.handleEdit (id)}
              handleDelete={id => this.handleDelete (id)}
              contatos={contatos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

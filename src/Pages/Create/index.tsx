// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { FormEvent } from 'react';
import { bindActionCreators } from 'redux';
import { actions } from '../../store/actions/index';
import { useDispatch, useSelector } from 'react-redux';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Input } from '../../components/Input';
import { NamePage } from '../../components/NamePage';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import './kk.css';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IMockData, RootStateType, separateObject } from '../../store/types';
import { typingType } from './types';

export const Create = () => {
  const information: IMockData = useSelector(
    (state: RootStateType) => state.reducer,
  );

  const [name, setName] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');

  const handleChange = {
    actionName: ({ target }: typingType) => setName(target.value),
    actionCpf: ({ target }: typingType) => setCpf(target.value),
    actionCity: ({ target }: typingType) => setCity(target.value),
    actionState: ({ target }: typingType) => setState(target.value),
  };

  const dispatch = useDispatch();
  const { create } = bindActionCreators(actions, dispatch);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const person: separateObject = {
      name: name,
      cpf: cpf,
      city: city,
      state: state,
      id: `${information.person.length + 1}`,
    };

    create(person);

    setName('');
    setCpf('');
    setCity('');
    setState('');
  };

  return (
    <div>
      <NamePage title="Create" />



        <form onSubmit={handleSubmit}>
        <Input
          name="Name: "
          value={name}
          onChange={handleChange.actionName}
        />

        <Input
          name="CPF: "
          value={cpf}
          onChange={handleChange.actionCpf}
        />

        <Input
          name="City: "
          value={city}
          onChange={handleChange.actionCity}
        />

        <Input
          name="State: "
          value={state}
          onChange={handleChange.actionState}
        />

        <button type="submit">Salvar</button>
      </form> 
    </div>
  );
};

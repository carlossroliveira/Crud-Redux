// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { FormEvent } from 'react';
import { bindActionCreators } from 'redux';
import { useNavigate } from 'react-router-dom';
import { actions } from '../../store/actions/index';
import { useDispatch, useSelector } from 'react-redux';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { NamePage } from '../../components/NamePage';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './create.module.scss';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { typingType } from './types';
import { IMockData, RootStateType, separateObject } from '../../store/types';
import { Toast } from '../../function/Toast';

export const Create = () => {
  const NAVIGATION = useNavigate();

  const information: IMockData = useSelector(
    (state: RootStateType) => state.reducer,
  );

  const [name, setName] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');

  const handleChange = {
    actionName: ({ target }: typingType) => setName(target.value),
    actionCep: ({ target }: typingType) => setCep(target.value),
    actionCity: ({ target }: typingType) => setCity(target.value),
    actionState: ({ target }: typingType) => setState(target.value),
  };

  const dispatch = useDispatch();
  const { create } = bindActionCreators(actions, dispatch);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const person: separateObject = {
      name: name,
      cep: cep,
      city: city,
      state: state,
      id: `${information.person.length + 1}`,
    };

    create(person);

    setName('');
    setCep('');
    setCity('');
    setState('');

    Toast(3000, 'success', 'Registration done');

    setTimeout(() => {
      NAVIGATION('/');
    }, 3000);
  };

  return (
    <div className={styles.div}>
      <NamePage title="Create" />

      <form onSubmit={handleSubmit}>
        <section className={styles.section__main}>
          <div className={styles.div__main}>
            <Input
              name="Name: "
              value={name}
              onChange={handleChange.actionName}
            />
            <Input name="CEP: " value={cep} onChange={handleChange.actionCep} />
          </div>

          <div className={styles.div__main}>
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
          </div>
        </section>

        <Button text="Save" />
      </form>
    </div>
  );
};

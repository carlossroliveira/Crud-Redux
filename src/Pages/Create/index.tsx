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

import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
export const Create = () => {
  const NAVIGATION = useNavigate();

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

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Registration done',
    });

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
            <Input name="CPF: " value={cpf} onChange={handleChange.actionCpf} />
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

        <Button text="Salvar" />
      </form>
    </div>
  );
};

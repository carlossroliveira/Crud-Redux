// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { NamePage } from '../../components/NamePage';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './updateList.module.scss';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IMockData, RootStateType } from '../../store/types';
import { bindActionCreators } from 'redux';
import { actions } from '../../store/actions';
import { typingType } from '../Create/types';

export const UpdateList = () => {
  const params = useParams();

  const information: IMockData = useSelector(
    (state: RootStateType) => state.reducer,
  );

  const dispatch = useDispatch();
  const { edit } = bindActionCreators(actions, dispatch);

  const [name, setName] = useState('');
  const [cep, setCep] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleChange = {
    actionName: ({ target }: typingType) => setName(target.value),
    actionCep: ({ target }: typingType) => setCep(target.value),
    actionCity: ({ target }: typingType) => setCity(target.value),
    actionState: ({ target }: typingType) => setState(target.value),
  };

  const selectPerson = information.person?.find(
    (item) => item.id === params.id,
  );

  useEffect(() => {
    if (selectPerson) {
      setName(selectPerson?.name as any);
      setCep(selectPerson?.cep as any);
      setCity(selectPerson?.city as any);
      setState(selectPerson?.state as any);
    }
  }, [selectPerson]);

  const handleOnSubmit = (event: any) => {
    event.preventDefault();

    const data = {
      name: name,
      cep: cep,
      city: city,
      state: state,
      id: params.id,
    };

    edit(data);
  };

  return (
    <>
      <NamePage title="Update" />

      <section className={styles.section}>
        <form onSubmit={handleOnSubmit}>
          <div className={styles.div}>
            <Input
              name="Name: "
              value={name}
              onChange={handleChange.actionName}
            />

            <Input name="CEP: " value={cep} onChange={handleChange.actionCep} />

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
            <Button className={styles.button} text="Edit" />
          </div>
        </form>
      </section>
    </>
  );
};

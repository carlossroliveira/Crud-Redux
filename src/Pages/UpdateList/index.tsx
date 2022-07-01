// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { FormEvent, SetStateAction, useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { useNavigate, useParams } from 'react-router-dom';
import { actions } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Toast } from '../../function/Toast';
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
import { typingType } from '../Create/types';
import { IMockData, RootStateType, separateObject } from '../../store/types';

export const UpdateList = () => {
  const params = useParams();
  const NAVIGATION = useNavigate();

  const information: IMockData = useSelector(
    (state: RootStateType) => state.reducer,
  );

  const dispatch = useDispatch();
  const { editItem } = bindActionCreators(actions, dispatch);

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

  useEffect(() => {
    const selectPerson: separateObject | undefined = information.person?.find(
      (item) => item.id === params.id,
    );

    if (selectPerson) {
      setName(selectPerson?.name as SetStateAction<string>);
      setCep(selectPerson?.cep as SetStateAction<string>);
      setCity(selectPerson?.city as SetStateAction<string>);
      setState(selectPerson?.state as SetStateAction<string>);
    }
  }, []);

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();

    const data: separateObject = {
      name: name,
      cep: cep,
      city: city,
      state: state,
      id: params.id,
    };

    editItem(data);

    Toast(3000, 'success', 'Edit done');

    setTimeout(() => {
      NAVIGATION('/');
    }, 3000);
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

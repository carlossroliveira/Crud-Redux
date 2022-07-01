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
import styles from './deleteList.module.scss';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { typingType } from '../Create/types';
import { IMockData, RootStateType, separateObject } from '../../store/types';

export const DeleteList = () => {
  const params = useParams();
  const NAVIGATION = useNavigate();

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

    edit(data);

    Toast(3000, 'success', 'Deleted data');

    setTimeout(() => {
      NAVIGATION('/');
    }, 3000);
  };

  return (
    <>
      <NamePage title="Delete" />

      <div className={styles.div__main}>
        <section className={styles.section__main}>
          <div className={styles.div__primary}>
            <div>
              <span className={styles.id__span__key}>Id:</span>
              <span className={styles.id__span}>{Number(params?.id) + 1}</span>
            </div>
          </div>

          <div>
            <div className={styles.div__primary}>
              <div>
                <span className={styles.id__span__key}>Nome:</span>
                <span className={styles.id__span}>{name}</span>
              </div>

              <div>
                <span className={styles.id__span__key}>CEP:</span>
                <span className={styles.id__span}>{cep}</span>
              </div>
            </div>

            <div className={styles.div__primary}>
              <div>
                <span className={styles.id__span__key}>City:</span>
                <span className={styles.id__span}>{city}</span>
              </div>

              <div>
                <span className={styles.id__span__key}>State:</span>
                <span className={styles.id__span}>{state}</span>
              </div>
            </div>
          </div>

          <Button className={styles.button} text="Delete" />
        </section>
      </div>
    </>
  );
};

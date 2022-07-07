// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { FormEvent, SetStateAction, useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { actions } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Toast } from '../../function/Toast';
import { Button } from '../../components/Button';
import { NamePage } from '../../components/NamePage';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './deleteList.module.scss';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IMockData, RootStateType, separateObject } from '../../store/types';

export const DeleteList = () => {
  const params = useParams();
  const NAVIGATION = useNavigate();

  const information: IMockData = useSelector(
    (state: RootStateType) => state.reducer,
  );

  const dispatch = useDispatch();
  const { deleteItem } = bindActionCreators(actions, dispatch);

  const [name, setName] = useState<string>('');
  const [zipCode, setzipCode] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');

  useEffect(() => {
    const selectPerson: separateObject | undefined = information.person?.find(
      (item) => item.id === params.id,
    );

    if (selectPerson) {
      setName(selectPerson?.name as SetStateAction<string>);
      setzipCode(selectPerson?.zipCode as SetStateAction<string>);
      setCity(selectPerson?.city as SetStateAction<string>);
      setState(selectPerson?.state as SetStateAction<string>);
    }
  }, []);

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();

    const data: separateObject = {
      name: name,
      zipCode: zipCode,
      city: city,
      state: state,
      id: params.id,
    };

    deleteItem(data);

    Toast(3000, 'success', 'Deleted data');

    setTimeout(() => {
      NAVIGATION('/');
    }, 3000);
  };

  return (
    <>
      <NamePage title="Delete" />

      <form onSubmit={handleOnSubmit}>
        <div className={styles.div__main}>
          <section className={styles.section__main}>
            <div className={styles.div__primary}>
              <div>
                <span className={styles.id__span__key}>Id:</span>
                <span className={styles.id__span}>
                  {Number(params?.id) + 1}
                </span>
              </div>
            </div>

            <div>
              <div className={styles.div__primary}>
                <div>
                  <span className={styles.id__span__key}>Nome:</span>
                  <span className={styles.id__span}>{name}</span>
                </div>

                <div>
                  <span className={styles.id__span__key}>ZipCode:</span>
                  <span className={styles.id__span}>{zipCode}</span>
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

            <Button text="Delete" className={styles.button} />
          </section>
        </div>
      </form>
    </>
  );
};

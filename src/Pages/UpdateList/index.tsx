// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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

export const UpdateList = () => {
  const params = useParams();

  const [person, setPerson] = useState<any>();

  const information: IMockData = useSelector(
    (state: RootStateType) => state.reducer,
  );

  useEffect(() => {
    const selectPerson = information.person?.find(
      (item) => item.id === params.id,
    );
    setPerson(selectPerson);
  }, []);

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    console.log('handleOnSubmit', event);
  };

  return (
    <>
      <NamePage title="Update" />

      <section className={styles.section}>
        <form onSubmit={handleOnSubmit}>
          <div className={styles.div}>
            <Input name="Name: " value={person?.name} />
            <Input name="CEP: " value={person?.cep} />
            <Input name="City: " value={person?.city} />
            <Input name="State: " value={person?.state} />
            <Button className={styles.button} text="Edit" />
          </div>
        </form>
      </section>
    </>
  );
};

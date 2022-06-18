// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiEdit, FiSave, FiTrash2 } from 'react-icons/fi';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { NamePage } from '../../components/NamePage';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './read.module.scss';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IMockData, InitialActionType, RootStateType } from '../../store/types';

import { useDispatch } from 'react-redux';
import { create } from '../../store/actions/function';
import { AnyAction } from 'redux'

export const Read = () => {
  const [first, setFirst] = React.useState('');
  const [second, setSecond] = React.useState('');

  const dispatch = useDispatch();

  const funcionarios: IMockData = useSelector(
    (state: RootStateType) => state.reducer,
  );

  const blabla = (person: any) => {

    dispatch(create(person) as any);
  };

  const handleChange = (event: FormEvent) => {
    event.preventDefault();

    const bla = {
      cpf: '',
      name: second,
      city: first,
      state: '',
      id: '',
    };

    blabla(bla)

    console.log(bla);
  };

  return (
    <>
      <NamePage title="Redux" />

      <div className={styles.container__div}>
        <h1 className={styles.container__div__title}>Overview</h1>
        <section className={styles.container__div__section}>
          <div className={styles.container__div__item}>NOME</div>
          <div className={styles.container__div__item}>CPF</div>
          <div className={styles.container__div__item}>CIDADE</div>
          <div className={styles.container__div__item}>ESTADO</div>
        </section>
      </div>

      <form onSubmit={handleChange}>
        <input
          name="nome"
          placeholder="Nome"
          value={first}
          onChange={({ target }) => setFirst(target.value)}
        />
        <input
          name="cidade"
          placeholder="cidade"
          value={second}
          onChange={({ target }) => setSecond(target.value)}
        />

        <button type="submit">Salvar</button>
      </form>

      <section className={styles.table__section}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>CPF</th>
              <th>CIDADE</th>
              <th>ESTADO</th>
              <th>AÇÕES</th>
            </tr>
          </thead>

          <tbody>
            {funcionarios.person?.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.cpf}</td>
                <td>{item.state}</td>
                <td>{item.city}</td>
                <td>
                  <div className={styles.table__div}>
                    <button className={styles.table__div__button}>
                      <FiSave />
                    </button>

                    <button className={styles.table__div__button}>
                      <Link to={`/Update/${item.id}`}>
                        <FiEdit />
                      </Link>
                    </button>

                    <button className={styles.table__div__button}>
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

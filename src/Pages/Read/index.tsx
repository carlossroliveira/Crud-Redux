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
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../store/actions/index';
import { NamePage } from '../../components/NamePage';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './read.module.scss';
// -------------------------------------------------
// Types
// -------------------------------------------------
import {
  IMockData,
  InitialActionType,
  RootStateType,
  separateObject,
} from '../../store/types';

export const Read = () => {
  const [first, setFirst] = React.useState('');
  const [second, setSecond] = React.useState('');

  const dispatch = useDispatch();

  const information: IMockData = useSelector(
    (state: RootStateType) => state.reducer,
  );

  const { create } = bindActionCreators(actions, dispatch);

  const handleChange = (event: FormEvent) => {
    event.preventDefault();

    const person: separateObject = {
      cpf: '',
      name: first,
      city: second,
      state: '',
      id: `${information.person.length + 1}`,
    };

    create(person);
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
            {information.person?.map((item, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
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

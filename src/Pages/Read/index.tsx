// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
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
import { IReadProps } from './types';
import { IMockData, RootStateType } from '../../store/types';

export const Read = (props: IReadProps) => {
  const information: IMockData = useSelector(
    (state: RootStateType) => state.reducer,
  );

  const informationFilter = useMemo(() => {
    const lowerInformation = props.filter.toLowerCase();
    return information.person.filter((item) =>
      item.name?.toLowerCase().includes(lowerInformation),
    );
  }, [props.filter]);

  return (
    <>
      <NamePage title="Redux" />

      <div className={styles.container__div}>
        <h1 className={styles.container__div__title}>Overview</h1>
        <section className={styles.container__div__section}>
          <div className={styles.container__div__item}>
            <span className={styles.container__info__title}>[ NAME ]</span>
            <span>{information.person?.map((item) => item.name).at(-1)}</span>
          </div>
          <div className={styles.container__div__item}>
            <span className={styles.container__info__title}>[ CEP ]</span>
            <span>{information.person?.map((item) => item.cep).at(-1)}</span>
          </div>
          <div className={styles.container__div__item}>
            <span className={styles.container__info__title}>[ CITY ]</span>
            <span>{information.person?.map((item) => item.city).at(-1)}</span>
          </div>
          <div className={styles.container__div__item}>
            <span className={styles.container__info__title}>[ STATE ]</span>
            <span>{information.person?.map((item) => item.state).at(-1)}</span>
          </div>
        </section>
      </div>

      <section className={styles.table__section}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>CEP</th>
              <th>CITY</th>
              <th>STATE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {informationFilter?.map((item, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.cep}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>
                  <div className={styles.table__div}>
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

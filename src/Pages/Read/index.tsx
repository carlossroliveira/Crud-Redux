// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { NamePage } from '../../components/NamePage';
// -------------------------------------------------
// Hooks
// -------------------------------------------------
import { useFetch } from '../../hooks/useFetch';
// -------------------------------------------------
// Styles
// -------------------------------------------------

interface IData {
  cpf: number;
  name: string;
  cidade: string;
  estado: string;
  id: string;
}

const IDataItem: IData[] = [
  {
    cpf: 12345678999,
    name: 'Jayson',
    cidade: 'Ontario',
    estado: 'Florida',
    id: '5',
  },
  {
    cpf: 12345678999,
    name: 'Selena',
    cidade: 'New Imogeneworth',
    estado: 'Montana',
    id: '6',
  },
  {
    cpf: 12345678999,
    name: 'Cesar',
    cidade: 'Sheldonville',
    estado: 'New York',
    id: '7',
  },
  {
    cpf: 12345678999,
    name: 'Joshua',
    cidade: 'Hegmannchester',
    estado: 'Maine',
    id: '8',
  },
  {
    cpf: 12345678999,
    name: 'Jany',
    cidade: 'Columbusview',
    estado: 'Vermont',
    id: '9',
  },
  {
    cpf: 12345678999,
    name: 'Israel',
    cidade: 'Riceland',
    estado: 'Maine',
    id: '10',
  },
];

import styles from './read.module.scss';

export const Read = () => {
  return (
    <>
      <NamePage title="Redux" />

      <div className={styles.container__div}>
        <h1 className={styles.container__div__title}>Overview</h1>
        <section className={styles.container__div__section}>
          <div className={styles.container__div__item}>CPF</div>
          <div className={styles.container__div__item}>NOME</div>
          <div className={styles.container__div__item}>CIDADE</div>
          <div className={styles.container__div__item}>ESTADO</div>
        </section>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>CPF</th>
            <th>NOME</th>
            <th>CIDADE</th>
            <th>ESTADO</th>
            <th>ALTERAR</th>
          </tr>
        </thead>

        <tbody>
          {IDataItem?.map((item: IData) => (
            <tr key={item.id}>

              <td>{item.id}</td>
              <td>{item.cpf}</td>
              <td>{item.name}</td>
              <td>{item.cidade}</td>
              <td>{item.estado}</td>
              <td>
                <span>icon</span>
                <span>icon</span>
                <span>icon</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

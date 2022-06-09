// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiSave, FiTrash2 } from 'react-icons/fi';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { NamePage } from '../../components/NamePage';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './read.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { createPerson } from '../../store/actions/function';

export const Read = () => {
  const funcionarios: any = useSelector((state: any) => state);

  const dispatch = useDispatch();

  const handleAdicionarFuncionario = React.useCallback(
    (param: any) => dispatch(createPerson(param)),
    [dispatch],
  );

  const [first, setfirst] = React.useState('');

  const handleChange = (event: React.FormEvent) => {
    event.preventDefault();

    const aaa = {
      name: first,
    };

    handleAdicionarFuncionario(aaa);
  };

  console.log(funcionarios.reducer.state?.map((item: any) => item.name));

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
          name="Nome"
          placeholder="Nome Completo"
          value={first}
          onChange={({ target }) => setfirst(target.value)}
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
            {funcionarios.reducer.state?.map((item: any) => (
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

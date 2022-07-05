// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// -------------------------------------------------
// Icons
// -------------------------------------------------
import { IoCreateOutline } from 'react-icons/io5';
import { MdSystemUpdateAlt } from 'react-icons/md';
import { TbLockOff, TbLockOpen } from 'react-icons/tb';
import { AiOutlineRead, AiOutlineDelete } from 'react-icons/ai';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import styles from './aside.module.scss';
// -------------------------------------------------
// Types
// -------------------------------------------------
import {
  CREATE,
  DELETE,
  DELETE_INFO,
  ERROR,
  READ,
  stylesTypes,
  UPDATE,
  UPDATE_LIST,
} from './types';

export const Aside = () => {
  const location = useLocation();

  const [value, setValue] = useState<stylesTypes>('/');

  const pathDefault =
    location.pathname !== READ &&
    location.pathname !== CREATE &&
    location.pathname !== UPDATE &&
    location.pathname !== ERROR &&
    location.pathname !== DELETE;

  const pathOne =
    pathDefault &&
    location.pathname !== `${DELETE_INFO}0` &&
    location.pathname !== `${DELETE_INFO}1` &&
    location.pathname !== `${DELETE_INFO}2` &&
    location.pathname !== `${DELETE_INFO}3` &&
    location.pathname !== `${DELETE_INFO}4` &&
    location.pathname !== `${DELETE_INFO}5` &&
    location.pathname !== `${DELETE_INFO}6` &&
    location.pathname !== `${DELETE_INFO}7` &&
    location.pathname !== `${DELETE_INFO}8` &&
    location.pathname !== `${DELETE_INFO}9`;

  const pathTwo =
    pathDefault &&
    location.pathname !== `${UPDATE_LIST}0` &&
    location.pathname !== `${UPDATE_LIST}1` &&
    location.pathname !== `${UPDATE_LIST}2` &&
    location.pathname !== `${UPDATE_LIST}3` &&
    location.pathname !== `${UPDATE_LIST}4` &&
    location.pathname !== `${UPDATE_LIST}5` &&
    location.pathname !== `${UPDATE_LIST}6` &&
    location.pathname !== `${UPDATE_LIST}7` &&
    location.pathname !== `${UPDATE_LIST}8` &&
    location.pathname !== `${UPDATE_LIST}9`;

  useEffect(() => {
    if (location.pathname === READ) setValue(READ);
    if (location.pathname === CREATE) setValue(CREATE);
    if (location.pathname === UPDATE) setValue(UPDATE);
    if (location.pathname === DELETE) setValue(DELETE);

    if (location.pathname === `${UPDATE_LIST}0`) setValue(UPDATE_LIST);
    if (location.pathname === `${UPDATE_LIST}1`) setValue(UPDATE_LIST);
    if (location.pathname === `${UPDATE_LIST}2`) setValue(UPDATE_LIST);
    if (location.pathname === `${UPDATE_LIST}3`) setValue(UPDATE_LIST);
    if (location.pathname === `${UPDATE_LIST}4`) setValue(UPDATE_LIST);
    if (location.pathname === `${UPDATE_LIST}5`) setValue(UPDATE_LIST);
    if (location.pathname === `${UPDATE_LIST}6`) setValue(UPDATE_LIST);
    if (location.pathname === `${UPDATE_LIST}7`) setValue(UPDATE_LIST);
    if (location.pathname === `${UPDATE_LIST}8`) setValue(UPDATE_LIST);
    if (location.pathname === `${UPDATE_LIST}9`) setValue(UPDATE_LIST);

    if (location.pathname === `${DELETE_INFO}0`) setValue(DELETE_INFO);
    if (location.pathname === `${DELETE_INFO}1`) setValue(DELETE_INFO);
    if (location.pathname === `${DELETE_INFO}2`) setValue(DELETE_INFO);
    if (location.pathname === `${DELETE_INFO}3`) setValue(DELETE_INFO);
    if (location.pathname === `${DELETE_INFO}4`) setValue(DELETE_INFO);
    if (location.pathname === `${DELETE_INFO}5`) setValue(DELETE_INFO);
    if (location.pathname === `${DELETE_INFO}6`) setValue(DELETE_INFO);
    if (location.pathname === `${DELETE_INFO}7`) setValue(DELETE_INFO);
    if (location.pathname === `${DELETE_INFO}8`) setValue(DELETE_INFO);
    if (location.pathname === `${DELETE_INFO}9`) setValue(DELETE_INFO);
  }, [location.pathname]);

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>
        <span className={styles.container__title__span}>C</span>rud -{' '}
        <span className={styles.container__title__span}>R</span>edux
      </h1>

      <section className={styles.container__section}>
        <div
          className={`${styles.container__div__main} ${
            value === READ && styles.visible
          }`}
        >
          <Link to={READ}>
            <div className={styles.container__div}>
              <AiOutlineRead />
              Read
            </div>
          </Link>
        </div>

        <div
          className={`${styles.container__div__main} ${
            value === CREATE && styles.visible
          }`}
        >
          <Link to={CREATE}>
            <div className={styles.container__div}>
              <IoCreateOutline />
              Create
            </div>
          </Link>
        </div>

        <div
          className={`${styles.container__div__main} ${
            value === UPDATE_LIST
              ? styles.visible
              : value === UPDATE && styles.visible
          }`}
        >
          <Link to={UPDATE}>
            <div className={styles.container__div}>
              <MdSystemUpdateAlt />
              Update
              {pathOne ? (
                <span className={styles.icon__open}>
                  <TbLockOpen />
                </span>
              ) : (
                <span className={styles.icon__close}>
                  <TbLockOff />
                </span>
              )}
            </div>
          </Link>
        </div>

        <div
          className={`${styles.container__div__main} ${
            value === DELETE_INFO
              ? styles.visible
              : value === DELETE && styles.visible
          }`}
        >
          <Link to={DELETE}>
            <div className={styles.container__div}>
              <AiOutlineDelete />
              Delete
              {pathTwo ? (
                <span className={styles.icon__open}>
                  <TbLockOpen />
                </span>
              ) : (
                <span className={styles.icon__close}>
                  <TbLockOff />
                </span>
              )}
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

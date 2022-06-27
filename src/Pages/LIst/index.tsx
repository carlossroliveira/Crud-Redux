// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { NamePage } from '../../components/NamePage';
import { IMockData, RootStateType } from '../../store/types';
// -------------------------------------------------
// Styles
// -------------------------------------------------

export const List = () => {
  const params = useParams();

  const [first, setfirst] = React.useState<any>();

  const information: IMockData = useSelector(
    (state: RootStateType) => state.reducer,
  );

  React.useEffect(() => {
    const selectedUser = information.person.find(
      (item) => item.id === params.id,
    );
    setfirst(selectedUser);
  }, []);

  /* console.log(params) */
  return (
    <>
      <NamePage title="Update" />
      <h1>Nome: {first?.name}</h1>
    </>
  );
};

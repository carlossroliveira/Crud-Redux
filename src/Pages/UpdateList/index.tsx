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
// -------------------------------------------------
// Styles
// -------------------------------------------------

// -------------------------------------------------
// Types
// -------------------------------------------------
import { IMockData, RootStateType } from '../../store/types';

export const UpdateList = () => {
  const params = useParams();

  const [first, setFirst] = React.useState<any>();

  const information: IMockData = useSelector(
    (state: RootStateType) => state.reducer,
  );

  React.useEffect(() => {
    const selectedUser = information.person.find(
      (item) => item.id === params.id,
    );
    setFirst(selectedUser);
  }, []);

  /* console.log(params) */
  return (
    <>
      <NamePage title="Update" />
      <h1>Nome: {first?.name}</h1>
    </>
  );
};

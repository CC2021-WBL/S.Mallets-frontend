import { useSelector } from 'react-redux';

import { RootState } from '../../app/store';

const UserPage = () => {
  const name = useSelector((state: RootState) => state.user.name);
  return (
    <h1 className="p-8 text-center text-6xl">
      User Page
      {`Hello ${name}`}
    </h1>
  );
};

export default UserPage;

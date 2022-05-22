import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../app/store';

const UserPage = () => {
  const name = useSelector((state: RootState) => state.user.name);
  // const [address, setAddress] = useState('');
  useEffect(() => {
    const getAdress = async () => {
      // const isDev = window.location.href.includes('localhost');
      const headers = new Headers();
      // headers.append('Content-Type', 'application/json');
      headers.append('credentials', 'include');
      headers.append('withCredentials', 'true');
      const options = {
        method: 'GET',
        headers: headers,
      };
      const res = await fetch(
        'https://s-mallets-backend-git-c-f-v-devsonthewaves.vercel.app/addresses',
        options,
      );
      if (res.status === 200) {
        const resJson = await res.json();
        console.log(resJson);
      }
    };
    getAdress();
  }, []);
  return (
    <h1 className="p-8 text-center text-6xl">
      User Page
      {`Hello ${name}`}
    </h1>
  );
};

export default UserPage;

import type { NextPage } from 'next';
import Dropdown from '../components/Dropdown';

const Home: NextPage = () => {
  return (
    <div className="shadow-lg">
      <h1 className="text-3xl font-bold underline text-sky-500 hover:text-sky-600">Hello world!</h1>
      <Dropdown />
    </div>
  );
};

export default Home;

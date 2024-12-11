import { observer } from 'mobx-react-lite';
import Header from '../Header/Header';
import Table from '../Table/Table';
import Search from '../Search/Search';
import styles from './App.module.scss';

const App = observer(() => {

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Search />
        <Table />
      </div>
    </div>
  )
});

export default App;



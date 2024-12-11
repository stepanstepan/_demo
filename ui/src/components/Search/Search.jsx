import { observer } from 'mobx-react-lite';
import Storage from '../../stores/Storage';
import styles from './Search.module.scss';
import CompanyCard from '../CompanyCard/CompanyCard';
import { useEffect, useState } from 'react';

const companies = [
  {
    id: '1ac84f70-ef96-47ae-9b68-a04b0bdc0896',
    name: 'Help Scout'
  },
  {
    id: '6f15dd05-d491-4d29-8495-abbc6b8cfab0',
    name: 'Front'
  },
  {
    id: '980135dc-a6cc-462f-9d85-d4f8300ed5f0',
    name: 'Intercom'
  },
  {
    id: 'a19f752d-17c3-479c-98ea-fe95c9e5ae63',
    name: 'Hiver'
  },
  {
    id: 'bbc5304d-fd8a-44d6-9bba-9afd25a9a96c',
    name: 'Crisp'
  },
  {
    id: 'c1d88a9e-4e55-4b4f-846c-2b79039174cc',
    name: 'Userpilot'
  },
  {
    id: 'ca9f177f-96a7-433d-a073-f05cb9179e29',
    name: 'Kustomer'
  }
]

const Search = observer(() => {

  const [ index, setIndex ] = useState(0);
  const [ id, setId ] = useState(null);

  useEffect(() => {
    if (id) {
      Storage.fetch(id);
      setIndex(index + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ id ]);

  function add() {
    const _id = companies[index]['id'];
    setId(_id);
  }

  function select(event, id) {
    event.preventDefault();
    event.stopPropagation();
    Storage.select(id);
  }
  

  return (
    <div className={styles.container}>
      {Storage.ids?.map(id => {
        const company = Storage.find(id);

        return (
          <CompanyCard 
            onClick={event => select(event, id)}
            withBackground
            name={company.getValue('name')} 
            website={company.getValue('website')}
            key={id}
          />
        )
      })}
      
      {index < 7 ?
        <div 
          className={styles.add}
          onClick={add}
        >
          Add Company
        </div>
      : null}
    </div>
  )
});

export default Search;
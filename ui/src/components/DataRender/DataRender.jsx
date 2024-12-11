import CompanyCard from '../CompanyCard/CompanyCard';
import Pricing from './Pricing';
import Reviews from './Reviews';
import styles from './DataRender.module.scss';

export default function DataRender({ 
  value, 
  cellKey, 
  companyId 
}) {
  switch(cellKey) {
    case 'name':
      return <CompanyCard name={value} id={companyId} />
    case 'reviews_pros':
    case 'reviews_cons':
      return <Reviews value={value} />
    case 'pricing':
      return <Pricing value={value} />
    default:
      return (
        <div className={styles.simpleData}>
          {value}
        </div>
      )
  }
}

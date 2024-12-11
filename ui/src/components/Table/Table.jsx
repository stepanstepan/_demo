import { observer } from 'mobx-react-lite';
import classnames from 'classnames';
import Storage from '../../stores/Storage';
import styles from './Table.module.scss';
import DataRender from '../DataRender/DataRender';
import CompanyCard from '../CompanyCard/CompanyCard';

const Table = observer(() => {

  function renderHead() {
    return (
      <thead className={styles.head}>
        <tr className={styles.row}>
          <th className={classnames(styles.cell, styles.cellHead)}></th>

          {Storage.ids?.map(id => {
            const company = Storage.find(id);
            return (
              <th 
                className={classnames(styles.cell, styles.cellHead)}
                key={id}
              >
                <CompanyCard 
                  name={company.getValue('name')} 
                  website={company.getValue('website')}
                  key={id}
                />
              </th>
            )
          })}
        </tr>
      </thead>
    )
  }

  function renderBody() {
    return (
      <tbody className={styles.body}>
        {Storage.keys?.map(key => {
          return (
            <tr 
              className={styles.row}
              key={key}
            >
              <td 
                className={classnames(styles.cell)}
                key={key}
              >
                {key}
              </td>

              {Storage.listIds?.map(id => {
                const company = Storage.find(id);
                return (
                  <td 
                    className={classnames(styles.cell)}
                    key={key}
                  >
                    <DataRender
                      companyId={id}
                      cellKey={key}
                      value={company.getValue(key)}
                    />
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    )
  }

  if (!Storage.ids?.length) {
    return null;
  }

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        {renderHead()}
        {renderBody()}
      </table>
    </div>
  )
});

export default Table;
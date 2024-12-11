import classnames from 'classnames';
import Storage from '../../stores/Storage';
import styles from './CompanyCard.module.scss';

const extractDomain = (url) => {
  if (!url) return null;
  return url.replace(/https?:\/\/(www\.)?/, '');
};

export default function CompanyCard({ 
  id, 
  name, 
  website, 
  onClick,
  fixedWidth, 
  withBackground
}) {
  const company = Storage.find(id);
  website = website ? website : company?.getValue('website');
  const domain = extractDomain(website);

  return (
    <a 
      onClick={onClick}
      href={website} 
      target="_blank" 
      rel="noreferrer"
      className={classnames(styles.container, {
        [styles.fixedWidth]: fixedWidth,
        [styles.withBackground]: withBackground,
      })}
    >
      <div className={styles.logoWrap}>
        <img 
          className={styles.logo} 
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=256`} 
          alt=""
        />
      </div>
      <div>
        <div className={styles.name}>
          {name}
        </div>
        <div className={styles.website}>
          {domain}
        </div>
      </div>
    </a>
  )
}

import styles from './DataRender.module.scss';

export default function Reviews({ value }) {
  return (
    <ul className={styles.reviews}>
      {value?.map((item, index) =>
        <li key={index}>
          {item?.description}
        </li>
      )}
    </ul>
  )
}

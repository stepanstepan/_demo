import styles from './DataRender.module.scss';

export default function Pricing({ value }) {
  return (
    <div>
      {value?.map(item =>
        <div className={styles.pricing}>
          <div className={styles.pricingName}>
            {item.name}
          </div>
          {item.price ?
            <div className={styles.pricingPrice}>
              ${item.price} / {item.duration}
            </div>
          : null}
          <div className={styles.pricingComment}>
            {item.comment}
          </div>
        </div>
      )}
    </div>
  )
}

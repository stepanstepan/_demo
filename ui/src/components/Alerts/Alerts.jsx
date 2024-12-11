import { observer } from 'mobx-react-lite';
import classnames from 'classnames';
import AlertStore from 'stores/Alert';
import styles from './Alerts.module.scss';

const Alerts = observer(() => {

  function onAnimationEnd(event, alert) {
    if (alert.hidden) {
      AlertStore.delete(alert.id);
    }
  }

  return (
    <div className={styles.container}>
      {AlertStore.list.map(alert => {
        return (
          <div 
            className={classnames(styles.item, {
              [styles.success]: alert.status === 'success',
              [styles.hidden]: alert.hidden
            })}
            onAnimationEnd={event => onAnimationEnd(event, alert)}
            key={alert.id}
          >
            {alert.status === 'error' &&
              <div className={styles.title}>
                Error
              </div>
            }
            {alert.message}
          </div>
        );
      })}
    </div>
  );

});

export default Alerts;

import styles from './styles.module.scss';

export function SubscriberButton() {
  return(
    <button 
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  );
}
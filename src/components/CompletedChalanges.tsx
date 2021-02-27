import styles from '../styles/components/CompletedChalanges.module.css';

export function CompletedChalanges() {
  return(
    <div className={styles.completedChalangesContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
}
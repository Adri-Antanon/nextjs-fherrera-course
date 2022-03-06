import styles from './styles.module.css';

export const ListItem = ({ title, description, branch }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <h4>Branch name: {branch}</h4>
      <p>{description}</p>
    </div>
  );
};

import { ListItem } from './listItem';

import { listOfBranches } from '../../data/branches';
import styles from './styles.module.css';

export const List = () => {
  return (
    <div className={styles.grid}>
      {listOfBranches.length > 0 &&
        listOfBranches.map((branch) => (
          <ListItem
            description={branch.description}
            title={branch.title}
            branch={branch.branch}
            key={branch.title}
          />
        ))}
    </div>
  );
};

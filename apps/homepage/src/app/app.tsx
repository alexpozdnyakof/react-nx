import styles from './app.module.less';
import { LatestBlocks } from './features/latest-blocks';
import { LatestTransactions } from './features/transactions';

export const App = () => {

  const tiles = [1,2,3,4,5,6,7,8,9,10,11,12];

  return (
    <div className={styles['Homepage-Layout']}>
      <aside className={styles['Sidebar']}>
        <div className={styles['Sidebar_Inner']}>
        </div>
      </aside>

      <div className={styles['Main']}>

        <header className={styles['TopBar']}>
          <div className={styles['TopBar-Search']}></div>
          <div className={styles['Obyavleniya']}></div>
        </header>
        <h1>Latest Transactions</h1>
        <div className={styles['Tiles-Wrapper']}>
          <div className={styles['Tiles-Inner']}>
            <div className={styles['Tiles']}>
              <div className={styles['Tile']} style={{fontSize: '13px'}}>
                <div className={styles['Tile-Outer']}>
                  <div className={styles['Tile-InnerContent']}>
                    <LatestBlocks/>
                  </div>
                </div>
              </div>
              <div className={styles['Tile']} style={{fontSize: '13px'}}>
                <div className={styles['Tile-Outer']}>
                  <div className={styles['Tile-InnerContent']}>
                    <LatestTransactions />
                  </div>
                </div>
              </div>
              {tiles.map((x) => (
                <div className={styles['Tile']}>
                  <div className={styles['Tile-Outer']}>
                    <div className={styles['Tile-InnerContent']}>
                      {x}
                    </div>
                  </div>
                </div>
              ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

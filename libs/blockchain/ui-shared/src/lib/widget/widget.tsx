import { PropsWithChildren } from 'react';
import styles from './widget.module.less';

/* eslint-disable-next-line */
export interface WidgetProps {
  title: string;
  subtitle: string;
  symbol: string;
  link: string;
}

export function Widget({symbol, title, subtitle, link, children}: Partial<WidgetProps> & PropsWithChildren) {


  return (
    <div className={styles['Widget']}>
      <div className={styles['Widget-Header']}>
        {symbol && <img className={styles['Widget-Symbol']} src={symbol} alt="widget symbol"/>}
        <div className={styles['Widget-Info']}>
          <a href={link} className={styles['Link']} data-testid="title-link">
            <h1 className={styles['Widget-Title']}>
              {title}
            </h1>
          </a>
          <h2 className={styles['Widget-SubTitle']}>
            {subtitle}
          </h2>
        </div>
        <div className={styles['Spacer']}></div>
        <a href={link} className={styles['Link']} data-testid="arrow-link"><span className={styles['Widget-Arrow']}>→</span></a>
      </div>
      {children}
    </div>
  );
}

export default Widget;

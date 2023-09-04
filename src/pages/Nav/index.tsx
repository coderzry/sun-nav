import { useModel } from '@umijs/max';
import { Tooltip } from 'antd';
import styles from './index.less';

const Nav: React.FC = () => {
  const { name } = useModel('global');
  return (
    <div className={styles.container}>
      <Tooltip placement="top" title={'遥遥领先遥遥领先遥遥领先遥遥领先遥遥领先'}>
        <a className={styles.card} target='_blank' href='https://www.aigaixie.com/'>
          <div className={styles.left}>
            <img className={styles.img} src="https://ai-bot.cn/wp-content/uploads/2023/04/xiezuocat-ai-icon.png" alt="" />
          </div>
          <div className={styles.right}>
            <div className={styles.title}>欢迎使用</div>
            <div className={styles.desc}>欢迎使用欢迎使用欢迎使用</div>
          </div>
        </a>
      </Tooltip>
    </div>
  );
};

export default Nav;

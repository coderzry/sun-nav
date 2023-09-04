import { useModel } from '@umijs/max';
import { Tooltip } from 'antd';
import styles from './index.less';

const Nav: React.FC = () => {
  const { name } = useModel('global');
  return (
    <div className={styles.container}>
      <Tooltip placement="top" title={'字节跳动旗下推出的免费AI写作助手'}>
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
      <Tooltip placement="top" title={'字节跳动旗下推出的免费AI写作助手'}>
        <a className={styles.card} target='_blank' href='https://www.aigaixie.com/'>
          <div className={styles.left}>
            <img className={styles.img} src="https://ai-bot.cn/wp-content/uploads/2023/03/huoshan-writing-icon.png" alt="" />
          </div>
          <div className={styles.right}>
            <div className={styles.title}>火山写作</div>
            <div className={styles.desc}>字节跳动旗下推出的免费AI写作助手</div>
          </div>
        </a>
      </Tooltip>
    </div>
  );
};

export default Nav;

import './Demo.global.less';
import { Card } from 'antd';
import styles from './Demo.less';

const Demo: React.FC = () => (
  <Card>
    <div className={`demo ${styles.demo}`}>demo</div>
  </Card>
);

export default Demo;

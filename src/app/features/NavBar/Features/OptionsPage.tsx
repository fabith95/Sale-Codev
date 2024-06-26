import React, { useState } from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { ConfigProvider, Menu } from 'antd';
const items = [
  {
    label: 'Home',
    key: 'home',
  },
  {
    label: 'Products',
    key: 'products',
    disabled: false,
  },
  {
    label: 'Car',
    key: 'car',
  },
  {
    label: 'Users',
    key: 'users',
  },
];
const App = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorTextBase: '#ffffff',
            fontSize: 25,
            fontWeightStrong: 700,
          },
        }}
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          style={{
            width: 430,
            backgroundColor: 'rgb(21,30,45)',
            fontFamily: 'Arial',
            fontWeight: 600,
          }}
          items={items}
        />
      </ConfigProvider>
    </div>
  );
};
export default App;

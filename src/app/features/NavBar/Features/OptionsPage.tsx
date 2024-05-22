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
          token : {
            colorTextBase: '#ffffff',
          },
        }}
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          style={{
            width: 400,
            backgroundColor: 'rgb(21,30,45)',
            fontSize: 'x-large',
            fontFamily: 'sans-serif',
            alignItems: 'flex-end',
          }}
          items={items}
        />
      </ConfigProvider>
    </div>
  );
};
export default App;

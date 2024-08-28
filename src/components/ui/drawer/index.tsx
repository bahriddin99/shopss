import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import './style.scss'
import { MenuOutlined } from '@ant-design/icons';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className='driwer-open-btn' style={{border: 'none'}} onClick={showDrawer}>
        <MenuOutlined/>
      </Button>
      <Drawer placement='left' title="Basic Drawer" onClose={onClose} open={open}>
       
      </Drawer>
    </>
  );
};

export default App;
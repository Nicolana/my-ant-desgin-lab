import React, { useState } from 'react';
import { render } from 'react-dom';
import { ConfigProvider, DatePicker, message } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import EditTable from "./EditTable";

moment.locale('zh-cn');

const App = () => {
  const [date, setDate] = useState(null);
  const handleChange = (value: any) => {
    message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
    setDate(value);
  };
  return (
    <ConfigProvider locale={zhCN}>
      <div style={{ width: "1000px", margin: "100px auto" }}>
        <EditTable />
      </div>
    </ConfigProvider>
  );
};

export default App;

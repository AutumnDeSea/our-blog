


import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/index.css';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
// import Errorboundary from '@components/Lib/ErrorBoundary';
// import PageErrorFallback from '@components/Lib/BeautifulError';
import App from './pages/App';
import './assets/css/app.less';
// ReactDOM.render(
//   <Errorboundary fallbackRender={ PageErrorFallback }>
//       <App/>
//   </Errorboundary>
//   , document.getElementById('main'));
createRoot(document.querySelector('#main')!).render(
    <ConfigProvider locale={zhCN}>
        <App />
    </ConfigProvider>,
);
// 装了找不到模块，就是缺声明文件
// ts的时候，一个文件必须对应一个描述文件

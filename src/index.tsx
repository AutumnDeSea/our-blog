


import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/index.css';
// import Errorboundary from '@components/Lib/ErrorBoundary';
// import PageErrorFallback from '@components/Lib/BeautifulError';
import App from './pages/App';
// ReactDOM.render(
//   <Errorboundary fallbackRender={ PageErrorFallback }>
//       <App/>
//   </Errorboundary>
//   , document.getElementById('main'));
createRoot(document.querySelector('#main')!).render(<App />);
// 装了找不到模块，就是缺声明文件
// ts的时候，一个文件必须对应一个描述文件

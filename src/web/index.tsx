


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Errorboundary from '@components/Lib/ErrorBoundary';
// import PageErrorFallback from '@components/Lib/BeautifulError';
import App from './pages/App';
// ReactDOM.render(
//   <Errorboundary fallbackRender={ PageErrorFallback }>
//       <App/>
//   </Errorboundary>
//   , document.getElementById('main'));
ReactDOM.render(<App/>, document.getElementById('main'));

// 装了找不到模块，就是缺声明文件
// ts的时候，一个文件必须对应一个描述文件

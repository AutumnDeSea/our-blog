import React, { JSXElementConstructor, ReactNode } from 'react';
// JSXElementConstructor<TProps>, 组件的构造函数
function inject<TProps, TinjectKeys extends keyof TProps>(
  Component: JSXElementConstructor<TProps>, 
  injector: Pick<TProps, TinjectKeys>) {
  // inject 部分参数
  return function Injected(props: Omit<TProps, TinjectKeys>): ReactNode {
    return <Component {...(props as TProps)} {...injector}/>;
  };
}
export default inject;

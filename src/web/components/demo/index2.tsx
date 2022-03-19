// FC
// VFC 不带children
import React, { VFC } from 'react';
import inject from '../Lib/Hoc/inject'
type YDProps = {
  msg: string;
}
const Demo2:VFC<YDProps> = (props: YDProps) => {
  const { msg } = props;
  return(
    <>
      <h1>{ msg }</h1>
    </>
  )
}
const Demo = inject(Demo2, {msg: '注入'});
export default Demo2;

// ioc

// 从一个对象上面挖东西  keyof infer
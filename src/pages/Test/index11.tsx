import React, {useEffect}  from 'react';
import PQueue from 'p-queue';
import delay from 'delay';
const queue = new PQueue({concurrency: 2});
import { Message } from './toast';


 const fixture = Symbol('fixture');
const Testpage = () => {
  const toast = () => {
    Message.success({
        message: 'ehehdioe'
    })
  }
  return (
    <>
      <div onClick={toast}>按钮</div>
    </>
  );
};
export default Testpage;
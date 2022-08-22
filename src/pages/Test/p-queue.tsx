import React, {useEffect}  from 'react';
import PQueue from 'p-queue';
import delay from 'delay';
const queue = new PQueue({concurrency: 2});


 const fixture = Symbol('fixture');
const Testpage = () => {
	const promise = queue.add(async () => 	{
   

    await delay(10000) 
    console.log('1111')
    return fixture
  });
	const promise2 = queue.add(async () => {
		await delay(15000);
    console.log('222')
		return fixture;
	});
	const promise3 = queue.add(async () => fixture);
  console.log('🚗-》', queue.size)

 
  useEffect(() => {
    // init()
  })
  return (
    <>
      <div>浏览量最高文章页面</div>
    </>
  );
};
export default Testpage;
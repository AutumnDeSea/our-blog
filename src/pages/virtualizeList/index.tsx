import React from 'react'
import { List } from 'react-virtualized'
const list = () => {
    const renderLen = 1000;
    let ListItem:String[] = [];
    for(let i = 0;i < renderLen;i++) {
        ListItem.push(i+"aaa");
    }
    function rowRenderer({
        // 这里可以理解成渲染的内容样式
       key, // Unique key within array of rows
       index, // Index of row within collection
       isScrolling, // The List is currently being scrolled
       isVisible, // This row is visible within the List (eg it is not an overscanned row)
       style, // Style object to be applied to row (to position it)
   }: any){
       return (
           <div key={key} style={style}>
               {ListItem[index]}
           </div>
       );
   }
       
    return (
        <List
            width={300} //容器的宽
            height={300} //容器的高
            rowCount={ListItem.length} // 列表长度
            rowHeight={20} // 渲染条数
            rowRenderer={rowRenderer} // 渲染函数渲染列表样式
        />
    )


}
export default list
import React from 'react'
import { List } from 'react-virtualized'
const list = () => {
    const rowRenderer = ({key, index}: any) => {
        return (
            <div key={key}>
                helloworld, {index}
            </div>
            )
    }
    const onScroll = () => {

    }
       
    return <>
        <div>
            <List
                width={300}
                height={100}
                rowCount={20}
                rowHeight={20}
                overscanRowCount={10}
                onScroll={onScroll}
                rowRenderer={rowRenderer}
            />
        </div>
    </>
}
export default list
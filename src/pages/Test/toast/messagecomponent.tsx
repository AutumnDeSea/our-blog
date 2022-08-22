import React, { Component } from 'react';
import './Message.css'
type Props = any
type State = any
class MessageComponent extends Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state= {
      id: 0,
      messages: [],
      max: 5
    }
  }
  add = (options: any) => {
    let { id, messages } = this.state
    let layer = {
      id: id++,
      ...options
    }
    layer.timer = setTimeout(() => {
      this.remove(layer)
    }, 2000);
    messages.push(layer)
    this.setState({ id, messages })
  }
  remove = (layer: any) => {
    clearTimeout(layer.timer)
    let messages = this.state.messages.filter(item => item.id !== layer.id)
    this.setState({ messages })
  }
  render() {
    return (
      <ul>
        {this.state.messages.map(
          (item, index) => <li key={item.id} className="message">{item.message}</li>
        )}
      </ul>
    );
  }
}

export default MessageComponent;
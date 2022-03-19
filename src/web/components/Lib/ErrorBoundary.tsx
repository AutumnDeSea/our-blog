import { Component, ReactElement, ReactNode } from "react";
interface State {
  hasError: boolean
}
interface Props {
  children: ReactNode,
  fallbackRender: ({error}: {error: Error | null})=> ReactElement
}
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  static getDerivedStateFromError(_: Error): State {
    // 更新state 使得下一次渲染都够显示降级后的UI
    return {
      hasError: true
    }
  }
  render(): ReactNode {
    const { children, fallbackRender } = this.props
    const { hasError } = this.state
    if(hasError) {
      return fallbackRender({error: new Error('系统组件出错')})
    }
    return children
  }
}
export default ErrorBoundary

// tslib

// let data: string = 'aaa'
// console.log("data:", data)
// alert('aaa')
/***
 * 
 *  react 基础篇
 * 
 * */ 
type AppProps = {
  onSomethind: Function,
  onClick: () => void;
  onClick1: (e: MouseEvent) => void;
  onClick2: (e: React.MouseEvent<HTMLButtonElement>) => void
}
type Props = {
  msg: string
}
interface AppProps2 {
  children1: JSX.Element; // 不考虑数组
  children2: JSX.Element | JSX.Element[] // 一些特殊比如数字字符
  children3: React.ReactChildren // 不是一个类型 是一个应用程序
  children4: React.ReactChild[] // 稍微好一点 接受数组
  children5: React.ReactNode // 最好的，但是没有解决jsx类型
  style: React.CSSProperties
  onChange: React.FormEventHandler<HTMLIFrameElement>
  // ref不转发
  props: Props & React.ComponentPropsWithoutRef<'button'>
  // 转发
  props1: Props & React.ComponentPropsWithRef<'button'>

}
let a = null;
let b: string = null!

/***
 * 
 * ts操作符基础符 
 * 
 * */
// typeof 查询具体js对象类型
// instanceof 查询实体类类型
// keyof 获取对象的键 keyof T 是一个运算符
// O[T] 属性查找
// [K in O ]: 映射类型 obj
// ! 原本本来是空的， 但是被我们强制转换了
// as 类型断言
// is 函数返回类型的类型保护
// = 泛型返回类型的类型保护 T= never


/**
 * 
 * ts常见的帮助类型
 */
//  ContructorParameters 类构造函数的参数类型元组  
// Exclude 从另一种类型中排除一种类型
// Extract 选择可分配给另一种类型的字类型
// InstanceType 从new 类构造函数中获得的实例类型
// Nonullable  排除掉null 和undefined的类型
// Parameters 函数参数类型的元组
// Partial 
// Readonly
// ReadonlyArray
// Pick
// Record
// Required
// ReturnType

/**
 * 
 * react进阶类型1
 */
// ReactNode 任何可以在jSX内部渲染的东西，这与组件可以渲染的东西不同
// Component 组件的基类
// PureComponent 所有基于基于类的优化组件的基类
// FC 
// CSSProperties 用于样式的类


/**
 * react进阶类型2
 */
// Ref
// JSXElementConstructor // 任何TypeScript认为有效的东西，可以进入JSX表达式的开始标签
// ElementType
// ReactElement 被传递的包装的组件
// ComponentType 高阶组件包装
// ComponentProps
// ReactPortal 元素的插槽

/**
 * react进阶 3 
 * 表单事件类型
 */
// AnimationEnent 
// ChangeEvent
// ClipboardEvent
// CompostionEvent
// DragEvent
// FocusEvent
// FormEvent
// InvalidEvent
// KeyboardEvent
// MouseEvent
// PointerEvent
// TouchEvent
// TransitionEvent
// UIEvent
// WheelEvent
// SyntheticEnent  react事件合成引擎 基于他二次构造









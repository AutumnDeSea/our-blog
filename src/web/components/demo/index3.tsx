interface IPorps {
  name: string;
}
const defaultProps = {
  age: 24
}
const GreetComponent = ({name, age}: IPorps & typeof defaultProps) =>(
  <>
    <div>{`Helle, my mame is ${name}, ${age}`}</div>
  </>
)
GreetComponent.defaultProps = defaultProps
type a = typeof GreetComponent
// 解构出GreetComponent的类型
const TestComponent = (props: ComponentProps<typeof GreetComponent>) =>{
  return (
    <>
    <h1>111</h1>
    </>
  )
}
type ComponentProps<T> = T extends 
| React.ComponentType<infer P> 
| React.Component<infer P> 
? JSX.LibraryManagedAttributes<T, P> 
: never
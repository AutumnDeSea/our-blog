const xx = (e: Event) => {
    console.log(e.target)
  }

const xx1 = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
}

// 表单事件
const xx3: React.FormEventHandler<HTMLInputElement> = (e) => {
  e.preventDefault()
}
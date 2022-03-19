// 枚举类型
export declare type Position = 'left' | 'right' | 'top' | 'bottom';

// 设置枚举的值，也可以直接调用 也可以当类型

export enum ButtonSizes {
  default,
  small = 'small',
  large = 'large',
}

function yideng(data: number) {
  console.log('data', data);
}

//  解构的方式
const { default: data } = ButtonSizes;
yideng(data);
// 模拟类型

// 大Symbol  
type TOrderID = string & { readonly brand: unique symbol };
type TUserID = string & { readonly brand: unique symbol };
const foo: TOrderID['brand'] = Symbol('111');
const a1:TOrderID = { 
  brand: foo,
};

function OrderID(id: string) {
  return id as TOrderID;
}
function UserID(id: string) {
  return id as TUserID;
}
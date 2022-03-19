// 联合类型 |  + 类型保护 is
interface Admin {
  role: string;
}
interface User {
  email: string;
}

function isAdmin(user: Admin | User): user is Admin {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (user as any).role !== undefined;
}
function yideng(count: number | null) {
  const obj = {
    role: '34234',
  };
  const flag = isAdmin(obj);
}
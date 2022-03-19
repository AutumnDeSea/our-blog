interface A {
  num?: number;
}
const c:A = { 
  num: null!, 
};
c.num?.toFixed(2);
// c.num.toFixed(2);
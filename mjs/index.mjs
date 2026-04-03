// .js -> por defecto usa commonJS
// .mjs -> para utilizar ES modules
// .cjs -> para utilizar commonjs

import { sum , sub, mult} from './sum.mjs'

console.log(sum(1,2))
console.log(sub(1,2))
console.log(mult(1,2))
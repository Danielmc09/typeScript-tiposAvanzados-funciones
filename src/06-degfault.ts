
export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10,
  ) => {
  return {
      id,
      stock,
      isNew,
    }
  }

let pr1 = createProduct(1, false, 0)
let pr2 = createProduct(2, true)
let pr3 = createProduct(3)

console.log(pr1)
console.log(pr2)
console.log(pr3)

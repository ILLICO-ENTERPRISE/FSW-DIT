async function sum(x, y) {
  return x + y
}

async function sous(x, y) {
  return await sum(x, -y)
}

async function mult(x, y) {
  return x * y
}

export { sous, sum, mult }
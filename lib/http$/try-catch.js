const tryCatch = predicate =>
  async function ({ res, ...data }) {
    try {
      const result = await predicate(data)
      return Object.assign({}, data, result, { res })
    }
    catch (error) {
      return Object.assign({}, data, { res, op: { body: { error }, statusCode: error.statusCode || 500 }})
    }
  }

module.exports = {
  tryCatch
}

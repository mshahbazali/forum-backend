const httpStatus = {
    ok: 200,
    created: 201,
    accepted: 202,
    found: 302,
    badRequest: 400,
    unauthorized: 401,
    notFound: 404,
    notAcceptable: 406,
    manyRequests: 429,
    serverError: 500,
}
const hashSaltRounds = 10
const dataBaseUrl = process.env.DATABASE_URL;
const port = process.env.PORT
const jwtKey = process.env.JWT_KEY

module.exports = { httpStatus, hashSaltRounds, dataBaseUrl, port, jwtKey }
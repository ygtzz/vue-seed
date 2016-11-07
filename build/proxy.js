module.exports = {
    '/form/getData': {
        target: 'http://localhost:3000',
        secure: false,
        pathRewrite: { '^/form/getData': '/users' }
    }
}
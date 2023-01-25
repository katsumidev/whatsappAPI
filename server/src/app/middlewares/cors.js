// Middleware para possibilitar a conexão com a API local, sem ele, o protocolo CORS iria bloquear a conexão

const express = require("express");
var cors = require('cors')
const app = express();

app.use(cors());

const { createProxyMiddleware } = require('http-proxy-middleware');

app.use('/', createProxyMiddleware({ 
    target: 'http://localhost:3333/',
    changeOrigin: true, 
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));
app.listen(5000);
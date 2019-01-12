const express = require('express');
const next = require('next');
const { resolve } = require('path');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev }); // { dev: dev }
const handle = app.getRequestHandler(); // all request


app
.prepare()
.then(()=>{
    const server = express();

    server.get('/sw.js', (req, res) => {
        app.serveStatic(req, res, resolve('./static/service-worker.js'));
    });

    server.get('/category/:name', (req, res) => {
        const actualPage = "/category";
        const queryParams = { name: req.params.name }; // /category:name 과 req.params.name 'name' 파라미터가 서로 동일한 값이어야함
        app.render(req, res, actualPage, queryParams);
    });

    server.get('/product/:id', (req, res) => {
        const actualPage = "/product";
        const queryParams = { id: req.params.id }; // 
        app.render(req, res, actualPage, queryParams);
    });    

    server.get("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, err => {
        if(err) throw err;
        console.log(" > Ready On http://localhost:3000");
    });
})
.catch(ex => {
    console.log(ex.stack);
    process.exit(1);
})
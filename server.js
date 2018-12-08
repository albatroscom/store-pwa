const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev }); // { dev: dev }
const handle = app.getRequestHandler(); // all request

app
.prepare()
.then(()=>{
    const server = express();

    server.get('/post/:title', (req, res) => {
        const actualPage = "/post";
        const queryParams = { title: req.params.title }; // /post:title and req.params.title 서로 동일한 값이어야함
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
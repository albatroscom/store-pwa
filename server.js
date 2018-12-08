const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev }); // { dev: dev }
const handle = app.getRequestHandler(); // all request

app
.prepare()
.then(()=>{
    const server = express();
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
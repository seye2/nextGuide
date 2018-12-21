// This file doesn't go through babel or webpack transformation.
const port = parseInt(process.env.PORT, 10) || 3000

// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
// const kr = require("./static/lang/kr.json");
// const en = require("./static/lang/en.json");
const fs = require("fs");
const express = require('express');;
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const server = express();
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const kr = fs.readFileSync("./static/lang/kr.json");
const en = fs.readFileSync("./static/lang/en.json");

if(dev) {
    server.get("/kr",(req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(kr);
    })

    server.get("/en",(req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(en));
    })

}

app.prepare().then(() => {

    server.get("*",(req, res) => {
        const parsedUrl = parse(req.url, true)
        handle(req, res, parsedUrl)
    })
    .listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
    /*
    createServer((req, res) => {
        console.log(req.url);
    }).listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
    */
})

import * as express from 'express'
import * as next from 'next'
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()
        // CUSTOM ROUTES GO HERE

        // server.get('/blog/:slug', (req: express.Request, res: express.Response) => {
        //     const mergedQuery = (<any>Object).assign({}, req.query, req.params)
        //     return app.render(req, res, '/blog', mergedQuery)
        // });
        // THIS IS THE DEFAULT ROUTE, DON'T EDIT THIS
        server.get('*', (req: express.Request, res: express.Response) => {
            return handle(req, res);
        });
        const port = process.env.PORT || 3000;

        server.listen(port, (err: Error) => {
            if (err) throw err;
            console.log(`> Ready on port ${port}...`)
        });
    });
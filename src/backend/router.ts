import { Client, ensureAuthenticated } from '@navikt/familie-backend';
import { Request, Response, Router } from 'express';
import path from 'path';
import { buildPath } from './config.js';
import { IService } from './serviceConfig.js';
import WebpackDevMiddleware from 'webpack-dev-middleware';

export default (
    authClient: Client,
    router: Router,
    servicer: IService[],
    middleware?: WebpackDevMiddleware.API<Request, Response>
) => {
    router.get('/version', (req, res) => {
        res.status(200).send({ version: process.env.APP_VERSION }).end();
    });

    // SERVICES
    router.get('/services', (req, res) => {
        res.status(200)
            .send({
                data: servicer.map((service: IService) => {
                    return {
                        displayName: service.displayName,
                        id: service.id,
                        gruppe: service.gruppe,
                        proxyPath: service.proxyPath,
                    };
                }),
                status: 'SUKSESS',
            })
            .end();
    });

    // APP
    if (process.env.NODE_ENV === 'development' && middleware) {
        router.get('*', ensureAuthenticated(authClient, false), (req: Request, res: Response) => {
            if (middleware.context.outputFileSystem.readFileSync) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(
                    middleware.context.outputFileSystem.readFileSync(
                        path.resolve(middleware.context.compiler.outputPath, `index.html`)
                    )
                );
                res.end();
            }
        });
    } else {
        router.get('*', ensureAuthenticated(authClient, false), (req: Request, res: Response) => {
            res.sendFile('index.html', { root: path.resolve(process.cwd(), buildPath) });
        });
    }

    return router;
};

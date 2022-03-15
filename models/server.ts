import express, {Application} from 'express';
import cors from "cors";
 
import userRoutes from '../routes/user';
import db from '../database/connection';

class Server{

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('DB Online');
        } catch (error) {
            console.log(error);
        }
    }

    middlewares(){
        // CORS
        this.app.use(cors());

        // BODY PARSE
        this.app.use(express.json());

        // PUBLIC FOLDER
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.apiPaths.users, userRoutes);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servers running on port ' + this.port);
        });
    }
}

export default Server;
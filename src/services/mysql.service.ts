import mysql from 'mysql';
import config from '../config/config';

const getConnection = () => {
    const connection = mysql.createConnection({
        user: config.DB_USER,
        password: config.DB_PASSWORD,
        database: config.DATABASE,
        host: config.DB_HOST,
        port: + config.DB_PORT
    });
    connection.connect((err)=>{
        if(err){
            throw err;
        }else{
            console.log('Connected to database');
        }
    });
    return connection;
}

const executeQuery = (query: string): Promise <any> => {
    return new Promise((resolve, reject) => {
        try{
            const connection = getConnection();
            connection.query(query, (err, result) => {
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        }catch(err){
            reject(err);
        }
    })
}
export default executeQuery;
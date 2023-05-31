import mysql from "mysql2/promise";

export async function query({query, values = []}){
    const pool = await mysql.createConnection({
        host: process.env.HOST,
        database: process.env.DATA_BASE,
        user: process.env.USER,
        password: process.env.PASSWORD,
    })

    try{
        const [results] = await pool.execute(query, values)
        pool.end();
        return results
    }catch(error){
        throw Error(error.message)
        return {error}
    }
}
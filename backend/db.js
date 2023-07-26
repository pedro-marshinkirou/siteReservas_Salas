const { MongoClient, ObjectId } = require("mongodb");
const dotenv = require("dotenv");
    dotenv.config();
 
let singleton;
 
async function connect() {
    if (singleton) return singleton;
 
    const client = new MongoClient(process.env.MONGO_HOST);
    //const client = new MongoClient(process.env.MONGO_HOST);
    console.log(process.env.MONGO_HOST);
    await client.connect();

 
    singleton = client.db(process.env.MONGO_DATABASE);
    //singleton = client.db(process.env.MONGO_DATABASE);
    console.log("conectado ao db");
    return singleton;
}

//const COLLECTION = "funcionarios";

async function findAll(COLLECTION) {
    const db = await connect();
    return db.collection(COLLECTION).find().toArray();
}

async function findOne(COLLECTION, id) {
    const db = await connect();
    return db.collection(COLLECTION).findOne({ _id: new ObjectId(id) });
}

async function findExpressao(filtro) {    

    const db = await connect();

    const expressaoregular = [];
    for (const chave in filtro) {
        expressaoregular[chave] = new RegExp(filtro[chave], "i");
      }
    
      console.log(expressaoregular);

    return db.collection("COLLECTION").find( { tags: { $all: expressaoregular } } ).toArray();    
        
}
 
async function Insertdb(COLLECTION, id) {
    
    const db = await connect();
    return db.collection(COLLECTION).insertOne(id);
    //return db.collection(COLLECTION).insert({ _id: new ObjectId(id) });
}

async function deleteDb(COLLECTION,id) {
    const db = await connect();
    return db.collection(COLLECTION).deleteOne({_id: new ObjectId(id)});
}

async function updateDb(COLLECTION, id, funcionarios) {
    const db = await connect();
    return db.collection(COLLECTION).updateOne({_id: new ObjectId(id)}, {$set: funcionarios});
}

async function updateDbd(COLLECTION, id, clientes) {
    const db = await connect();
    return db.collection(COLLECTION).updateOne({_id: new ObjectId(id)}, {$set: clientes});
}

async function updateDbds(COLLECTION, id, salas) {
    const db = await connect();
    return db.collection(COLLECTION).updateOne({_id: new ObjectId(id)}, {$set: salas});
}

module.exports = { findAll, findOne, findExpressao, Insertdb, deleteDb, updateDb, updateDbd, updateDbds } 
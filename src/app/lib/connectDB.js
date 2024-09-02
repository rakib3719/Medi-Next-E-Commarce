const { MongoClient, ServerApiVersion } = require('mongodb');

export const connectDB = async ()=>{

let db;
if(db) {
    return db;
};

try {
    const uri ="mongodb+srv://medinext:cVEsGmw2TXoNBRWz@cluster0.ngsjczb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });

      db = client.db("medinext")
    return db;
} catch (error) {
    console.log(error);
}


}
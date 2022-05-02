const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://<username>:<password>@cluster0.bznlr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    await findListing(client, "try12", "try12");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function findListing(client, Username, password) {
  const result = await client
    .db("Try")
    .collection("User")
    .findOne({ Username: Username, password: password });

  if (result) {
    console.log(result);
  } else {
    console.log(`No listings found with the username '${Username}'`);
  }
}

async function createListing(client, newUser) {
  const result = await client.db("Try").collection("User").insertOne(newUser);
  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
}

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

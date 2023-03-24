import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://drawyourmind:SGcZBqqtu4m0lY8J@clusters.v46crly.mongodb.net/?retryWrites=true&w=majority'
  );

  return client;
}

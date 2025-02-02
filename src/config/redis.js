import redis from "redis";

const client = redis.createClient({url : process.env.REDIS_URL});

client.on(`error`,(error) => console.log(`Redis error`,error));
client.on(`connect`,()=>console.log(`Connected to Redis`));

client.connect();

export default client;
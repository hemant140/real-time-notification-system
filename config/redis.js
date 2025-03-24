import Redis from "ioredis";

const redisPublisher = new Redis();
const redisSubscriber = new Redis();

export { redisPublisher, redisSubscriber }

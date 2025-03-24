import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: 'notification-service'
})
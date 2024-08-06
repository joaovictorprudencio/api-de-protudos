"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
prisma.$connect()
    .then(() => {
    console.log('Conexão realizada com sucesso');
})
    .catch((error) => {
    console.error('Erro ao se conectar ao banco de dados:', error);
});
exports.default = prisma;

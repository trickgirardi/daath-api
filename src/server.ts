import fastify, { FastifyInstance } from "fastify";

const server: FastifyInstance = fastify();

const esotericPhrases = [
  { id: "1", phrase: "O que está em baixo é como o que está em cima." },
  { id: "2", phrase: "Conhece-te a ti mesmo e conhecerás os deuses." },
  { id: "3", phrase: "A mente é tudo. Aquilo que você pensa, você se torna." },
  {
    id: "4",
    phrase:
      "A verdade não lhe será dada por ninguém, você tem que descobri-la por si mesmo.",
  },
  {
    id: "5",
    phrase:
      "Aquele que conhece os outros é sábio, aquele que se conhece a si mesmo é iluminado.",
  },
];

server.get("/", async () => {
  return { hello: "world" };
});

server.get("/phrase", async () => {
  const randomIndex = Math.floor(Math.random() * esotericPhrases.length);
  return esotericPhrases[randomIndex];
});

const start = async () => {
  try {
    const port = parseInt(process.env.PORT || "3000", 10);
    const address = await server.listen({ port });
    console.log(`✅ Servidor rodando em: ${address}`);
  } catch (err) {
    console.error("❌ Erro ao iniciar o servidor:", err);
    process.exit(1);
  }
};

if (require.main === module) {
  start();
}

export { server, start };

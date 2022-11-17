import express from 'express';

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  const { name } = request.body;
  return response.json({ message: `Hello ${name}` });
})

app.listen(3333, () => console.log("Server is running!"));

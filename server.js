import app from './app';

app.listen(3001, () => {
  console.log();
  console.log(`Escutando na porta ${3001}`);
  console.log(`CTRL + CLICK em http://localhost:${3001}`);
});

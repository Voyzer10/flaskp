const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <form action="/submit" method="post">
      <input name="name" placeholder="Enter your name" />
      <input name="email" placeholder="Enter your email" />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit', async (req, res) => {
  try {
    await axios.post('http://backend:5000/api', req.body);
    res.send('Data submitted successfully!');
  } catch (err) {
    res.send('Error submitting data.');
  }
});

app.listen(port, () => {
  console.log(`Frontend running on http://localhost:${port}`);
});

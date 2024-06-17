const express = require('express');
const app = express();
app.use(express.json());

app.post('/notifications', (req, res) => {
  console.log('Received notification:', req.body);
  res.status(200).send('Notification received');
});

app.listen(4001, () => {
  console.log('Notification service running on port 4001');
});

const express = require('express');
const app = express();

app.get('/data-source', (req, res) => {
  const data = {
    users: [
      { id: 1, role: 'admin' },
      { id: 2, role: 'user' }
    ]
  };
  res.json(data);
});

app.listen(4000, () => {
  console.log('Data source service running on port 4000');
});

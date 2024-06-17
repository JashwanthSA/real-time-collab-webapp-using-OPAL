const express = require('express');
const { OPALClient } = require('@opal/client');

const app = express();
app.use(express.json());

const opalClient = new OPALClient({
  baseURL: 'http://localhost:7002',  
  policyPath: 'http://github.com/permitio/opal-example-policy-repo/blob/master/rbac.rego',
});

app.post('/document', async (req, res) => {
  const { user, document } = req.body;
  try {
    const decision = await opalClient.evaluate({ input: { user, document } });
    if (decision.result.allow) {
      res.status(200).send('Document saved');
    } else {
      res.status(403).send('Access Denied');
    }
  } catch (error) {
    res.status(500).send('Error evaluating policy');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));

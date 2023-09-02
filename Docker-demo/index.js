const express = require('express');
const app = express();

app.get('/', (req, res) => 
    res.json({message: 'Docker is easy 🐳'})
);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`app listening on https://localhost:${port}`));
//sha256:481cd98e76e87c7f2600ff4a6a3fec030fbe4271da51138dd3b21ada460b5e
//sha256:b229f8c562abc02dfb2dbf2f9793c9904626a062529ce2e2c23de789f0a45b
//sha256:82469b2d76e468107c952223819f937dff8d8fcefecf599d077a42aeb384e3
//sha256:64eb65969bbb29f4292af9e1e9d3cf71965fdcce6ae4121aa74c46f26281c4
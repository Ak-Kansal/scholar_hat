const express = require("express");
const cors = require("cors");
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{const r =await axios.put('https://api.chatengine.io/users/',{username: username,secret: username,first_name: username},
    {headers: {"private-key":"ce5ce4cb-f177-4822-ab22-4de844eba6a2"}}
  );
return res.status(r.status).json(r.data)}
catch(e) {
    if (e.response) {
        return res.status(e.response.status).json(e.response.data);
    } else {
        return res.status(500).json({ message: "An unexpected error occurred" });
    }
}

});

app.listen(3001);
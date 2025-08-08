const express = require('express');
const app = express();

const user = [{
   name: "john",
   kidneys: [{
    healthy: false},
    {healthy: true 
   }]
}];
app.use(express.json());

app.get('/', (req, res) => {
   const johnkidneys = user[0].kidneys;
   const numberofkidneys = johnkidneys.length;
   let numberofhealthykidneys = 0;
   for(let i=0;i<johnkidneys.length;i++){
    if(johnkidneys[i].healthy){
      numberofhealthykidneys = numberofhealthykidneys + 1;
   }
  }
  const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys;
  res.json({
    numberofkidneys,
    numberofhealthykidneys,
    numberofunhealthykidneys
  })
})

app.post("/", (req ,res)=>{
  const ishealthy = req.body.ishealthy;
  user[0].kidneys.push({
    healthy: ishealthy
  })
  res.json({
    msg: "Done!"
  })
})
 app.listen(3000);


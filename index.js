const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json())

const port = process.env.PORT || 5000;

/* const handler = (req , res) =>{
        res.send('hello from node');
}

app.get('/',handler) ; */

app.get('/',(req , res)=> {
    res.send('hello I am learning node and express.');
});

app.get('/users', (req , res )=> {

    //use search query parameter
const search = req.query.search;
if(search){
    const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
    res.send(searchResult);
}
else{
    res.send(users)
}
   
});


//for post...app method

app.post('/users', (req , res)=> {
    const newUser = req.body;
   newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post',req.body)
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})

//for dynamic user
app.get('/users/:id' , (req , res) => {
    const id = req.params.id; 
    const user = users[id];
    res.send(user)
});

app.get('/fruits', (req , res ) => {
    res.send(['mango','orange','banana','apple'])
})

app.get('/fruits/mangoes/fazli', (req ,res) => {
    res.send('fazli is very halka misty halka tok')
})
const users = [
    {id: 0 , name: "shabana" , email: "shabana@gmail.com",phone : '2235644'},
    {id: 1 , name: "babna" , email: "babna@gmail.com",phone : '2235644'},
    {id: 2 , name: "shabnur" , email: "shabnur@gmail.com",phone : '2235644'},
    {id: 3 , name: "sujona" , email: "sujona@gmail.com",phone : '2235644'},
    {id: 4 , name: "soniya" , email: "soniya@gmail.com",phone : '2235644'},
    {id: 5 , name: "sorna" , email: "sorna@gmail.com",phone : '2235644'},
    {id: 6 , name: "susmita" , email: "susmita@gmail.com",phone : '2235644'},
    {id: 7 , name: "salman" , email: "salman@gmail.com",phone : '2235644'},
    {id: 8 , name: "suhana" , email: "suhana@gmail.com",phone : '2235644'}
];

app.listen(port,()=>{
    console.log('listening to port', port);
});


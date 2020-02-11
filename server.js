const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const url = require('url');

var Response = require('./models/response');
var Availability = require('./models/availability');
var RoomAvailability = require('./models/roomAvailability');
var ToDo = require('./models/ToDo');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 4000;

let ToDoList = [];

app.listen(port, () => {
    console.log(`listenting on port ${port}`);
})

app.get('/HelloWorld', ((req, res) => {
    res.send("Hello, World");
}))

app.get('/Hello/:name', (req, res) => {
    let name = req.params.name;
    let resp = new Response(200, {greeting: `Hello, ${name}`}, []);
    res.send(resp);
})

app.get('/api/availability/:fromDate/:toDate', (req, res) => {
    console.log("hitting it");
    let fromDate = new Date(req.params.fromDate);
    let toDate = new Date(req.params.toDate);

    let difference = getDaysBetweenDates(req.params.fromDate, req.params.toDate);
    
    let roomList = [];
    //SET ROOMS LOOP
    for(let r = 0; r < 10; r++){
        let availabilityList = [];
        let thisRoom = new RoomAvailability(1000000 + (r + 1), `Double Type ${r}`, null); 
        for(let i = 0; i < difference; i++){
            let thisAvailability = new Availability(100000 + (r + 1), `Double Type ${i}`, new Date(fromDate).setDate(fromDate.getDate() + i), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), 20);
            console.log(thisAvailability);
            availabilityList.push(thisAvailability);
        }
        thisRoom.availability = availabilityList;
        roomList.push(thisRoom);
    }
    console.log(roomList);
    let response = new Response(200, roomList, []);
    res.send(response);
})

app.get('/ToDo', (req, res) => {
    res.send(ToDoList);
}) 

app.post('/ToDo', (req, res) => {
    let thisToDo = req.body;
    ToDoList.push(thisToDo);
    console.log(ToDoList);

})

app.delete('/ToDo', (req, res) => {
    ToDoList = [];
    console.log("HERE:");
    res.send(ToDoList);
})

getDaysBetweenDates = (fromDate, toDate) => {
    var date1 = new Date(fromDate);
    var date2 = new Date(toDate);

    var differenceInTime = date2.getTime() - date1.getTime();
    var differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return differenceInDays;

}
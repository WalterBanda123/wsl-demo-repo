require("dotenv").config()
const express =  require("express")
const app = express()
const port = process.env.PORT
const bodyParser = require("body-parser")
const cors = require("cors")
const {StatusCodes}  = require("http-status-codes")


app.use(bodyParser.urlencoded({extended:false}))
app.use(cors("*"))
app.use(express.json())


app.get('/api/version-01/testing', async(request, response)=>{
	try{
		response.status(StatusCodes.OK).send("Testing was a success");
	}catch(error){
		response.send(error);
	}}
)
//No existing function
app.handleUsers()

app.listen(port , ()=>{
	console.log(`App running on port ${port}`)
})


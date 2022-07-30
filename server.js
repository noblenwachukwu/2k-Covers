const express = require('express')
const app = express() 
const cors = require('cors')
const PORT = 8000 

app.use(cors())


let covers = {
      '2012':{
        'name':'Derrick Rose/Blake Griffin/Kevin Durant',
        'gameName': '2k13'
     },
     'unknown':{
        'name':'Years 1999-2023',
        'gameName': 'No game'
     },
     '1999':{
        'name':'Allen Iverson',
        'gameName': '2k'
     },
     '2000':{
        'name':'Allen Iverson',
        'gameName': '2k1'
     },
     '2001':{
        'name':'Allen Iverson',
        'gameName': '2k2'
     },
     '2002':{
        'name':'Allen Iverson',
        'gameName': '2k3'
     },
     '2003':{
        'name':'Allen Iverson',
        'gameName': '2k4'
     },
     '2004':{
        'name':'Ben Wallace',
        'gameName': '2k5'
     },
     '2005':{
        'name':"Shaquille O'Neal",
        'gameName': '2k6'
     },
     '2006':{
        'name':"Shaquille O'Neal",
        'gameName': '2k7'
     },
     '2007':{
        'name':"Chris Paul",
        'gameName': '2k8'
     },
     '2008':{
        'name':"Kevin Garnett",
        'gameName': '2k9'
     },
     '2009':{
        'name':"Kobe 'bean' Bryant",
        'gameName': '2k10'
     },
     '2010':{
        'name':"Michael Jordan",
        'gameName': '2k11'
     },
     '2011':{
        'name':"Michael Jordan/Larry Bird/Magic Johnson",
        'gameName': '2k12'
     },
     '2013':{
        'name':"Lebron James",
        'gameName': '2k14'
     },
     '2014':{
        'name':"Kevin Durant",
        'gameName': '2k15'
     },
     '2015':{
        'name':"Steph 'The Chef' Curry/James Harden/Anthony Davis",
        'gameName': '2k16'
     },
     '2016':{
        'name':"Paul George",
        'gameName': '2k17'
     },
     '2017':{
        'name':"Kyrie Irving",
        'gameName': '2k18'
     },
     '2018':{
        'name':"Giannis 'The Greek Freak' Antetokounmpo",
        'gameName': '2k19'
     },
     '2019':{
        'name':"Anthony Davis",
        'gameName': '2k20'
     },
     '2020':{
        'name':"Damian Lillard/Zion Williamson",
        'gameName': '2k21'
     },
     '2021':{
        'name':"Luka Doncic",
        'gameName': '2k22'
     },
     '2022':{
        'name':"Devin Booker",
        'gameName': '2k23'
     }
}

app.get('/' , (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:year', (request,response)=>{
    const player = request.params.year
    if(covers[player]){
        response.json(covers[player].name)
    }else{
        response.json(covers['unknown'].name)
    }
})


app.listen(process.env.PORT || PORT,()=>{
  console.log(`my server is running on ${PORT} !!`)
})
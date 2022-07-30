document.querySelector('#button').addEventListener('click',getYear)


async function getYear(){
    const playName = document.querySelector('#year').value
    try{
       
        const response = await fetch(`https://the-2k-cover-years.herokuapp.com/api/${playName}`)
        const data = await response.json()
        console.log(data)

        document.querySelector('#name').innerText = data.name
        document.querySelector('#game').innerText = data.gameName

         }catch(error){
            console.log(error)
         }

}
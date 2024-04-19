const vehicle=document.getElementById('vehicle')   //get the element
const code=document.getElementById('code')

vehicles()                                          //call the function

async function vehicles(){        
       try{                                                     
      const response =await fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas/")    //fetch the api to get the results
      const detail= await response.json()                                                    //parse the results
     console.log(detail);


    detail.forEach((e)=>{                                                                  //for each loop to get the elements what we need to
      

        let codedata =document.createElement('div')
        codedata.innerText=`Code:${e.codigo}`
        vehicle.appendChild(codedata)


        let data =document.createElement('div')
        data.innerHTML=`<ul>
        <li>
        Vehicle Name:${e.nome}
        </li>
        
        </ul>`                                            //create the element to display the vehicles and codes
        vehicle.appendChild(data) 

    })
}
    
catch{
    console.log(err);               //catch the error
    
    }   
}

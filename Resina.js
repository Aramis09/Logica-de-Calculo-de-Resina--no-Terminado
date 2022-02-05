console.log("Esto es para que la renata vea")
    function Calculo_Resina_Kg(volumen,densidad){
        console.log("Este Programa devuelve los gramos de resina de acuerdo al volumen que usted necesita")
        console.log("La densidad usada sera de 1.08 (gr y centimetros)")
        if(densidad==="sd"){
            console.log("Recuerde que la densidad usada para el calculo es de 1.08")
            return ("La masa que usted necesita de resina es de  " + (1.08*volumen)+"gr" + ", y equivale a " + volumen/1000 + "L")
        }
               else{
                 console.log("se uso la densidad propuesta")
                 return ("La masa que usted necesita de resina es de  " + (densidad*volumen)+"gr" + ", y equivale a " + volumen/1000 + "L")
               }   
    }



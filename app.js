function convertir(){
    let valores = parseInt(document.getElementById("valor").value);
    const dolarAus = 50; 
    const dolarNz = 30;
    const euro = 100;
    const libra = 60;
    let resultado = 0;
    if(document.getElementById("aus").checked){
        resultado = valores*dolarAus;        
        alert("El cambio de divisa es: "+resultado+" Dólares Australianos");
    }
    else if(document.getElementById("nz").checked){
        resultado = valores*dolarNz;
                alert("El cambio de divisa es: "+resultado+" Dólares Kiwis");
    }
    else if(document.getElementById("euro").checked){
        resultado = valores*euro;
                alert("El cambio de divisa es: "+resultado+" Euros");
    }
    else if(document.getElementById("libra").checked){
        resultado = valores*libra;
                alert("El cambio de divisa es: "+resultado+" Libras");
    }
}




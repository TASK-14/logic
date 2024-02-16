function valid(){
    let clientName=document.forms["myForm"]["clientName"].value;
    let clientPassword=document.forms["myForm"]["clientPassword"].value;
    let clientAge=document.forms["myForm"]["clientAge"].value;
    let clientAddr=document.forms["myForm"]["clientAddr"].value;
    let contactNumber=document.forms["myForm"]["clientNumber"].value;
    //logig apply here 
    if(clientName==""){
       document.writeln("client name must not be null");
    }
    if(clientPassword==""){
        document.writeln("client password must not be null");

    }
    let cAge=Number(clientAg);
    if(cAge==0){
        document.writeln("age must be greator than 0 years");
    }
    if(clientAddr==""){
        document.writeln("address must be required");
    }
    let num=Number(contactNumber);
    if(contactNumber==""){
        document.write("number required");
    }
    else if(num<100000000){
        document.write("required 10 digit number");

    }
    else{

    }
    document.writeln("registration successful");
    
    
}
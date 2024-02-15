function valid(){
    let clientName=document.querySelector("#nameId").innerHTML;
    let clientPassword=document.querySelector("#clientPassword").innerHTML;
    let clientAge=document.querySelector("#clientAge").innerHTML;
    let clientAddr=document.querySelector("#clientAddr").innerHTML;
    let contactNumber=document.querySelector("#clientNum").innerHTML;
    //logig apply here 
    if(clientName.length==0){
       document.writeln("client name must not be null");
    }
    if(clientPassword.length==0){
        document.writeln("client password must not be null");

    }
    let cAge=Number(clientAg);
    if(cAge==0){
        document.writeln("age must be greator than 0 years");
    }
    if(clientAddr.length==0){
        document.writeln("address must be required");
    }
    Bigint num=Number(contactNumber);
    if(contactNumber.length==0){
        document.write("number required");
    }
    else if(num<100000000){
        document.write("required 10 digit number");

    }
    else{

    }
    document.writeln("rehistration successful");
    
    
}
function convert(){

                

    var x=document.getElementById("num").value;  //Catching the value

     var l= x-parseInt(x);

     if(l!== 0.5 && l!==0) //For displaying an alert to notify the user that the value is being rounded off.
     document.getElementById("alert1").innerHTML="Please note that your value is rounded off to the nearest whole integer or half decimal."

    x = Math.round(x * 2) / 2; //Coverts value into the nearest whole integer or the nearest integer.5

    var y = parseInt(x);

    var z= x-y; //Stores the 0.5 value if any, otherwise 0.


    if(x<=5){


            if (y=="")
            document.getElementById("alert2").innerHTML="Please enter a number!"

            else{
        

    for (var i =0; i<y; i++) //Prints the stars for the whole intergers
    {
        var img = document.createElement("IMG");
        img.setAttribute("src", "star.jpg");
        img.setAttribute("width", "65");
        img.setAttribute("height", "50");
        img.setAttribute("alt", "Star");
        document.body.appendChild(img); 
    }

    if (z==0.5){ //Checks if a 0.5 star is needed to be printed or not.
        var img = document.createElement("IMG");
        img.setAttribute("src", "halfstar.jpg");
        img.setAttribute("width", "50");
        img.setAttribute("height", "50");
        img.setAttribute("alt", "halfstar");
        document.body.appendChild(img);

    }


 }



}

else{
    document.getElementById("alert1").innerHTML="Please enter a number between 0 and 5"; //Alerts user to enter according to requirements.
}

    
    
}

  //To refesh page
    function refreshPage(){
     window.location.reload();
   } 

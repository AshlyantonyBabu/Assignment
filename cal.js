var mark_array=Array();
var total_mark=Array();
var percent=Array();
var grade=Array();
var status1=Array();
var SE_M=Array();

sem1=["C Programming","Discrete Mathematics","Applied Probability And Statistics","Principles Of Management","Digital Fundamentals","Programming Lab"];
sem2=["Object Oriented Programming","Data Structures","Operating System","Computer Organization And Architecture","Operations Research","OO Programming Lab"];
sem3=["Computer n/w","Software Engineering","Database Management S/m","Design and analysis algorithms","web programming","Database Lab"];
sem4=["APPLICATION DEVELOPMENT AND MAINTENANCE","BIG DATA TECHNOLOGIES","MOBILE COMPUTING","INTRODUCTION TO MACHINE LEARNING","ADVANCED JAVA PROGRAMMING","MOBILE APPLICATION DEVELOPMENT LAB"];
sem5=["WEB DATA MINING","E-COMMERCE","CRYPTOGRAPHY AND CYBER SECURITY"," PYTHON PROGRAMMING","ARTIFICIAL INTELLIGENCE","MINI PROJECT"];
sem6=[" PROJECT AND VIVA VOCE"];

function semestercall()
{
   var s= document.getElementById("sem").value;
   if(s=="S1")
   {
       sem_call(sem1);
       
   }
   if(s=="S2")
   {
    sem_call(sem2);
       
   }
   if(s=="S3")
   {
    sem_call(sem3);
       
   }
   if(s=="S4")
   {
    sem_call(sem4);
   }
   if(s=="S5")
   {
    sem_call(sem5);
       
   }
   if(s=="S6")
   {
    sem_call(sem6);
       
   }
}
function clear()
   {    
    text = " ";
       fLen=sem2.length;
       for (i = 0; i < fLen; i++) {
         
         document.getElementById("l"+i).innerHTML=text;
         document.getElementById("ll"+i).innerHTML=text;
         document.getElementById("s"+i).innerHTML=text;
         document.getElementById("mm"+i).innerHTML=text;
       }
       //document.getElementById("mm"+i).innerHTML=text;
   }
   
   function sem_call(SE_M)
   { 
       
       clear();
      
       fLen=SE_M.length;
       for (i = 0; i < fLen; i++) {
         text = SE_M[i]+"<br>";
         document.getElementById("l"+i).innerHTML=text;
         document.getElementById("ll"+i).innerHTML=text;
         document.getElementById("l"+i).style.display="block";
         document.getElementById("s"+i).style.display="block";
         document.getElementById("mm"+i).style.display="block";
         }
         if(fLen<sem1.length)
         {
             console.log(fLen);
             console.log(sem1.length);

             for(h=fLen;h<sem1.length;h++){
          
                document.getElementById("s"+h).style.display="none";
                document.getElementById("mm"+h).style.display="none";
                document.getElementById("l"+h).style.display="none";
             }
         }
      
   }
   
     /* for(k=6;k>fLen;k--)
      {
        
      }
    */
   

function marksheet()
{
   
    add=0;
    for(var i=0;i<sem1.length;i++)
    {
        mark=parseInt(document.getElementById("s"+i).value); 
     mark_array[i]=mark;
        ttmark=parseInt(document.getElementById("mm"+i).value);
        total_mark[i]=ttmark;

        per=(mark/ttmark)*100;
            percent[i]=per;
    
        if(percent[i]>=95)
        {
            grad="S";
            grade[i]=grad;

        }
        else if(percent[i]>=90){  grad="A+";grade[i]=grad;}
        else if(percent[i]>=85){ grad="A";grade[i]=grad;}
        else if(percent[i]>=80){ grad="B+";grade[i]=grad;}
        else if(percent[i]>=75){ grad="B";grade[i]=grad;}
        else if(percent[i]>=70){ grad="C+";grade[i]=grad;}
        else if(percent[i]>=65){ grad="C";grade[i]=grad;}
        else if(percent[i]>=55){ grad="D+";grade[i]=grad;}
        else if(percent[i]>=50){ grad="E";grade[i]=grad;}
        else if(percent[i]<=50){ grad="F";grade[i]=grad;}
        else{grad="error" ;grade[i]=grad;}
       
    count=0;
    
        if(grade[i]=="S"||grade[i]=="A+"||grade[i]=="A"||grade[i]=="B+"||grade[i]=="B"||grade[i]=="C"||grade[i]=="C+"||grade[i]=="D+"||grade[i]=="E"){
            console.log("passed");  
              count++;
          s="PASSED"
           status1[i]=s;
        }
        else
        {
            s="FAILED";
             status1[i]=s;
             count--;
           console.log("failed");    
        }
       name= document.getElementById("nam1").value;
        document.getElementById("n2").innerHTML=name;
        sme= document.getElementById("sem").value;
        document.getElementById("sem1").innerHTML=sme;
        ex= document.getElementById("examcode1").value;
        document.getElementById("ex1").innerHTML=ex;
  
   if(count==6)
   {
    m="PASSED";
document.getElementById("ll").innerHTML=m;
   }
    else{
        m="FAILED";
document.getElementById("ll").innerHTML=m;
    }
    }
    f=mark_array.length;
    console.log(f)
    for(l=0;l<f;l++)
    {
        g = grade[l]+"<br>";
        m1=mark_array[l]+"<br>";
        t=total_mark[l]+"<br>";


         document.getElementById("ma"+l).innerHTML=m1;
         document.getElementById("tt"+l).innerHTML=t;
         document.getElementById("gd"+l).innerHTML=g;


    }
   
} 
function validate(){
    var input=document.frm.n.value;
    
    if(input==null||input==" ")
    {
        alert("This Field is Mandatory");
    }
}
function pattmach(){
    var  letter=/^[A-Za-z]+$/;
      if(input.match(letter))
    {
        s=true;

    }
    else{
        alert( "Please provide Alphabets" );
    }
    }
    function excode(){

    var excd=document.frm.ex.value;
    var p=/^\(?[A-Z]{2}\)?[-.]?([0-9]{3})$/;
    if(excd.match(p))
    {
        s=true;
    }
    else{
        alert("First two letters should be uppercase alphbet and  last 3 letters should be digit " );
    }
    }
function valmark(mark2)
{
    var m=mark2;
    if(isNaN(m))
    {
        alert("This field should be a Number");
    }

}

    function displ(){
        document.getElementById("di").style.display="block";
    }

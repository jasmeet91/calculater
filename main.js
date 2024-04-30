//date of birth code
     let btnmonth = document.getElementById("month");
         btnmonth.addEventListener("click", function(){
            
          let set2 = setInterval(function(){
                let m = document.getElementById("month").value;
                 if(m == 1 | m == 3 | m == 5 | m == 7 | m == 8 | m == 10 | m == 12){
                    document.getElementById("twantynine").style.display = "block";
                    document.getElementById("tharty").style.display = "block";
                    document.getElementById("lastdate").style.display = "block";
                 }else if(m == 2){
                    document.getElementById("twantynine").style.display = "none";
                    document.getElementById("tharty").style.display = "none";
                    document.getElementById("lastdate").style.display = "none";
                 }else if(m == 4 | m == 6 | m == 9 | m == 11){
                    document.getElementById("twantynine").style.display = "block";
                    document.getElementById("tharty").style.display = "block";
                    document.getElementById("lastdate").style.display = "none";
                 }

                if(m != ''){  //check value in date
                    clearInterval(set2);  //stop setinterval
                 }
            }, 1000);

         });

   //current date code
         let btnmonth2 = document.getElementById("month2");
         btnmonth2.addEventListener("click", function(){
            
          let set3 = setInterval(function(){
                let m = document.getElementById("month2").value;
                 if(m == 1 | m == 3 | m == 5 | m == 7 | m == 8 | m == 10 | m == 12){
                    document.getElementById("twantynines").style.display = "block";
                    document.getElementById("thartys").style.display = "block";
                    document.getElementById("lastdates").style.display = "block";
                 }else if(m == 2){
                    document.getElementById("twantynines").style.display = "none";
                    document.getElementById("thartys").style.display = "none";
                    document.getElementById("lastdates").style.display = "none";
                 }else if(m == 4 | m == 6 | m == 9 | m == 11){
                    document.getElementById("twantynines").style.display = "block";
                    document.getElementById("thartys").style.display = "block";
                    document.getElementById("lastdates").style.display = "none";
                 }

                if(m != ''){  //check value in date
                    clearInterval(set3);  //stop setinterval
                 }
            }, 1000);

         });

      //get current date
       let dates = new Date();
       let days = dates.getDate();
       let months = dates.getMonth()+1;
       let years = dates.getFullYear();
       
       document.getElementById("month2").value = months;
       document.getElementById("day2").value = days;
       document.getElementById("year2").value = years;

       document.getElementById("month").value = months;
       document.getElementById("day").value = days;
       document.getElementById("year").value = years;

       document.getElementById("btn").addEventListener("click",function(){
             let m = parseInt(document.getElementById("month2").value);
             let d = parseInt(document.getElementById("day2").value);
             let y = parseInt(document.getElementById("year2").value);
            
             let dobm = parseInt(document.getElementById("month").value);
             let dobd = parseInt(document.getElementById("day").value);
             let doby = parseInt(document.getElementById("year").value);
             let month = [31,31,28,31,30,31,30,31,31,30,31,30,31];
          
              if(d < dobd){ // 1st condition es condition me aate hi month 1 month kam ho jayega
                  let a = m - 1;   //month -
                  let b = month[a] + d; //jo month - hokar aaya us month me kitne din hai + jo date hai
                  let c = b - dobd;
                  document.getElementById("daydiff").innerHTML = c;  // day 
               
                  if(a < dobm){
                     let aa = a + 12;
                     let bb = aa - dobm;
                     document.getElementById("monthdiff").innerHTML = bb;  // month

                     let aaa = (y - 1) - doby;
                    document.getElementById("yeardiff").innerHTML = aaa //year
                 }else{
                    let a = m - 1;
                    let b = a - dobm;
                    document.getElementById("monthdiff").innerHTML = b;  //month

                    let c = y - doby;
                    document.getElementById("yeardiff").innerHTML = c;  //year
                  }
             }else if(d == dobd | d > dobd){      //2nd condition
                 let a = d - dobd; 
                 document.getElementById("daydiff").innerHTML = a;  //day2
                  if(m < dobm){
                     let a = m + 12;
                     let b = a - dobm;
                     document.getElementById("monthdiff").innerHTML = b; //month2

                     let c = (y - 1) - doby; 
                     document.getElementById("yeardiff").innerHTML = c;  //year2
                }else{
                     let a = m - dobm;
                     document.getElementById("monthdiff").innerHTML = a; // month3

                     let b = y - doby;
                     document.getElementById("yeardiff").innerHTML = b;  //year
                  }
               }
           });  //button close

           //result show after click button
           document.getElementById("btn").addEventListener("click",function(){  
              document.getElementById("result").style.display = "block";
           });

     



    
    
  



     
    
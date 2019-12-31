 function fame()  {	 
 
  document.getElementById("fameTable").style.visibility = "visible";	
	document.getElementById('count0').innerHTML =hall[0].position; 
  document.getElementById('count1').innerHTML =hall[1].position; 
  document.getElementById('count2').innerHTML =hall[2].position; 
  document.getElementById('count3').innerHTML =hall[3].position; 
  document.getElementById('count4').innerHTML =hall[4].position;
  document.getElementById('count5').innerHTML =hall[5].position;
  document.getElementById('count6').innerHTML =hall[6].position;
  document.getElementById('count7').innerHTML =hall[7].position;
  document.getElementById('count8').innerHTML =hall[8].position;
  document.getElementById('count9').innerHTML =hall[9].position;

  document.getElementById('fame_names').innerHTML = 'noms'; 
  document.getElementById('name0').innerHTML =hall[0].nom; 
  document.getElementById('name1').innerHTML =hall[1].nom; 
  document.getElementById('name2').innerHTML =hall[2].nom; 
  document.getElementById('name3').innerHTML =hall[3].nom; 
  document.getElementById('name4').innerHTML =hall[4].nom;
  document.getElementById('name5').innerHTML =hall[5].nom;
  document.getElementById('name6').innerHTML =hall[6].nom;
  document.getElementById('name7').innerHTML =hall[7].nom;
  document.getElementById('name8').innerHTML =hall[8].nom;
  document.getElementById('name9').innerHTML =hall[9].nom;
   		

  document.getElementById('fame_score').innerHTML = 'essais '; 
  if (hall[0].points > 0){
      document.getElementById('score0').innerHTML = hall[0].points;
    } else document.getElementById('score0').innerHTML = null; 
   
   if (hall[1].points > 0){
      document.getElementById('score1').innerHTML =hall[1].points;  
    } else document.getElementById('score1').innerHTML = null; 
    
    if (hall[2].points > 0){
      document.getElementById('score2').innerHTML =hall[2].points;
    }else document.getElementById('score2').innerHTML = null; 
     
   if (hall[3].points > 0){
      document.getElementById('score3').innerHTML =hall[3].points;  
    }else document.getElementById('score3').innerHTML = null; 
     
    if (hall[4].points > 0){
      document.getElementById('score4').innerHTML =hall[4].points;
    }else document.getElementById('score4').innerHTML = null; 
    
    if (hall[5].points > 0){
      document.getElementById('score5').innerHTML =hall[5].points;  
    }else document.getElementById('score5').innerHTML = null; 
     
    if (hall[6].points > 0){
      document.getElementById('score6').innerHTML =hall[6].points;  
    }else document.getElementById('score6').innerHTML = null; 
     
    if (hall[7].points > 0){
      document.getElementById('score7').innerHTML =hall[7].points;
    }else document.getElementById('score7').innerHTML = null; 
    
   if (hall[8].points > 0){
      document.getElementById('score8').innerHTML =hall[8].points;  
    }else document.getElementById('score8').innerHTML = null; 
    
    if (hall[9].points > 0){
      document.getElementById('score9').innerHTML =hall[9].points;
    }else document.getElementById('score9').innerHTML = null; 
 
    document.getElementById('fame_time').innerHTML = 'temps passé';

    if (hall[0].tiempo < 900000){
        document.getElementById('temps0').innerHTML = hall[0].tiempo;
     }else document.getElementById('temps0').innerHTML = null; 

    if (hall[1].tiempo < 900000){
        document.getElementById('temps1').innerHTML = hall[1].tiempo;
     }else document.getElementById('temps1').innerHTML = null; 

    if (hall[2].tiempo < 900000){
        document.getElementById('temps2').innerHTML = hall[2].tiempo;
     }else document.getElementById('temps2').innerHTML = null; 

    if (hall[3].tiempo < 900000){
        document.getElementById('temps3').innerHTML = hall[3].tiempo;
     }else document.getElementById('temps3').innerHTML = null; 

    if (hall[4].tiempo < 900000){
        document.getElementById('temps4').innerHTML = hall[4].tiempo;
     }else document.getElementById('temps4').innerHTML = null; 

    if (hall[5].tiempo < 900000){
        document.getElementById('temps5').innerHTML = hall[5].tiempo;
     }else document.getElementById('temps5').innerHTML = null; 

    if (hall[6].tiempo < 900000){
        document.getElementById('temps6').innerHTML = hall[6].tiempo;
     }else document.getElementById('temps6').innerHTML = null; 

    if (hall[7].tiempo < 900000){
        document.getElementById('temps7').innerHTML = hall[7].tiempo;
     }else document.getElementById('temps7').innerHTML = null; 

    if (hall[8].tiempo < 900000){
        document.getElementById('temps8').innerHTML = hall[8].tiempo;
     }else document.getElementById('temps8').innerHTML = null; 

    if (hall[9].tiempo < 900000){
        document.getElementById('temps9').innerHTML = hall[9].tiempo;
     }else document.getElementById('temps9').innerHTML = null; 

} // fin parenthese FAME

 

  	


  	




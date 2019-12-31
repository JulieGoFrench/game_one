  
  function Main() 
  { var score = 1;
    document.getElementById('tapositDansleHall').innerHTML ='';
    var Mystery = Math.floor(Math.random() * 10);
    document.getElementById("montre").innerHTML = ''; 
    document.getElementById("fameTable").style.visibility = "hidden";
    document.getElementById("rules").innerHTML = 'Appuyez sur Go et trouvez le chiffre entre 0 et 10';

    document.getElementById("tapositDansleHall").innerHTML ='';
    document.getElementById('name').innerHTML ='';
    document.getElementById('eval_result').innerHTML ='';
    document.getElementById('game').innerHTML = '';
    document.getElementById('time').innerHTML = '';
    document.getElementById('mets_ton_nom').innerHTML = '';
    document.getElementById('fame_names').innerHTML ='';
    document.getElementById('fame_time').innerHTML ='';
    document.getElementById('fame_score').innerHTML ='';
    document.getElementById('fame_names').innerHTML = ''; 
    document.getElementById('name0').innerHTML =''; 
    document.getElementById('name1').innerHTML =''; 
    document.getElementById('name2').innerHTML =''; 
    document.getElementById('name3').innerHTML =''; 
    document.getElementById('name4').innerHTML ='';
    document.getElementById('name5').innerHTML ='';
    document.getElementById('name6').innerHTML ='';
    document.getElementById('name7').innerHTML ='';
    document.getElementById('name8').innerHTML ='';
    document.getElementById('name9').innerHTML ='';

    document.getElementById('score0').innerHTML =''; 
    document.getElementById('score1').innerHTML =''; 
    document.getElementById('score2').innerHTML =''; 
    document.getElementById('score3').innerHTML =''; 
    document.getElementById('score4').innerHTML ='';
    document.getElementById('score5').innerHTML ='';
    document.getElementById('score6').innerHTML ='';
    document.getElementById('score7').innerHTML ='';
    document.getElementById('score8').innerHTML ='';
    document.getElementById('score9').innerHTML ='';

    document.getElementById('temps0').innerHTML =''; 
    document.getElementById('temps1').innerHTML =''; 
    document.getElementById('temps2').innerHTML =''; 
    document.getElementById('temps3').innerHTML =''; 
    document.getElementById('temps4').innerHTML ='';
    document.getElementById('temps5').innerHTML ='';
    document.getElementById('temps6').innerHTML ='';
    document.getElementById('temps7').innerHTML ='';
    document.getElementById('temps8').innerHTML ='';
    document.getElementById('temps9').innerHTML ='';

    document.getElementById('count0').innerHTML =''; 
    document.getElementById('count1').innerHTML =''; 
    document.getElementById('count2').innerHTML =''; 
    document.getElementById('count3').innerHTML =''; 
    document.getElementById('count4').innerHTML ='';
    document.getElementById('count5').innerHTML ='';
    document.getElementById('count6').innerHTML ='';
    document.getElementById('count7').innerHTML ='';
    document.getElementById('count8').innerHTML ='';
    document.getElementById('count9').innerHTML ='';
    document.getElementById('legendfame').innerHTML ='';
    document.getElementById("montre").innerHTML ='';


    document.getElementById("mon_super_nom").onchange = function monNom()
    { 
      MonNom = document.getElementById('mon_super_nom').value; 
      document.getElementById('name').innerHTML = this.value;      
      document.getElementById("rules").innerHTML='';
      document.getElementById("rules").style.visibility = "hidden";

    }    

    document.getElementById('titre').innerHTML = 'Trouves le chiffre mystere entre 0 et 10 !  ';  
    document.getElementById('mets_ton_nom').innerHTML = 'mets ton nom ici  ';
    document.getElementById('mets_ton_chiffre').innerHTML = 'mets ton chifffre ici et appuies sur Entrée';
  	   
    clock_clock =0;
    notreTemps = setInterval(function(){ clock_clock++; document.getElementById("montre").innerHTML = clock_clock  }, 1000);
    document.getElementById("montre").style.visibility = "visible";   
    document.getElementById("start").onchange = function ()       
      {   document.getElementById('name').innerHTML = 'votre nom ? ';          	
          un_nombre  = parseInt(this.value);     
          document.getElementById('mets_ton_nom').innerHTML = '';
          document.getElementById('name').innerHTML = ' '; 
			
			if (un_nombre < Mystery ){
            	document.getElementById('titre').innerHTML = '';
				document.getElementById('eval_result').innerHTML = ' donnes un nombre plus grand ' + MonNom ;
            	score++;
            	un_nombre  = parseInt(this.value);            	          
            }

        	if (un_nombre > Mystery ){
            	document.getElementById('titre').innerHTML = ' ';
            	document.getElementById('eval_result').innerHTML = 'donnes un nombre plus petit ' + MonNom ;
            	score++;
            	un_nombre  = parseInt(this.value);            	       
            }

        	if (un_nombre === Mystery ) {
            	document.getElementById('titre').innerHTML = ' ';
            	tGlobal =clock_clock; 
            	document.getElementById('eval_result').innerHTML ="Bravo  "
            	+ MonNom + " ! tu as utilisé "   + score + " coups pour trouver le résultat qui est  : " +this.value + ". Tu as mis " + tGlobal +" secondes";
            	this.disabled = true;
            	document.getElementById('legendfame').innerHTML ='cliques sur le hall of fame des 10 meilleurs joueurs';
        		document.getElementById("montre").innerHTML =null;
                
        		for (var i =0; i<9; i++)
            	{
                	if (hall[i].tiempo > tGlobal)
                	{
                		var tmp1 = tGlobal; 
                		tGlobal = hall[i].tiempo;
                		hall[i].tiempo = tmp1 ;
                		var tmp2 = MonNom;
                		MonNom = hall[i].nom;
                		hall[i].nom = tmp2;
                		stockNom =tmp2;
                		var tmp3 = hall[i].points;
                		hall[i].points =score;
                		score = tmp3;
                        pseudo_bool =1; 
                		var tmp4 = hall[i].position;
                		tmp4B= tmp4.toString(); 
                		document.getElementById("tapositDansleHall").innerHTML = 'bravo ' + tmp2 + ' tu es en position n ' + tmp4B + ' du classement';
            		    document.getElementById("onFame").style.visibility = "visible";
                        document.getElementById("onFame").innerHTML =  "Regarde les autres joueurs du Hall of Fame";

                    }
				} // ferme FOR  
              document.getElementById("montre").style.visibility = "hidden";         
                              
            }// dernier if de victoire mystere true mon nombre		
    	document.getElementById("mon_super_nom").value = "";
    	
    	this.disabled = false;
    	this.value="";   	
            	
	}  // on change input
    
} // fermeture MAIN / boutonGo
 


  

  
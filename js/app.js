var app={
    init: function () {
        //recuperation de var
        app.button=document.createElement('button');
        app.button.innerHTML='ALEATOIRE';
        app.terrain=document.querySelector('#terrain_de_jeu');
        app.result=document.querySelector('#result');
        //declaration des var
        app.desrestant=5;
        app.jetez=[];
        app.score=0;
        app.continue=true;
        //occurence
        app.occ=[];
        //initialisation du tableau
        app.resetOcc();

        //dynamique 
        app.terrain.appendChild(app.button);
        app.button.addEventListener('click',app.jet);
    },
    resetOcc:function(){
        for(var i=0;i<6;++i)
        {
            app.occ[i]=0;
        }
    },
    //fonction de jet
    jet: function(){
        app.result.innerHTML='';
        console.log(app.desrestant);
        console.log(app.jetez);
        for(var i=0;i<app.desrestant;i++)
        {
            app.jetez[i]=Math.floor(Math.random()*(6-1)+1);
            app.result.innerHTML+='votre jet vaut : '+app.jetez[i]+'<br>';
            app.occurence(app.jetez[i]);
        }
        app.resultat();
        app.resetOcc();
        console.log('votre score est de : '+app.score);
        
        
    },
    //fonction d'occurence pour identifier les jet lancer 
    occurence: function(x)
    {
        for(var i=0;i<6;i++)
        {
            if(x==i+1)
            {
                app.occ[i]++;
                
                console.log('occurence pour la valeur '+(i+1)+' est : '+app.occ[i]);
            }
        }
        console.log(app.occ);
    },
    //fonction de REsultat
    resultat: function(){
        app.resOne(app.occ[0]);
        app.resTwo(app.occ[1]);
        app.resThree(app.occ[2]);
        app.resFour(app.occ[3]);
        app.resFive(app.occ[4]);
        app.resSix(app.occ[5]);
    },
    resOne: function(x)
        {
            if(x==5)
            {
                alert("Vous avez gagné !!!!");
                var rem=confirm("Voulez vous rejouer au Walou ?");
                if (rem==true)
                {
                    location.reload();
                }
            }
            else if (x==4)
            {
                app.score+=2000;
                app.desrestant-=4;
                
            }
            else if (x==3)
            {
                app.score+=1000;
                app.desrestant-=3;
                
            }
            else if (x==2)
            {
                app.score+=200;
                app.desrestant-=2;
                
            }
            else if (x==1)
            {
                app.score+=100;
                app.desrestant-=1;
                
            }
    },
    resFive: function(x)
        {
            if(x==5)
            {
                alert("Vous avez gagné !!!!");
                var rem=confirm("Voulez vous rejouer au Walou ?");
                if (rem==true)
                {
                    location.reload();
                }
            }
            else if (x==4)
            {
                app.score+=1000;
                app.desrestant-=4;
                
            }
            else if (x==3)
            {
                app.score+=500;
                app.desrestant-=3;
                
            }
            else if (x==2)
            {
                app.score+=100;
                app.desrestant-=2;
                
            }
            else if (x==1)
            {
                app.score+=50;
                app.desrestant-=1;
                
            }
    },
    resTwo: function(x)
        {
            if(x==5)
            {
                alert("Vous avez gagné !!!!");
                var rem=confirm("Voulez vous rejouer au Walou ?");
                if (rem==true)
                {
                    location.reload();
                }
            }
            else if (x==4)
            {
                app.score+=1000;
                app.desrestant-=4;
                
            }
            else if (x==3)
            {
                app.score+=200;
                app.desrestant-=3;
                
            }
            else if (x==2)
            {
               app.continue=false;
                
            }
            else if (x==1)
            {
                app.continue=false;
                
            }
    },
    resThree: function(x)
        {
            if(x==5)
            {
                alert("Vous avez gagné !!!!");
                var rem=confirm("Voulez vous rejouer au Walou ?");
                if (rem==true)
                {
                    location.reload();
                }
            }
            else if (x==4)
            {
                app.score+=1000;
                app.desrestant-=4;
                
            }
            else if (x==3)
            {
                app.score+=300;
                app.desrestant-=3;
                
            }
            else if (x==2)
            {
                
                app.continue=false;
                
            }
            else if (x==1)
            {
                
                app.continue=false;
            }
    },
    
    resFour: function(x)
        {
            if(x==5)
            {
                alert("Vous avez gagné !!!!");
                var rem=confirm("Voulez vous rejouer au Walou ?");
                if (rem==true)
                {
                    location.reload();
                }
            }
            else if (x==4)
            {
                app.score+=1000;
                app.desrestant-=4;
                
            }
            else if (x==3)
            {
                app.score+=400;
                app.desrestant-=3;
                
            }
            else if (x==2)
            {
                
                app.continue=false;
                
            }
            else if (x==1)
            {
                
                app.continue=false;
            }
    },
    
    resSix: function(x)
        {
            if(x==5)
            {
                alert("Vous avez gagné !!!!");
                var rem=confirm("Voulez vous rejouer au Walou ?");
                if (rem==true)
                {
                    location.reload();
                }
            }
            else if (x==4)
            {
                app.score+=1000;
                app.desrestant-=4;
                
            }
            else if (x==3)
            {
                app.score+=600;
                app.desrestant-=3;
                
            }
            else if (x==2)
            {
                
                app.continue=false;
                
            }
            else if (x==1)
            {
                
                app.continue=false;
            }
    }



};

app.init();
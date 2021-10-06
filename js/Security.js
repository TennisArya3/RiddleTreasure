class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(200,260);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(230,290);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code1")
        this.access2.position(700,350);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(700,380);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("Code1")
        this.access3.position(1100,290);
        this.access3.style('background', 'white');  

        //Debug the code to create the third button.
        this.button3 = createButton('Check');
        this.button3.position(1100,320);
        this.button3.style('background', 'lightgrey'); 

        this.acess4 = createInput("Code1")
        this.acess4.position(780,600);
        this.acess4.style('backgroud','white')

        this.button4 = createButton('Check');
        this.button4.position(800,630);
        this.button4.style('background','lightgrey');


    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        // On mousePressed, check the input condition. 
        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });


       this.button4.mousePressed(()  => {
            if(system.authenticate(acessCode4,this.acess4.value())){
              this.button4.hide();
              this.acess4.hide();
              score++;
            }

         });
     }

    }



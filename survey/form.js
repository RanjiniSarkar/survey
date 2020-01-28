class Form {

    constructor() {
      this.input = createInput("Name");
      this.input1 = createInput("Age");
      this.input2 =createInput("Email Id");
      this.button = createButton('READ');
      this.button1 = createButton('START');
      this.greeting = createElement('h2');
      this.context = createElement('h2');
      this.title = createElement('h2');
      this.question1=createElement('h2');
      this.answer1=createInput("ANSWER")
      this.question2=createElement('h2');
      this.button2 = createButton('NEXT');
      this.question3 = createElement('h2');
      this.button3 = createButton('NEXT');
      this.button4 = createButton('NEXT');
      this.button5=createButton('=<4')
      this.button6=createButton('=<8')
      this.button7=createButton('=10');
      this.question4=createElement('h2');
      this.question5=createElement('h2');
      this.button8=createButton('NEXT');
      this.button9=createButton('NEXT');
      this.answer2=createInput("ANSWER")
      this.question6=createElement('h2');
      this.question7=createElement('h2');
      this.question8=createElement('h2');
      this.question9=createElement('h2');
      this.question10=createElement('h2');
      this.button10=createButton('NEXT');
      this.button11=createButton('NEXT');
      this.button12=createButton('NEXT');
      this.button13=createButton('FINISH');
      this.greeting1=createElement('h2')


      
    
      
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button1.hide();
      this.context.hide();
      this.button2.hide()
      this.button3.hide()
      this.button4.hide()
      this.button5.hide()
      this.button6.hide()
      this.button7.hide()
      this.button8.hide()
      this.button9.hide()
      this.button10.hide()
      this.button11.hide() 
      this.button12.hide()
      this.button13.hide()


    }
  
    display(){
      this.title.html("SCHOOL SURVEY");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(500,200);
      this.input1.position(500,300);
      this.input2.position(500,400);
      this.button.position(500,500);
    
    
      
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        this.button1.position(700,200);
        this.greeting.html("Hello " + this.input.value())
        this.greeting.position(500,200);
        this.context.html("THIS IS GOING TO BE A SURVEY ABOUT YOUR SCHOOL AND SCHOOL LIFE AND WHAT CHANGES YOU WISH TO BRING OR WANT TO BRING, BE HONEST "+this.input.value())
        this.context.position(100,300);
      
       
       

      
      });
      this.button1.mousePressed(()=>{
        this.greeting.hide();
        this.context.hide();
        this.answer1.position(500,200)
        this.question1.position(500,100);
        this.question1.html("1. What was your favourite and most hated subject?  " )
        this.button1.hide();
        this.button2.position(500,600);
      })
      this.button2.mousePressed(()=>{
        this.question1.hide();
        this.question2.position(500,100)
        this.question2.html(" 2. Which classroom activities do you learn from the most? " )
        this.button3.position(500,600);
        this.button.hide()
      })

  
  this.button3.mousePressed(()=>{
    this.button3.hide()
    this.question2.hide();
    this.question3.position(500,100);
    this.question3.html(" 3. What are three things that can improve the class most?")
    this.button4.position(500,600);
    
  })
  
  this.button4.mousePressed(()=>{
    this.answer1.hide();
    this.button4.hide();
    this.button3.hide();
    this.question3.hide();
    this.question4.position(500,100);
    this.question4.html(" 4. Rate your teacher ? " )
    this.button5.position(500,200);
    this.button6.position(500,300);
    this.button7.position(500,400);


  
})


    
    this.button5.mousePressed(()=>{
      this.button5.hide();
      this.button6.hide();
      this.button7.hide();
      this.question4.hide()
      this.question5.position(500,100);
      this.question5.html(" 5. What is one thing you’d change about the class if you could?"  )
      this.button3.position(500,600)
      this.answer2.position(500,200)

    })
  



this.button6 .mousePressed(()=>{
  this.button5.hide();
  this.button6.hide();
  this.button7.hide();
  this.question4.hide()
  this.question5.position(500,100);
  this.question5.html(" 5. What is one thing you’d change about the class if you could?"  )
  this.button3.position(500,600)
  this.answer2.position(500,200)

})



 this.button7.mousePressed(()=>{
  this.button5.hide();
  this.button6.hide();
  this.button7.hide();
  this.question4.hide()
  this.question5.position(500,100);
  this.question5.html(" 5. What is one thing you’d change about the class if you could?"  )
  this.button8.position(500,600)
  this.answer2.position(500,200)
})



this.button8.mousePressed(()=>{
  this.question5.hide();
  this.button8.hide();
  this.question6.html(" 6. What advice would you give to students in next year’s class? ")
  this.question6.position(500,100);
  this.answer2.position(500,200)
  this.button9.position(500,600)

}
  )

this.button9.mousePressed(()=>{
  this.question6.hide();
  this.button9.hide();
  this.question7.html(" 7 What are you proud of accomplishing in class this year? ")
  this.question7.position(500,100);
  this.answer2.position(500,200)
  this.button10.position(500,600);

}
  )


this.button10.mousePressed(()=>{
  this.question7.hide();
  this.button10.hide();
  this.question8.html(" 8  What do you want to learn next? ")
  this.question8.position(500,100);
  this.answer2.position(500,200)
  this.button11.position(500,600);

}
  )


this.button11.mousePressed(()=>{
  this.question8.hide();
  this.button11.hide();
  this.question9.html(" 9 How often do you enjoy your schoolwork?  ")
  this.question9.position(500,100);
  this.answer2.position(500,200)
  this.button12.position(500,600);

}
  )
  this.button12.mousePressed(()=>{
    this.question9.hide();
    this.button12.hide();
    this.question10.html(" 10 What are the achievements you are proud of?")
    this.question10.position(500,100);
    this.answer2.position(500,200)
    this.button13.position(500,600);
  
  }
    )


this.button13.mousePressed(()=>{
  this.question10.hide();
  this.answer2.hide();
  this.greeting1.html("THANK YOU " + this.input.value() );
  this.greeting1.position(500,200);
  this.button13.hide();
  this.button13.hide();
  this.button12.hide();
  this.button11.hide();
  this.button10.hide();
  this.button9.hide();
  this.button8.hide();
  this.button7.hide();
  this.button6.hide();
  this.button5.hide();
  this.button4.hide();
  this.button3.hide();
  this.button2.hide();
  this.button1.hide();
  

})

}
}


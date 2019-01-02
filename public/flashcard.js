$(document).ready(function(data){
    
    $.ajax(
        { type: 'Get',
        url: '/flashcards',
        
        success: function(data){
            console.log(data.length)
            let triviaQuestion = data.length
            let i = 0 
            
            $(".question").html(data[i].question)
                $("#answer").html(data[i].answer)
            
            $(".answerButton").click(function(){
                $(".frontCard").hide()
                $(".backCard").show()
                
                
                
            })
            
            
            $(".nextButton").click(function(){
                if(i <= triviaQuestion){
                    i++
                }
                if(i >= triviaQuestion){
                    i=0
                }
                $(".question").html(data[i].question)
                $("#answer").html(data[i].answer)
                  console.log(i)
            $(".frontCard").show()
            $(".backCard").hide()
            // $('#myPopup').hide()
            })


            $(".popup").click(function(){
                let popup = document.getElementById("myPopup");
                 popup.classList.toggle("show");
                 $("#myPopup").html(data[i].hint)
            })
        
            
            $(".openForm").click(function(){
                document.getElementById("myForm").style.display = "block";
              })
        
        
        },
        
        
        error:function(err){
            console.log(err)
        }
    }
    );
    
})
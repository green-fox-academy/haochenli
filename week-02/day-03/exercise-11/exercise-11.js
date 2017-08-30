// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//
var height=8;
for (var i = 1 ; i <= height ; i++){
    var side = " ";    
    if(i%2==0){
        for(var j=0 ; j<9 ; j++){
            if(j%2==0){
                side+=" ";
            }
            else{
                side+="%";
            }
        }
    }
    else{
        for(var j=0 ; j<9 ; j++){
            if(j%2==0){
                side+="%";
            }
            else{
                side+=" ";
            }
        }
    }
    console.log(side);
}
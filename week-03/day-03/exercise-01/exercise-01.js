var httpRequest = new XMLHttpRequest();
var keyWord;
var data;
var button = document.getElementsByClassName("button")[0];



button.addEventListener("click",function(){
    keyWord = document.getElementsByClassName("input")[0].value;
    console.log(keyWord);
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', "http://api.giphy.com/v1/gifs/search?q="+keyWord+"&api_key=a86c52a370e0421bb7b907ced5666b60&limit=16");//get post  :http methods 
    httpRequest.send();//
});

function alertContents(){
    if (httpRequest.readyState === XMLHttpRequest.DONE){
        data = JSON.parse(httpRequest.response);
        for(let i = 0 ; i < data.data.length ; i++){
            document.getElementsByTagName("img")[i].src = data.data[i].images.fixed_height.url;
        }

       
    }
}



var image = document.getElementsByTagName("img");

for(let i = 0 ; i < image.length ; i++){
    var temp;
    image[i].addEventListener("click",function(){
        temp = image[i].src;
        if(data.data[i].images.fixed_height.url === image[i].src){
            image[i].src = data.data[i].images.downsized_still.url;
        }
        else{
            image[i].src = data.data[i].images.fixed_height.url;
        }
    });

    image[i].addEventListener("mouseenter",function(){
   
        if(data.data[i].images.downsized_still.url === image[i].src){
            image[i].src = data.data[i].images.fixed_height.url;
        }
        if(temp === data.data[i].images.downsized_still.url){
            image[i].addEventListener("mouseleave" , function(){
                image[i].src = temp;
            })

        }
    });
    
    
}
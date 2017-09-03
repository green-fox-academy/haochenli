
var button_left = document.getElementsByClassName("left button")[0];
//console.log(button_left);

var mainView = document.getElementsByClassName("main_view")[0];
var button_right = document.getElementsByClassName("right button")[0];

var flag_pic = 0 ;
button_right.addEventListener("click",function(){
    flag_pic++;
    if(flag_pic>5){
        flag_pic=0;
    }
    mainView.setAttribute("src",photolist[flag_pic].src);
    //console.log(flag_pic);
    change_content();
    syn1();
});


button_left.addEventListener("click",function(){
    flag_pic--;
    if(flag_pic<0){
        flag_pic=5;
    }
    mainView.setAttribute("src",photolist[flag_pic].src);
    //console.log(flag_pic);
    change_content();
    syn1();
});

var photolist = [
    {
        src: "fox.jpg",
        title: "Fox",
        description:"Foxes are small-to-medium-sized, omnivorous mammals belonging to several genera of the family Canidae. Foxes are slightly smaller than a medium-size domestic dog, with a flattened skull, upright triangular ears, a pointed, slightly upturned snout, and a long bushy tail (or brush)."
    },
    {
        src: "tirtle.jpg",
        title: "Tirtle",
        description:"Turtles are reptiles of the order Testudines (or Chelonii[3]) characterised by a special bony or cartilaginous shell developed from their ribs and acting as a shield.[4] \"Turtle\" may refer to the order as a whole (American English) or to fresh-water and sea-dwelling testudines (British English).[5]",
    },
    {
        src: "camel.jpg",
        title: "Camel",
        description:"A camel is an even-toed ungulate in the genus Camelus, bearing distinctive fatty deposits known as \"humps\" on its back. The three surviving species of camel are the dromedary, or one-humped camel (C. dromedarius), which inhabits the Middle East and the Horn of Africa;",
    },
    {
        src: "tiger.jpg",
        title: "Tiger",
        description:"The tiger (Panthera tigris) is the largest cat species, most recognizable for their pattern of dark vertical stripes on reddish-orange fur with a lighter underside. The species is classified in the genus Panthera with the lion, leopard, jaguar, and snow leopard. ",
    },
    {
        src: "wolf.jpg",
        title: "Wolf",
        description:"The gray wolf or grey wolf (Canis lupus),[a] also known as the timber wolf[3][4] or western wolf,[b] is a canine native to the wilderness and remote areas of Eurasia and North America. It is the largest extant member of its family, with males averaging 43–45 kg (95–99 lb) and females 36–38.5 kg (79–85 lb).",
    },
    {
        src: "lion.jpg",
        title: "Lion",
        description:"The lion (Panthera leo) is one of the big cats in the Felidae family and a member of genus Panthera. It has been listed as Vulnerable on the IUCN Red List since 1996, as populations in African range countries declined by about 43% since the early 1990s. Lion populations are untenable outside designated protected areas.",
    },
];


var index1 = document.getElementsByClassName("thumbnail index1")[0];
var index2 = document.getElementsByClassName("thumbnail index2")[0];
var index3 = document.getElementsByClassName("thumbnail index3")[0];
var index4 = document.getElementsByClassName("thumbnail index4")[0];
var index5 = document.getElementsByClassName("thumbnail index5")[0];
var index6 = document.getElementsByClassName("thumbnail index6")[0];


index1.addEventListener("click",function(){
    flag_pic=0;
    mainView.setAttribute("src",photolist[flag_pic].src);
    change_content();
    syn1();
});
index2.addEventListener("click",function(){
    flag_pic=1;
    mainView.setAttribute("src",photolist[flag_pic].src); 
    change_content();
    syn1();
});
index3.addEventListener("click",function(){
    flag_pic=2;
    mainView.setAttribute("src",photolist[flag_pic].src);
    change_content();
    syn1();
});
index4.addEventListener("click",function(){
    flag_pic=3;
   
    mainView.setAttribute("src",photolist[flag_pic].src);
    change_content();
    syn1();
});
index5.addEventListener("click",function(){
    flag_pic=4;
    mainView.setAttribute("src",photolist[flag_pic].src);
    change_content();
    syn1();
});
index6.addEventListener("click",function(){
    flag_pic=5;
    mainView.setAttribute("src",photolist[flag_pic].src);
    change_content();
    syn1();
});

function change_content(){
    var description = document.getElementsByClassName("description_tag")[0];
    description.textContent = photolist[flag_pic].description;
    var head = document.getElementsByTagName("h1")[0];
    head.textContent = photolist[flag_pic].title;
}

var BOTTOM = document.getElementsByClassName("bottom viewer")[0];
var BOTTOM_number = BOTTOM.getElementsByTagName("div");
var BOTTOM_photo = BOTTOM.getElementsByTagName("img");
syn1();



function syn1(){
    for(var j = 0 ; j < 6 ; j++){
        BOTTOM_number[j*2].setAttribute("style","box-shadow:null");
        BOTTOM_number[(j+1)*2-1].setAttribute( "style","border-color: transparent transparent transparent transparent");
    }
    for(var i = 1 ; i < 7 ; i++){
        var img = BOTTOM_photo[i-1];
        if(mainView.src === img.src){
            BOTTOM_number[i*2-1].setAttribute( "style","border-color: transparent transparent white transparent");
            BOTTOM_number[(i-1)*2].setAttribute("style","box-shadow:5px 5px 10px 5px #888888");
        }
    }
    
}




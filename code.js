$(window).ready( function() {
    $("#header").children().hide();
    let delayHero = setInterval(function(){
        $("#hero").removeClass("open");
        $("#hero").addClass("close");
        $("#header").children().fadeIn(1100);
    }, 300)
    let delayBlueBox = setInterval(function () {
        $("#blue-welcome").removeClass("close");
        $("#blue-welcome").addClass("open");
    }, 900)
    $(".expClose p").hide();
});

$(".experiences").mouseup(function(e){
    e.preventDefault();
    let expNum = this.id;
    if (($("#" + expNum + "").hasClass("expClose"))) {
        $(".experiences p").fadeOut(100);
        $(".experiences").addClass("expClose");
        $("#" + expNum + "").removeClass("expClose");
        $("#" + expNum + " p").fadeIn(600);
    }


    
});

let findAnchors = setInterval(function () {
    let blueRoom = $("#roomGallery").offset();
    let blueExperience = $("#expGallery").offset();
    let browserBottom = $(window).scrollTop() + $(window).height();
    if (blueRoom.top <= browserBottom) {
        $("#blue-room").removeClass("close");
        $("#blue-room").addClass("open");
    } else {
        $("#blue-room").removeClass("open");
        $("#blue-room").addClass("close");
    }
    if (blueExperience.top <= browserBottom) {
        $("#blue-exp").removeClass("close");
        $("#blue-exp").addClass("open");
    } else {
        $("#blue-exp").removeClass("open");
        $("#blue-exp").addClass("close");
    }
},300);

let year = new Date();
$("#year").html(year.getFullYear());

function myMap() {
    var villa = { lat: 39.284667, lng: 20.397861 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: villa
    });
    var marker = new google.maps.Marker({
        position: villa,
        map: map
    });
}

let floorNow = 1;
let photoNow = 1;

$("#galleryLeft").mouseup(function(){
    if (photoNow > 1) {
        photoNow --;
        showPhoto();
    }
});

$("#galleryRight").mouseup(function () {
    if (photoNow < 13) {
        photoNow++;
        showPhoto();
    }
});

$("#f1but").mouseup(function() {
    if (floorNow != 1) {
        $("#f1but").addClass("disabled");
        $("#f2but").removeClass("disabled");
        floorNow = 1;
        photoNow = 1;
        $("#floorTitle").html("1st");
        showPhoto();
    }
});

$("#f2but").mouseup(function () {
    if (floorNow != 2) {
        $("#f2but").addClass("disabled");
        $("#f1but").removeClass("disabled");
        floorNow = 2;
        photoNow = 1;
        $("#floorTitle").html("2nd");
        showPhoto();
    }
});

function showPhoto() {
    $("#roomGallery").css({
        "background": "url(img/floor" + floorNow + "/" + photoNow + ".jpg)",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center"
    });
};
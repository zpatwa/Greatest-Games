//images array
var images=["https://steamcdn-a.akamaihd.net/steam/apps/271590/capsule_616x353.jpg?t=1592866696","https://cdn.vox-cdn.com/thumbor/ipajjnzaEyDK1badzdbQ32MSxVI=/0x0:767x431/1200x800/filters:focal(323x155:445x277)/cdn.vox-cdn.com/uploads/chorus_image/image/63226878/0fe20042_0bb8_4781_82f4_7130f928b021.0.jpg","https://hb.imgix.net/12d1d9ac840e649ca0d749b0e5d8b403d310b10e.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=ea7b42b6e2b1535675ccca94ba8c0b95"];

//caption array
var captions = ["GTA V", "MINECRAFT", "SKYRIM"];

//First three images
images.forEach(function(item,index){
$('.imageHolder').append("<img src="+ images[index] + ">");
});

//first three captions
captions.forEach(function(item,index){
$('.imageHolder').append("<p>"+ captions[index] +"</p>");
    });    
//functions for click function
function refreshImages(){
    $('.inputImage').val("");
    $('.imageHolder').empty();
}
function refreshCaptions(){
$('.inputCaption').val("");
}
function addNewImage(){
    var addImage = $('.inputImage').val();
images.push(addImage);
}
function addNewCaption(){
var caption = $('.inputCaption').val();
    captions.push(caption);
    
    captions.forEach(function(item,index){
$('.captionHolder').append("<p>"+ captions[index] +"</p>");
    });    
} 

//Click function
$('.submit').click(function(){
addNewImage();
refreshImages();
      addNewCaption();
    refreshCaptions();
    
    images.forEach(function(item,index){
$('.imageHolder').append("<img src="+ images[index] + ">");
	});
    
});


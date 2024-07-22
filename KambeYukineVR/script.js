/*
$('#keyBox0').on('click', function() {
      	if ($('#keyBox0').attr('color') == 'red') {
          	$(this).attr('color', 'yellow');
        }else{
        	$(this).attr('color', 'red');
        }
      });

    let otamesi =  function(){
      	if ($(this).attr('color') == 'red') {
          	$(this).attr('color', 'yellow');
        }else{
        	$(this).attr('color', 'red');
        }
      };

    


      $('#keyBox1').on('click', otamesi);
    */

//SE音 https://soundeffect-lab.info/sound/anime/
let seikaiSE = new Audio("jyajya.mp3");
let sippaiSE = new Audio("pokupoku.mp3");



let isIntersecting = false;
let isAButtonDown = false;

$('#ctlR').on('raycaster-intersection', function(evt) {
  let intersectedEl = evt.originalEvent.detail.els[0];
  $(intersectedEl).click();
});


let colorList = ["#FF7F7F", "#6687CC", "#FFFFFF", "#AA7FFF", "#FFFF7F", "#66CC66", "#7CD3FF", "#FFB2E5"];

let changeColor = function(){
  for(let i=0; i<colorList.length; i++){
    if($(this).attr('color') == colorList[i]){
      $(this).attr('color', colorList[(i+1) % colorList.length]);
      break;
    }
  }
};

$('#keyBox0').on('click', changeColor);
$('#keyBox1').on('click', changeColor);
$('#keyBox2').on('click', changeColor);
$('#keyBox3').on('click', changeColor);
$('#keyBox4').on('click', changeColor);
$('#keyBox5').on('click', changeColor);

$('#kanryou').on('click', function(){
  if($('#keyBox0').attr('color') == '#FF7F7F' && 
    $('#keyBox1').attr('color') == '#6687CC' && 
    $('#keyBox2').attr('color') == '#FFFFFF' && 
    $('#keyBox3').attr('color') == '#AA7FFF' && 
    $('#keyBox4').attr('color') == '#FFFF7F' && 
    $('#keyBox5').attr('color') == '#66CC66'){

    $('#kanryou').attr('color', '#FF7F7F');
    seikaiSE.currentTime = 0;
    seikaiSE.play();
  }else{
    sippaiSE.currentTime = 0;
    sippaiSE.play();
  }

});




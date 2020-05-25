var allButtons = $('span')

for(let i=0;i<allButtons.length;i++){
  $(allButtons[i]).on('click', function(x){
    var index = $(x.currentTarget).index()
    console.log(index)
    var n = index * -1024
    $('#images').css({
      transform:'translate(' + n + 'px)'
    })
  })
}

var n = 0
var size = allButtons.length
var timer = setInterval(()=>{
  n += 1
  allButtons.eq(n % size).trigger('click')
  .addClass('red')
  .siblings('.red').removeClass('red')
},2000)

$('.window').on('mouseenter',function(){
  window.clearInterval(timer)
})
$('.window').on('mouseleave',function(){
  timer = setInterval(()=>{
    n += 1
    allButtons.eq(n % size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')
  },2000)
})

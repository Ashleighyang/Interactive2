let box1 = document.querySelector('box1')

box1.addEventListener('click',function() {
  
  this.animate([{
			background: getComputedStyle(this).background,
			width: getComputedStyle(this).width,
			height:  getComputedStyle(this).height
		},
    {
			background: black,
			width: '1670px',
			height: '806px'
		}], {
      duration: 250,
      iterations: 1,
      fill:'forwards'
      console.log('hello')
  });

})
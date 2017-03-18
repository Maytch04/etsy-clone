
// 	$.getJSON('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop&callback=?', function(data){
// console.log(data)

// })


var htmlStr = ""
for (var i = 0; i < 25; i++) {
   htmlStr += `<div class="productImage" id="pImage">
				<div class="productInfo">
					<ul>
						<li>Description</li>
						<li>Title</li>
						<li>Price</li>
					</ul>
				</div>`
}
$('.images').html(htmlStr)


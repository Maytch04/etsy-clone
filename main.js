$(document).ready(function() {
    $.getJSON('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop&callback=?', function(data) {

        var data = data.results
            // ${data[0].Images[0].url_570xN	 

        function addImageContainer() {
            var htmlStr = ""
            for (var i = 0; i < data.length; i++) {
                htmlStr += `<a href="#"><div class="productImage"  style="background-image:url('${data[i].Images[0].url_570xN}'); background-size: 260px 266px;
	    background-position-y: -14px; background-repeat: no-repeat;"></a><a href="#"><div class="love"></div></a><a href="#"><div class="hamb" ></div></a>
				<div class="productInfo">
					<ul>
						 <li>${data[i].description}</li>
						<li>${data[i].Shop.shop_name}</li>
						<li>$${data[i].price}</li>
					</ul>
				</div>
			</div>`
            }
            $('.images').html(htmlStr)
        }
        addImageContainer()

    })
})

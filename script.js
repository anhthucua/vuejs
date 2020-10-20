var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

// nhap content thu cong 
var data = {
  maximum: 98,
  labelArr: ['font-weight-bold', 'mr-2'],
  products : [
    {
      "id" : "532",
      "name": "Slicker Jacket",
      "description" : "wind and rain are no match for our organic bamboo slicker jacker for men and women",
      "price" : "125",
      "image_title" : "hehe",
      "image" : "https://binhminhdigital.com/StoreData/images/Product/tai-nghe-klipsch-t5-neckband-2.jpg"
    },
    {
      "id" : "532",
      "name": "Slicker Jacket",
      "description" : "wind and rain are no match for our organic bamboo slicker jacker for men and women",
      "price" : "12",
      "image_title" : "hehe",
      "image" : "https://binhminhdigital.com/StoreData/images/Product/tai-nghe-klipsch-t5-neckband-2.jpg"
    },
    {
      "id" : "532",
      "name": "Slicker Jacket",
      "description" : "wind and rain are no match for our organic bamboo slicker jacker for men and women",
      "price" : "100",
      "image_title" : "hehe",
      "image" : "https://binhminhdigital.com/StoreData/images/Product/tai-nghe-klipsch-t5-neckband-2.jpg"
    },
  ],
  cart: [],
  imgClass: "img-fluid",
  sliderStatus: false
}

var handleInput = new Vue({
  el: "#handlingInput",
  data: data,
  methods: {
    addItem: function(product) {
      var whichProduct;
      var existing = this.cart.filter(function(item, index) {
        if (item.product.id == Number(product.id)) {
          whichProduct = index;
          return true;
        } else {
          return false;
        }
      })
      if (existing.lenght) {
        this.cart[whichProduct].qty++
      } else {
        this.cart.push({product: product, qty: 1})
      }
    }
  },
  computed: {
    sliderState: function() {
      return this.sliderStatus ? 'd-flex' : 'd-none';
    }
  },
  filters: {
    currency: function(value) {
      return '$' + Number.parseFloat(value).toFixed(2);
    }
  }
})

// content bang ajax 
// var handleInputAjax = new Vue({
//   el: "#handlingInput",
//   data: {
//     maximum: 98,
//     products: null
//   },
//   mounted: function() {
//     // fetch not work IE 
//     fetch('https://hplussport.com/api/products/order/price')
//     .then(response => response.json())
//     .then(data => {
//       this.response = data;
//     })
//   }
// });


// template 1 
var template1 = new Vue({
  el: '#template-1',
  data: {
   name: "Fluffy Ski Coat"
  }
})

// binding 
var binding = new Vue({
  el: "#binding",
  data: data,
})

var properties = new Vue({
  el: "#properties",
  data: {
    slugText: "The Quick #&#$^ Brown 29"
  },
  computed: {
    now: function() {
      var date = new Date();
      return (
        String(date.getHours()) + 
        String(date.getMinutes()) + 
        String(date.getSeconds())
      );
    },
    slugetize: function() {
      return this.slugText
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-') + ' - ' + this.now
    }
    
  },
})


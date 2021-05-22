const app = Vue.createApp({
    data() {
      return {
        itemCategory: 'Choose a Producr Category',
        email: '',
        picture: 'logo.jpg',
        productList: {}    
      }
    },
    methods: {
      async getProducts(productId) {
        let productURL = "";
        let targetProductURI = productURL+ "data" + productId + ".json" // This code needs updating so it will point to a non-local api source
        
        const res = await fetch(targetProductURI)
        const { results } = await res.json()
   
  
        let tmp = Object.keys(results[0]);
        this.itemCategory = tmp.toString();
        if(this.itemCategory == "Blasters" ) this.productList  = results[0]["Blasters"];   // Temporary solution for Demo purpose only
        if(this.itemCategory == "Laser Sabers" )this.productList  = results[0]["Laser Sabers"];   // Temporary solution for Demo purpose only
        
        setTimeout(ready,1000) // resetClickEvents for each of the  newly loaded products.
        document.getElementById('modal-button').style.display ="block";
        var element = document.getElementById("products-container");
        element.classList.remove("scroll-hidden");
      },
    },
  })
  
  app.mount('#app')

  
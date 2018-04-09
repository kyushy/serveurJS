  new Vue({
  el: '#app', // id de la vue qu'on va contrôler
  data: {     // données / modèle qu'on va manipuler
    restaurants: []
  },
  mounted() { 
     console.log("--- MOUNTED ---");
     this.getDataFromServer();
  },

  methods: {
    getDataFromServer: function() { 
      console.log("--- GETTING DATA ---");
       fetch('/api/restaurants?page=1&pagesize=10')
       .then(response => {
         return response.json();
       })
       .then(data => {
         console.log(data);
         this.restaurants = data.data;
       }).catch(err => {
         console.log("erreur dans le get : " + err)
       });

    },
  }
});

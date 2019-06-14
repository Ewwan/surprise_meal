//Objects: Exercise
//Use JavaScript to randomly create a three-course meal based on what is available on a menu. 

const menu = {
    _courses: {
      appetizers: [],
          mains: [],
          desserts: []
    },
    get appetizers() {
        if(this._courses.appetizers){
         return this._courses.appetizers;
         } else {
           return 'There has been an error loading the appetizers.';
         }
    },
    set appetizers(appetizerIn){
      if(this._courses.appetizers){
        return this._courses['appetizers'].push(appetizerIn)
      } else {
        return 'Due to an unknown error we were not able to load the appetizers.'
      }
    },  
    get mains() {
        if(this._courses.mains){
         return this._courses.mains;
         } else {
           return 'There has been an error loading the main dishes.';
         }
    },
    set mains(mainIn) {
      if(this._courses.mains){
        return this._courses['mains'].push(mainIn)
      } else {
        return 'Due to an unknown error we were not able to load the main dishes.'
      }
    },  
    get desserts() {
        if(this._courses.desserts){
         return this._courses.desserts;
         } else {
           return 'There has been an error loading the desserts.';
         }
    },
    set desserts(dessertIn) {
      if(this._courses.desserts){
        return this._courses['desserts'].push(dessertIn);
      } else {
        return 'Due to an unknown error we were not able to load the desserts.'
      }
    },
    get courses(){
      if(this._courses){
         return {
           appetizers: this.appetizers,
           mains: this.mains,
           desserts: this.desserts
         }
         } else {
           return 'There has been an error loading the properties of the courses.';
         }
    },  
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      return this[courseName] = dish;
    },  
    getRandomDishFromCourse(courseName){
      const dishes = this[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    }, 
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal starts with ${appetizer.name}, followed by the main course: ${main.name} and with the dessert: ${dessert.name}. The total price for your meal is: ${totalPrice}€. Enjoy!`
    }
  }; 

  //create a menu:
menu.addDishToCourse('appetizers', 'shrimp', 5);
menu.addDishToCourse('appetizers', 'tapas', 3);
menu.addDishToCourse('appetizers', 'patatas', 6);
menu.addDishToCourse('mains', 'pisto', 28);
menu.addDishToCourse('mains', 'pasta salad', 21);
menu.addDishToCourse('mains', 'risotto', 29);
menu.addDishToCourse('desserts', 'ice-cream', 4);
menu.addDishToCourse('desserts', 'fruit salad', 6);

//generate a three-course random meal:
let meal = menu.generateRandomMeal();
console.log(meal);
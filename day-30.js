//https://www.codewars.com/kata/santaclausable-interface/train/javascript

function isSantaClausable(obj) {
   if (typeof obj.sayHoHoHo ==='function' && typeof obj.distributeGifts ==='function' && typeof obj.goDownTheChimney ==='function' ){
          return true;
   } else return false;
}



//https://www.codewars.com/kata/cylon-evolution/train/javascript

function Cylon(model){
   this.model = model;
   this.attack = function(){
      return  "Destroy all humans!";
   }
}

function HumanSkin(model){
   this.__proto__ = new Cylon(model);
   this.infiltrate = function(){
      return  "Infiltrate the colonies";
   }
}

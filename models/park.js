const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}


Park.prototype.hasDinosaurs = function () {
  return this.dinosaurs.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.unshift(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur) {
  this.dinosaurs.shift(dinosaur);
};

Park.prototype.dinosaurAttractingMostVisitors = function(){
  const dinosaur1 = this.dinosaurs[0].guestsAttractedPerDay;
  const dinosaur2 = this.dinosaurs[1].guestsAttractedPerDay;
  const dinosaur3 = this.dinosaurs[2].guestsAttractedPerDay;
    if (dinosaur2 > dinosaur1 && dinosaur2 > dinosaur3){
      return dinosaur2 }
    else if (dinosaur2 > dinosaur1 && dinosaur3 > dinosaur2){
      return dinosaur3;}
    else {
      return dinosaur1};

   // this.dinosaurs.guestsAttractedPerDay;
};

Park.prototype.dinosaursOfParticularSpecies = function(){
  for (const dinosaur of this.dinosaurs){
    if (dinosaur.species === 'herbivore'){
      return dinosaur.name
    }
  }
};

Park.prototype.removeDinosaursOfParticularSpecies = function(){
  for (const dinosaur of this.dinosaurs){
    if (dinosaur.species === 'herbivore'){
     this.dinosaur.shift(dinosaur);
   };
 };
};

module.exports = Park;

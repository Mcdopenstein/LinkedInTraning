/**
 * Create an object constructor function for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
 */

function Tent (
  name,
  size,
  color,
  weight,
  season,
  liviablity,
  materialWP,
  materialWR,
  doorOpen
) {
  this.name = name;
  this.size = size;
  this.color = color;
  this.weight = weight;
  this.season = season;
  this.liviablity = liviablity,
  this.material = {
    waterProof: materialWP,
    waterResistant: materialWR,
  };
  this.doorOpen = doorOpen;
  this.toggleDoor = function (doorStatus) {
    this.doorOpen = doorStatus;
  };
  this.newMaterial = function (waterProof, waterResistant) {
    this.material.waterProof = waterProof;
    this.material.waterResistant = waterResistant;
  };
}

const backpackTent = new Tent(
  "Smaller Tent",
  1,
  "grey",
  4,
  'summer',
  'good',
  false,
  true,
  false
);
console.log(backpackTent);

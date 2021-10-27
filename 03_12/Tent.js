/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

 class Tent {
    constructor(
      // Defines parameters:
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
    this.liviablity = liviablity;
    this.material = {
        waterProof : materialWP,
        waterResistant : materialWR,
    };
    this.doorOpen = doorOpen;

    }
    toggleDoor(doorStatus) {
      this.doorOpen = doorStatus;
    }
    newMaterial(waterProof, waterResistant) {
      this.material.materialWP = waterProof;
      this.material.materialWR = waterResistant;
    }
  }
  
  export default Tent;
  

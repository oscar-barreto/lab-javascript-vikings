// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health,
        this.strength=strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health = this.health-damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health, strength){
        super(health, strength)
        this.name = name

    }
    receiveDamage(damage){
        this.health=this.health-damage;
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return  "Odin Owns You All!"
    }
}


// Saxon
    class Saxon extends Soldier{
        receiveDamage(damage){
            this.health = this.health -damage
            if(this.health>0){
                return `A Saxon has received ${damage} points of damage`
            } else {
                return `A Saxon has died in combat`
            }
        }
    }

// War
class War {
    constructor() {
       this.vikingArmy = []
        this.saxonArmy = []
    }


    addViking(viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){

        const saxonRandomIndex = [Math.floor(Math.random()* this.saxonArmy.length)];

        const saxonSoldier = this.saxonArmy[saxonRandomIndex];
        const vikingSoldier = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

        const battleResult = saxonSoldier.receiveDamage(vikingSoldier.strength);

        if(saxonSoldier.health <= 0){
            this.saxonArmy.splice(saxonRandomIndex,1);
            return battleResult;
        } else {
            return battleResult;
        }
    }

    saxonAttack(){
        const vikingRandomIndex = [Math.floor(Math.random()* this.vikingArmy.length)];

        const vikingSoldier = this.vikingArmy[vikingRandomIndex];
        const saxonSoldier = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];

        const battleResult = vikingSoldier.receiveDamage(saxonSoldier.strength);

        if(vikingSoldier.health <= 0){
            this.vikingArmy.splice(vikingRandomIndex,1);
            return battleResult;
        } else {
            return battleResult;
        }
    }


    showStatus(){
        if (this.saxonArmy === 0){
            return "Vikings have won the war of the century!"
        }else if (this.vikingArmy === 0){
            return "Saxons have fought for their lives and survived another day..."
        }else (this.vikingArmy >= 1 && this.saxonArmy >= 1)
            return "Vikings and Saxons are still in the thick of battle."


    }
}

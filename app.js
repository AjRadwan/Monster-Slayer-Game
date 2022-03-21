//A method for creating radnom value
function GetRandomValue(max, min){
    return Math.floor(Math.random() * ( max - min) + min)
}


const app = Vue.createApp({
 data() {
     return {
         PlayerHealth: 100,
         MonsterHealth: 100,
         currentRounds: 0,
     }
 },
 computed:{
     MonsterBarStyle() {
         return{
             width: this.MonsterHealth + '%'
         }
     },

     PlayerBarStyle() {
         return{
          width: this.PlayerHealth + '%'
         }
     },
     MayUseSpecialAttack() {
         return this.currentRounds % 3 !== 0;
     }
 },
 methods: {
    attackMonster(){
        this.currentRounds++;
        const attackValue = GetRandomValue(5, 12);
        this.MonsterHealth -= attackValue;
        this.attackPlayer();
      },

      attackPlayer(){
          const attackValue = GetRandomValue(8, 15);
          this.PlayerHealth -= attackValue;
      },
      specialAttack(){
        this.currentRounds++;
        const attackValue = GetRandomValue(10, 15);
        this.MonsterHealth -= attackValue;
        this.attackPlayer();
      }
 },
});

app.mount('#game')
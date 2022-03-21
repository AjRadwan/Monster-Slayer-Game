//A method for creating radnom value
function GetRandomValue(max, min){
    return Math.floor(Math.random() * ( max - min) + min)
}


const app = Vue.createApp({
 data() {
     return {
         PlayerHealth: 100,
         MonsterHealth: 100,
     }
 },
 methods: {
    attackMonster(){
        const attackValue = GetRandomValue(5, 12);
        this.MonsterHealth -= attackValue;
        this.attackPlayer();
      },

      attackPlayer(){
          const attackValue = GetRandomValue(8, 15);
          this.PlayerHealth -= attackValue;
      }
 },
});

app.mount('#game')
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
         winners: null,
     }
 },
 computed:{
     MonsterBarStyle() {
         if(this.MonsterHealth < 0){
             return{
                 width: '0%'
             }
         }
         return{
             width: this.MonsterHealth + '%'
         }
     },
     PlayerBarStyle() {
        if(this.PlayerHealth < 0){
            return{
                width: '0%'
            }
        }
         return{
          width: this.PlayerHealth + '%'
         }
     },
     MayUseSpecialAttack() {
         return this.currentRounds % 3 !== 0;
     }
 },
watch:{
    PlayerHealth(value){
     if (value <= 0 && this.MonsterHealth <= 0 ) {
         //a draw
         this.winners = 'draw';
     } else if(value <= 0){
         //player lost
         this.winners = 'Monster';
     }
    },

    MonsterHealth(value){
    if(value <= 0 && this.PlayerHealth <= 0){
    //a draw
    this.winners = 'draw';
    }else if(value <= 0){ 
      //Monser lost
      this.winners = 'Player';
    }
    }
},

 methods: {
    attackMonster(){
        this.currentRounds++;
        const attackValue = GetRandomValue(7, 16);
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
      },
      healPlayer(){
          this.currentRounds++;
          const healValue = GetRandomValue(8, 20)
         if(this.PlayerHealth + healValue > 100){
         this.PlayerHealth = 100;
         }else{
            this.PlayerHealth += healValue;
         }
         this.attackPlayer();
        },
        newGame(){
            this.PlayerHealth = 100;
            this.MonsterHealth = 100;
            this.winners = null,
            this.currentRounds = 0;
        },
        surrender(){
            this.winners = 'Monster';
        }
 },
});

app.mount('#game')
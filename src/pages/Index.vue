<template>
  <q-page padding>
    <button 
      style="position: absolute; right: 10px"
      @click="counter++"
    >
      {{ counter }}
    </button>

    <input 
      v-model="message" 
      @keyup.esc="clearMessage" 
      @keyup.enter="alertMessage" 
      v-autofocus
      :class="{ 'error' : message.length > 15 }"
      ref="messageInput"
    />
    <button @click="clearMessage">CLEAR</button>
    <div>Length Now: {{ message.length }}</div>
    <h5 
      v-show="message.length"
      class="border-grey"
      :class="{ scale: isScale}"
      @mouseenter="scaleWord" 
      :style="errorStyle"
    >
      {{message}}
    </h5>

    <hr>

    <p>Uppercase message: {{ messageUppercase }} </p>
    <p>Lowercase message: {{ message | messageLowercase }}</p>
  </q-page>
</template>

<script>
  export default {
    data(){
      return {
        message: "Vue.js",
        isScale: false,
        counter: 0
      }   
    },
    computed: {
      // 雖然 messageUppercase 是 method，但我們將它放在computed屬性內，看成像是一個動態的變數
      messageUppercase(){
        console.log("messageUppercase is fire!");
        return this.message.toUpperCase()
      },
      errorStyle(){
        if(this.message.length > 15){
          return {
            'color': 'red',
            'backgroundColor': 'pink' 
          }
        }
      }
    },
    methods: {
      scaleWord(){
        this.isScale = !this.isScale
      },
      clearMessage(){
        this.message = ""
      },
      alertMessage(){
        alert(this.message)
      },
    },  
    filters: {
      messageLowercase(value){
        console.log("messageLowercase is fire!");
        return value.toLowerCase()
      }
    },
    directives: {
      autofocus:{
        inserted(el){
          el.focus()
        }
      }
    },
    mounted(){
      console.log(this.$refs);
      this.$refs.messageInput.className = "bg-green"
    },
  }
</script>
<style lang="scss">
  .scale{
    transition-duration: 500ms;
    font-size: 50px;
    padding: 20px;
  }
  .border-grey{
    border: 1px solid grey;
  }
  .error{
    color: red;
    background: pink;
  }
  input, button {
    font-size: 23px;
  } 
</style>
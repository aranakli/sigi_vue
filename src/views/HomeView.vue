<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1> <br> </h1>
    <HelloWorld msg="Bienvenidos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

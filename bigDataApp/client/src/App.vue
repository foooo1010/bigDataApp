<template>
    <div>
      <transition name="fade" mode="out-in" >
        <router-view ></router-view>
      </transition>    
    </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
    }
  },
}


</script>

<style lang='sass'>
body{
  margin: 0;
}


</style>

<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p class="testModule">Edit000 <code>components/HelloWorld.vue</code> t
  o test hot module replacement.</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style lang="scss">
/* use scss */
.testModule{
  color:pink;
}
</style>

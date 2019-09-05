<template lang="pug">
  div(class="hello")
    h1 {{ msg }}

    router-link(to='/') Home
    span  | 
    router-link(to='/admin') Admin
    span  | 
    router-link(to='/info') Information
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
      msg: 'Information',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

h1 {
  color: violet;
}
</style>

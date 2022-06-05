<template>
  <div class="container">
    <h1>Posts</h1>
    <hr>
    <p class="error" :if="error">{{ error }}</p>
    
  </div>
</template>

<script>
import PostService from '../PostService'

export default {
  name: 'post-component',
  data() {
    return {
      posts: [],
      error: "",
      text: ""
    }
  },
  async created() {
    try {
      this.posts = PostService.getPosts()

    }catch (err) {
      this.error = err.message
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>

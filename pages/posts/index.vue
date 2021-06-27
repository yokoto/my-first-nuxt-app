<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  fetch(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: '1',
              title: 'First Post',
              previewText: 'This is our first post!',
              thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgSqQ0c4byLoRA8siJbh0Yw35TOvk3ux2QfQ&usqp=CAU'
            },
            {
              id: '2',
              title: 'Second Post',
              previewText: 'This is our second post!',
              thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgSqQ0c4byLoRA8siJbh0Yw35TOvk3ux2QfQ&usqp=CAU'
            }
          ]
        });
      }, 1000)
      // reject(new Error())
    })
    .then(data => {
      context.store.commit('setPosts', data.loadedPosts)
    })
    .catch(e => {
      context.error(e)
    })
  },
  // created() {
  //   this.$store.dispatch('setPosts', this.loadedPosts)
  // }
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<template>
  <section class="featured-posts">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgSqQ0c4byLoRA8siJbh0Yw35TOvk3ux2QfQ&usqp=CAU"
      title="Hello there!"
      previewText="This my first post!"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgSqQ0c4byLoRA8siJbh0Yw35TOvk3ux2QfQ&usqp=CAU"
      title="Hello there - the second time!"
      previewText="This my second post!"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgSqQ0c4byLoRA8siJbh0Yw35TOvk3ux2QfQ&usqp=CAU"
      title="Hello there!- the third time"
      previewText="This my third post!"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
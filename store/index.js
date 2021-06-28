import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
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
            ])
            resolve({});
          }, 1000)
          // reject(new Error())
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore

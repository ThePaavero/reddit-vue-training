<template>
  <div id='app'>
    <h1>Latest TOP:</h1>
    <transition name='fade'>
      <div v-if='getItems()'>
        <ItemList/>
      </div>
    </transition>
  </div>
</template>

<script>
  import ItemList from './components/ItemList.vue'

  export default {
    name: 'app',
    components: {
      ItemList
    },
    mounted() {
      this.$router.push('/')
      setInterval(this.updateItems, 10000)
    },
    methods: {
      goHome() {
        this.$router.push('/')
      },
      updateItems() {
        this.fetchItems()
          .then((data) => {
            this.$store.commit('setItems', data)
          })
      },
      getItems() {
        const items = this.$store.state.items
        if (!items) {
          this.updateItems()
          return
        }
        return items
      },
      fetchItems() {
        console.log('Fetching items from reddit API...')
        const apiUrl = 'https://api.reddit.com/top'
        return new Promise((resolve, reject) => {
          fetch(apiUrl)
            .then((response) => {
              return response.json()
            })
            .then((data) => {
              resolve(data.data.children)
            })
        })
      }
    }
  }
</script>

<style>
  #app {
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    font-size: 2vw;
    padding: 5vh 5vw;
  }

  #app * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  h1 {
    font-size: 4vw;
    margin-bottom: 4vh;
  }

  @media screen and (max-width: 800px) {
    #app {
      font-size: 16px;
    }

    h1 {
      font-size: 30px;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

</style>

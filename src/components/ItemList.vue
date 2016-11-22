<template>
  <ul>
    <li v-for='item in items'>
      <md-card class='card'>
        <div class="md-title">
          {{ item.data.title }}
          <small>({{ item.data.score }})</small>
        </div>
        <div class="md-subhead">/u/{{ item.data.author }} @ /r/{{ item.data.subreddit }}</div>
        <md-card-media v-if='item.kind === "t3" && item.data.media' class='card-media'>
          <img :src='item.data.media.oembed.thumbnail_url' alt=''/>
        </md-card-media>
      </md-card>
    </li>
  </ul>
  </div>
</template>

<script>
  export default{
    props: [],
    data() {
      return {
        items: this.$store.state.items
      }
    },
    mounted() {
    },
    methods: {},
    components: {}
  }
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .card {
    padding: 20px;
    margin: 20px 0;
    background: rgba(255, 255, 255, 0.2);
  }

  .card-media {
    margin-top: 20px;
  }
</style>

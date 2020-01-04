<template>
<v-container>
  <form action="" method="post">
    
    <v-text-field
      label="Search"
      placeholder="숫자만 입력하세요 ex) 1080"
      persistent-hint
      v-model="searchNumber"
      outlined
      append-icon="fas fa-search"
      @click:append="search"
    >
    
    </v-text-field>
    <!-- <v-btn text>
      <v-icon>fas fa-search</v-icon>
    </v-btn> -->
  </form>
  </v-container>
</template>
<script>
import { eventBus } from '../main.js'
export default {
  data() {
    return {
      searchNumber : ""
    }
  },
  methods: {
    search() {
      this.$http.post('/api/Products/search', {searchNumber: this.searchNumber})
      .then((response) => {

        eventBus.$emit("searchedNumber", response.data)
    })

   
    }
  },
}
</script>
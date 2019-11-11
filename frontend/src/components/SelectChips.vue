<template>
<v-container>
<v-card
    max-width="400"
    class="mx-auto"
  >
    <v-card-text>
      <v-chip-group
        multiple
        column
        active-class="primary--text"
      >
     
        <v-chip filter v-for="tag in patternTags" :key="tag" @click="patternFilter(tag)">
          {{ tag }}
        </v-chip>
     
      </v-chip-group>
    </v-card-text>
  </v-card>
  </v-container>
</template>
<script>
export default {
   data () {
      return {
        selectedTags:[],
        patternTags: [
          'no-pattern',
          'difigne',
          'sdf',
          'Food',
          'Drawers',
          'Shopping',
          'Art',
          'Tech',
          'Creative Writing',
      ],
      }
   },
   methods: {
     patternFilter(tag) {
        if (this.selectedTags.indexOf(tag) !== -1) {
          this.selectedTags.splice(tag,1)
        }else{
            this.selectedTags.push(tag)
        }

       this.$http.post('/api/Products',{selectedTags:this.selectedTags})
        .then((response) => {

        this.Products = response.data    
        })
     }

    }
}

</script>
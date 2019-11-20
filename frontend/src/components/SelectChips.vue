<template>
<v-container>
<v-card
    
    class="mx-auto"
    v-for="(Tag, index) in Tags" :key="index"
  >
  <v-card-title> {{ Tag.title }} </v-card-title>
    <v-card-text>
      <v-chip-group
        multiple
        column
        active-class="primary--text"
      >
     
        <v-chip filter v-for="tag in Tag.tags" :key="tag" @click="Filter(Tag, tag)">
          {{ tag }}
        </v-chip>
     
      </v-chip-group>
    </v-card-text>
  </v-card>
  </v-container>
</template>
<script>
import { eventBus } from '../main.js'
export default {
  props: ["Tags"],
  data () {
    return {
      selectedTags:[
         {name: "PatternTag", selected:[]},
        {name: "ColorTag", selected:[]},
      ],
      selectedPatternTags: [] ,
      selectedColorTags: [] ,
    }
  },
 
 
   methods: {
     Filter(Tag, tag) {
       
       
       switch (Tag.name) {
         case "PatternTag":
           if (this.selectedPatternTags.indexOf(tag) !== -1) {
             this.selectedPatternTags.splice(tag, 1)
           }else{
             this.selectedPatternTags.push(tag)
           }
           break;
       
         case "ColorTag":
           if (this.selectedColorTags.indexOf(tag) !== -1) {
             this.selectedColorTags.splice(tag, 1)
           }else{
             this.selectedColorTags.push(tag)
           }
           break;
       }
       
        
       this.$http.post('/api/Products',{selectedPatternTags:this.selectedPatternTags, selectedColorTags: this.selectedColorTags})
        .then((response) => {
       
          
          eventBus.$emit("filteredProducts", response.data)
        
        })
     }

    }
}

</script>
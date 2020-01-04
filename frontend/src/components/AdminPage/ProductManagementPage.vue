<template>
  <v-container>
    <!-- new item button -->
    <v-dialog v-model="dialog" max-width="500px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark class="mb-2" id="hey" v-on="on">New Item</v-btn>
      </template>
      <v-card>
        <v-container>
          <form action="/api/admin/settings/product" method="post">
            <v-text-field
              label="Number"
              v-model="number"
              required
            ></v-text-field>
            <v-text-field
              label="Pattern"
              v-model="pattern"
              required
            ></v-text-field>
            <v-text-field
              label="Color"
              v-model="color"
              required
            ></v-text-field>
            <v-text-field
              label="Image"
              v-model="image"
              required
            ></v-text-field>
            <v-btn block outlined color="primary" @click="submit">
              SUBMIT
            </v-btn>
          </form>
        </v-container>
      </v-card>
    </v-dialog>


    <!-- data table -->
    <v-data-table
    :headers="headers"
    :items="fabrics"
    :items-per-page="15"
    class="elevation-1">
    
    <template v-slot:item.action="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          edit
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          delete
        </v-icon>
      </template>
    </v-data-table>


    <!-- edit item -->
    <v-dialog v-model="edit_dialog" max-width="500px">
      <v-card>
        <v-container>
          <form action="/api/admin/settings/product" method="put">
            <v-text-field
              label="Number"
              v-model="editedItem.number"
              required
            ></v-text-field>
            <v-text-field
              label="Pattern"
              v-model="editedItem.pattern"
              required
            ></v-text-field>
            <v-text-field
              label="Color"
              v-model="editedItem.color"
              required
            ></v-text-field>
            <v-text-field
              label="Image"
              v-model="editedItem.image"
              required
            ></v-text-field>
            <v-btn block outlined color="primary" @click="edit">
              SUBMIT
            </v-btn>
          </form>
        </v-container>
      </v-card>
    </v-dialog>


  </v-container>
</template>
<script>
export default {
  data () {
    return {
      dialog: false,
      edit_dialog:false,
      editedIndex:-1,
      number: '',
      pattern: '',
      color: '',
      image: '',
      on: true,
      headers: [
        { text: 'Number', sortable: true, value: 'number',},
        { text: 'Pattern', value: 'pattern' },
        { text: 'Color', value: 'color' },
        { text: 'Image', value: 'image' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      fabrics: [],
      editedItem: {
        number: '',
        pattern: '',
        color: '',
        image: '',
      },
      defaultItem: {
        number: '',
        pattern: '',
        color: '',
        image: '',
      },
      
    }
  },
  created () {
    this.$http.get('/api/admin/settings/product')
    .then((response) => {

      this.fabrics = response.data    
    })
  },
  
 methods: {    
    submit() {
      this.$http.post('/api/admin/settings/product',
       { number: this.number,pattern: this.pattern, color: this.color,image: this.image,})
      .then((response) => {
        
      })
      .catch(function (error) {
        console.log(error);
    })
      var newItem = {
        number: '',
        pattern: '',
        color: '',
        image: '',
      }
      newItem.number = this.number
      newItem.pattern = this.pattern
      newItem.color = this.color
      newItem.image = this.image

      this.dialog = false
      this.fabrics.unshift(newItem)
      
    },
    edit(item, editedItem) {
      var id = this.editedItem._id
      this.$http.put(`/api/admin/settings/product/${id}`,
       { number: this.editedItem.number,pattern: this.editedItem.pattern, color: this.editedItem.color,image: this.editedItem.image,})
      .then((response) => {

      })
      .catch(function (error) {
        console.log(error);
    })
      this.edit_dialog = false
      const index = this.fabrics.indexOf(item)
      this.fabrics[index+1].number = this.editedItem.number
      this.fabrics[index+1].pattern = this.editedItem.pattern
      this.fabrics[index+1].color = this.editedItem.color
      this.fabrics[index+1].image = this.editedItem.image

    },
    editItem (item) {
      this.editedIndex = this.fabrics.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.edit_dialog = true
    },

    deleteItem (item) {
      const index = this.fabrics.indexOf(item)
      this.editedItem = Object.assign({}, item)
      var id = this.editedItem._id
      if ( confirm('Are you sure you want to delete this item?') == true) {
        this.fabrics.splice(index, 1)
        this.$http.delete(`/api/admin/settings/product/${id}`,
        { number: this.editedItem.number,pattern: this.editedItem.pattern, color: this.editedItem.color,image: this.editedItem.image,})
        .then((response) => {

        })
        .catch(function (error) {
          console.log(error);
        })
        alert('정상적으로 삭제되었습니다.')
        
      }else {
        return alert("삭제가 취소되었습니다.");
      }
      
    },
    
  },

}
</script>
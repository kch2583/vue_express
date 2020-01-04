<template>
  <v-container>
    <v-dialog v-model="dialog" max-width="500px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark class="mb-2" id="hey" v-on="on">New Manager</v-btn>
      </template>
      <v-card>
        <v-container>
          <form action="/api/admin/settings/user" method="post">
            <v-text-field
              label="Name"
              v-model="name"
              required
            ></v-text-field>
            <v-text-field
              label="userID"
              v-model="userID"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              v-model="password"
              required
            ></v-text-field>
            <v-btn block outlined color="primary" @click="submit">
              SUBMIT
            </v-btn>
          </form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-data-table
      :headers="headers"
      :items="managers"
      :items-per-page="20"
      class="elevation-1">
      
      <template v-slot:item.edit="{ user }">
        <v-icon
          small
          class="mr-2"
          @click="editUser(user)"
        >
          edit
        </v-icon>
      </template>
      <template v-slot:item.delete="{ user }">
        <v-icon
          small
          @click="deleteUser(user)"
        >
          delete
        </v-icon>
      </template>
    </v-data-table>

    <v-dialog v-model="edit_dialog" max-width="500px">
      <v-card>
        <v-container>
          <form action="/api/admin/settings/user" method="put">
            <v-text-field
              label="Name"
              v-model="name"
              required
            ></v-text-field>
            <v-text-field
              label="userID"
              v-model="userID"
              required
            ></v-text-field>
            <v-text-field
              label="Grade"
              v-model="grade"
              required
            ></v-text-field>
            <v-btn block outlined color="primary" @click="submit">
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
      headers: [
        { text: 'Name', sortable: true, value: 'name',},
        { text: 'userID', value: 'userID' },
        { text: 'grade', value: 'grade' },
        { text: 'edit', value: 'edit' },
        { text: 'delete', value: 'delete' },
      ],
      managers: [],
      name:'',
      userID:'',
      password:'',
      grade:'B',
      dialog: false,
      edit_dialog:false,
      editedIndex:-1,
      on: true,
      editedUser: {

      }
    }
  },

  created() {
    this.$http.get('/api/admin/settings/user')
    .then((response) => {
      this.managers = response.data
    })
  },
  methods: {
    submit() {
      this.$http.post('/api/admin/settings/user',
       { name: this.name,userID: this.userID, password: this.password,grade: this.grade})
      .then((response) => {
        
      })
      .catch(function (error) {
        console.log(error);
    })
      var newUser = {
        name: '',
        userID: '',
        password: '',
        grade: '',
      }
      newUser.name = this.name
      newUser.userID = this.userID
      newUser.password = this.password
      newUser.grade = this.grade

      this.dialog = false
      this.managers.unshift(newUser)
      
    },
    edit(user, editedUser) {
      var id = this.editedUser._id
      this.$http.put(`/api/admin/settings/user/${id}`,
       { number: this.editedUser.number,pattern: this.editedUser.pattern, color: this.editedUser.color,image: this.editedUser.image,})
      .then((response) => {

      })
      .catch(function (error) {
        console.log(error);
    })
      this.edit_dialog = false
      const index = this.users.indexOf(item)
      this.users[index+1].name = this.editedUser.name
      this.users[index+1].userID = this.editedUser.userID
      this.users[index+1].grade = this.editedUser.grade

    },

    editUser (user) {
      this.editedIndex = this.users.indexOf(user)
      this.editedUser = Object.assign({}, user)
      this.edit_dialog = true
    },

    deleteUser (user) {
      const index = this.users.indexOf(user)
      this.editedUser = Object.assign({}, user)
      var id = this.editedUser._id
      confirm('Are you sure you want to delete this user?') && this.users.splice(index, 1)
      this.$http.delete(`/api/admin/settings/user/${id}`,
      {grade:this.grade})
      .then((response) => {

      })
      .catch(function (error) {
        console.log(error);
    })
      confirm('정상적으로 삭제되었습니다.')
    
    },
  }
}
</script>
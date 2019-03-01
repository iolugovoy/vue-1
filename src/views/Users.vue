<template>
  <div>
    <h2>Список пользователей</h2>

    <div v-if="!users.length" class="alert alert-warning">
      Загрузка...
    </div>

    <UserList v-else :users="users" />
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue';
import axios from 'axios';

export default {
  name: 'User',
  components: {
    UserList
  },
  data: () => ({
    users: []
  }),
  mounted() {
    this.loadUsers();
  },
  methods: {
    loadUsers() {
      axios
        .get('http://localhost:3004/users')
        .then(response => response.data)
        .then(users => {
          this.users = users;
        })
        .catch(error => console.error(error)); // eslint-disable-line no-console
    }
  }
};
</script>

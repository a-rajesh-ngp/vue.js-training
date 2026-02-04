<template>
    <div class="search">
        <input
            v-model="search"
            type="text"
            placeholder="Search by firstname..."
        />
    </div>
    <div>
        <UserTable 
            :users="filteredUsers" 
            :columns="columns" 
            @delete-user="userStore.deleteUser"
            >
        </UserTable>
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue';
    import UserTable from '../components/UserTable.vue'
    import { useUserStore } from '../stores/userStore';

    const userStore = useUserStore()
    const columns = [
        { key: 'firstname', label: 'Firstname' },
        { key: 'lastname', label: 'Lastname' },
        { key: 'email', label: 'Email' },
        { key: 'password', label: 'Password' },
        { key: 'age', label: 'Age' },
        { key: 'phone', label: 'Phone' }
    ]

    const search = ref('')
    const filteredUsers = computed(()=> {
        const q = search.value.trim()
        if(!q) return userStore.users;

        return userStore.users.filter(user=> 
            user.firstname
                .toLowerCase()
                .includes(q.toLowerCase())
        )
    })

</script>

<style scoped>
input {
    display: flex;
    align-items: center;
    margin-bottom: 15px; 
    padding: 8px; 
    width: 250px;
}
.search {
    display: flex;
    justify-content: center;
}

</style>
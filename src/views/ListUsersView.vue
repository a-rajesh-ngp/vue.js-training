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
            :users="paginatedUsersData" 
            :columns="columns" 
            @delete-user="userStore.deleteUser"
            >
        </UserTable>
    </div>
    <div class="pagination">
        <button @click="currentPage--" :disabled="currentPage===1">Prev</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="currentPage++" :disabled="currentPage===totalPages">Next</button>
    </div>

</template>

<script setup>
    import { computed, ref, watch } from 'vue';
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

    const recordsPerPage = 10
    const currentPage = ref(1)

    const totalPages = computed(()=> {
        const pages = Math.ceil(filteredUsers.value.length / recordsPerPage)
        return pages === 0 ? 1 : pages
    })

    const paginatedUsersData = computed(() => {
        const start = (currentPage.value -1) * recordsPerPage
        return filteredUsers.value.slice(start, start + recordsPerPage)
    })

    watch(filteredUsers, ()=> {
        currentPage.value=1
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
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore('user', () => {
    const users = ref([])

    const totalUsers = computed(()=> users.value.length)

    const addUser = (user)=> {
        users.value.push(user)
    }

    const deleteUser = (index) => {
        users.value.splice(index, 1)
    }

    const clearUsers = () => {
        users.value = []
    }

    return {
        users,
        totalUsers,
        addUser,
        deleteUser,
        clearUsers
    }

})
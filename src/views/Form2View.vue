<template>
    <div class="page">
    <div class="formDiv">
        <UserForm @submit = "addNewUser"/>
    </div>
    </div>
<!-- <UserTable 
    :users="userStore.users" 
    :columns="columns" 
    @deleteUser="userStore.deleteUser"
    >
</UserTable> -->
</template>

<script setup>
    import { useUserStore } from '../stores/userStore'
    import { useRouter } from 'vue-router'
    import UserForm from '../components/UserForm.vue'

    // onMounted(()=> {
    //     alert('onMounted called!')
    // })

    const router = useRouter()


    const userStore = useUserStore()
    // const handleDeleteUser = (index) => {
    //     users.value.splice(index, 1)
    // }

    const addNewUser = (userData) => {

        userStore.addUser(userData)
        router.push('/listUsers')
    }
</script>

<style scoped>
.formDiv {
    /* width: 100%; */
    display: flex;
    justify-content: center;
}
</style>
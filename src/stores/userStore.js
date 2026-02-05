import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore('user', () => {
    const users = ref([
        {
            firstname: "Rajesh",
            lastname: "Kumar",
            email: "rajesh@gmail.com",
            password: "pass123",
            age: 28,
            phone: "9876543210"
        },
        {
            firstname: "Anita",
            lastname: "Sharma",
            email: "anita@gmail.com",
            password: "anita@123",
            age: 25,
            phone: "9123456780"
        },{
            firstname: "Rajesh",
            lastname: "Kumar",
            email: "rajesh@gmail.com",
            password: "pass123",
            age: 28,
            phone: "9876543210"
        },
        {
            firstname: "Anita",
            lastname: "Sharma",
            email: "anita@gmail.com",
            password: "anita@123",
            age: 25,
            phone: "9123456780"
        },
        {
            firstname: "Amit",
            lastname: "Verma",
            email: "amit@gmail.com",
            password: "amit@456",
            age: 32,
            phone: "9988776655"
        },
        {
            firstname: "Priya",
            lastname: "Singh",
            email: "priya@gmail.com",
            password: "priya@789",
            age: 27,
            phone: "9090909090"
        },{
            firstname: "Rajesh",
            lastname: "Kumar",
            email: "rajesh@gmail.com",
            password: "pass123",
            age: 28,
            phone: "9876543210"
        },
        {
            firstname: "Anita",
            lastname: "Sharma",
            email: "anita@gmail.com",
            password: "anita@123",
            age: 25,
            phone: "9123456780"
        },
        {
            firstname: "Amit",
            lastname: "Verma",
            email: "amit@gmail.com",
            password: "amit@456",
            age: 32,
            phone: "9988776655"
        },
        {
            firstname: "Priya",
            lastname: "Singh",
            email: "priya@gmail.com",
            password: "priya@789",
            age: 27,
            phone: "9090909090"
        },
        {
            firstname: "Amit",
            lastname: "Verma",
            email: "amit@gmail.com",
            password: "amit@456",
            age: 32,
            phone: "9988776655"
        },
        {
            firstname: "Priya",
            lastname: "Singh",
            email: "priya@gmail.com",
            password: "priya@789",
            age: 27,
            phone: "9090909090"
        },{
            firstname: "Rajesh",
            lastname: "Kumar",
            email: "rajesh@gmail.com",
            password: "pass123",
            age: 28,
            phone: "9876543210"
        },
        {
            firstname: "Anita",
            lastname: "Sharma",
            email: "anita@gmail.com",
            password: "anita@123",
            age: 25,
            phone: "9123456780"
        },
        {
            firstname: "Amit",
            lastname: "Verma",
            email: "amit@gmail.com",
            password: "amit@456",
            age: 32,
            phone: "9988776655"
        },
        {
            firstname: "Priya",
            lastname: "Singh",
            email: "priya@gmail.com",
            password: "priya@789",
            age: 27,
            phone: "9090909090"
        },{
            firstname: "Rajesh",
            lastname: "Kumar",
            email: "rajesh@gmail.com",
            password: "pass123",
            age: 28,
            phone: "9876543210"
        },
        {
            firstname: "Anita",
            lastname: "Sharma",
            email: "anita@gmail.com",
            password: "anita@123",
            age: 25,
            phone: "9123456780"
        },
        {
            firstname: "Amit",
            lastname: "Verma",
            email: "amit@gmail.com",
            password: "amit@456",
            age: 32,
            phone: "9988776655"
        },
        {
            firstname: "Priya",
            lastname: "Singh",
            email: "priya@gmail.com",
            password: "priya@789",
            age: 27,
            phone: "9090909090"
        },
        {
            firstname: "Karthik",
            lastname: "Rao",
            email: "karthik@gmail.com",
            password: "kart@321",
            age: 30,
            phone: "9012345678"
        },
        {
            firstname: "Neha",
            lastname: "Gupta",
            email: "neha@gmail.com",
            password: "neha@111",
            age: 26,
            phone: "9345678901"
        }
    ])

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
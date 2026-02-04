<template>
    <div class="page">
    <div class="formDiv">
        <form class="form" @submit.prevent="addNewUser">
            <h2>CREATE NEW USER </h2> <br>
            <p>
                Enter firstname: <br>
                <input v-model="fname" type="text"> <br>
                <span v-if="errors.fname" >{{ errors.fname }}</span>
            </p> <br>
            <p>
                Enter lastname: <br>
                <input v-model="lname" type="text"> <br>
                <span v-if="errors.lname" >{{ errors.lname }}</span>
            </p> <br>
            <p>
                Full name: {{ fullname }}
            </p><br>
            <p>
                Enter age: <br>
                <input v-model="age" type="text"> <br>
                <span v-if="errors.age" >{{ errors.age }}</span>
            </p> <br>
            <p>
                Enter email: <br>
                <input v-model="email" type="email"> <br>
                <span v-if="errors.email">{{ errors.email }}</span>
            </p> <br>
            <p>
                Enter phone number: <br>
                <input v-model="phone" type="text"> <br>
                <span v-if="errors.phone">{{ errors.phone }}</span>
            </p> <br>
            <p>
                Enter password: <br>
                <input v-model="pwd" type="password"> <br>
                <span v-if="errors.pwd" >{{ errors.pwd }}</span>
            </p> <br>
            <div class="btn"> 
                <button  type="submit" >Create</button>
            </div>
        </form> <br>
    </div>
    <div class="table" v-if="users.length">
        <table >
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>age</th>
                    <th>Phone</th>
                </tr>
                    
            </thead>
            <tbody>
                <tr v-for="i in users">
                    <td>{{i.username}}</td>
                    <td>{{ i.email }}</td>
                    <td>{{ i.password }}</td>
                    <td>{{ i.age }}</td>
                    <td>{{ i.phone }}</td>
                </tr>
            </tbody>
        </table>
    </div><br>
    </div>
</template>

<script setup>
    import { ref, computed, watch, onMounted } from 'vue'

    // onMounted(()=> {
    //     alert('onMounted called!')
    // })
    
    

    const users = ref([])

    const fname = ref('')
    const lname = ref('')
    const fullname = computed(() => {
        return `${fname.value} ${lname.value}`.trim()
    })
    const email = ref('')
    const pwd = ref('')
    const phone = ref('')
    const age = ref('')
    const errors = ref({})

    const isValidForm = computed(() => {
        return (
            fname.value &&
            lname.value &&
            age.value &&
            email.value &&
            pwd.value &&
            phone.value &&
            Object.keys(errors.value).length === 0
        )
    })


    watch(fname, (val) => {
        if (!val) {
            errors.value.fname = 'Firstname is required'
        } else if (!/^[A-Za-z]+$/.test(val)) {
            errors.value.fname = 'Firstname should have only alphabets'
        } else {
            delete errors.value.fname
        }
    })
    watch(lname, (val) => {
        if (!val) {
            errors.value.lname = 'Lastname is required'
        } else if (!/^[A-Za-z]+$/.test(val)) {
            errors.value.lname = 'Lastname should have only alphabets'
        } else {
            delete errors.value.lname
        }
    })
    watch(age, (val) => {
        if (!val) {
            errors.value.age = 'Age is required'
        } else if (!/^[0-9]+$/.test(val)) {
            errors.value.age = 'Age should have only numbers'
        } else if (val < 1 || val > 100) {
            errors.value.age = 'Age should be between 1 and 100'
        } else {
            delete errors.value.age
        }
    })
    watch(email, (val) => {
        if (!val) {
            errors.value.email = 'Email is required'
        } else if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val)
        ) {
            errors.value.email = 'Invalid Email'
        } else {
            delete errors.value.email
        }
    })
    watch(pwd, (val) => {
        if (!val) {
            errors.value.pwd = 'Password is required'
        } else if (!/[a-zA-Z]/.test(val)) {
            errors.value.pwd = 'Password should have atleast one alphabet'
        } else if (!/[0-9]/.test(val)) {
            errors.value.pwd = 'Password should have atleast one number'
        } else if (!/[^a-zA-Z0-9]/.test(val)) {
            errors.value.pwd = 'Password should have atleast one special character'
        } else if (val.length < 6) {
            errors.value.pwd = 'Password length should be at least 6'
        } else {
            delete errors.value.pwd
        }
    })
    watch(phone, (val) => {
        if (!val) {
            errors.value.phone = 'Phone number is required'
        } else if (!/^[0-9]{10}$/.test(val)) {
            errors.value.phone = 'Phone number must be 10 digits'
        } else {
            delete errors.value.phone
        }
    })


    const validate = () => {
        return Object.keys(errors.value).length === 0
    }

    const addNewUser = () => {
        if (!validate()) return

        users.value.push({
            firstname: fname.value,
            lastname: lname.value,
            fullname: fullname,
            email: email.value,
            password: pwd.value,
            age: age.value,
            phone: phone.value
        })

        fname.value = ''
        lname.value = ''
        email.value = ''
        pwd.value = ''
        phone.value = ''
        age.value = ''

        errors.value = {}
    }
</script>


<style scoped>
.page {
    /* width: 100%; */
    /* background-image: url('@/assets/bgCreateUserView.avif'); */
}

.table {
    width: 100%;
    display: flex;
    justify-content: center;
}
table {
    border-collapse: collapse;
    /* max-width: 500px; */
    table-layout: fixed;
    border-radius: 8px;
    background-color: #ffffff;
}

th {
    background-color: rgb(157, 75, 175);
    color: whitesmoke;
    font-weight: 600;
}

th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;

    /* word-wrap: break-word;
    word-break: break-word;
    white-space: normal; */
    overflow-wrap: anywhere;
}

span {
    color: #dd0c0c;
}
h2 {
    width: 100%;
    display: flex;
    justify-content: center;
}
.formDiv {
    /* width: 100%; */
    display: flex;
    justify-content: center;
}
.form {
    width: 40%;
    background-color: white;
    padding: 20px;
    margin: 10px;
    border: 2px solid blueviolet;
    border-radius: 5px;
}

input {
    width: 50%;
    padding: 8px;
    margin: 10px 0;
    border: 2px solid blueviolet;
    border-radius: 5px;
    background-color: rgb(245, 228, 242);
    color: #080808;
}
.btn {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
}
button {
    width: 90%;
    padding: 10px;
    background-color: rgb(169, 80, 253);
    color: aliceblue;
    border-radius: 5px;
    
}
</style>
<template>
    <form class="form" @submit.prevent="submitForm">
        <h2>CREATE NEW USER </h2> <br>
        
        <p>
            Enter firstname: <br>
            <input v-model="fname"
                @input="fieldsTouched.fname = true"
                :class="{
                    'inputError': errors.fname,
                    'inputSuccess': fieldsTouched.fname && !errors.fname 
                }"
                type="text"> <br>
            <span v-if="errors.fname" >{{ errors.fname }}</span>
        </p> <br>
        <p>
            Enter lastname: <br>
            <input v-model="lname" 
                @input="fieldsTouched.lname = true"
                :class="{
                    'inputError': errors.lname,
                    'inputSuccess': fieldsTouched.lname && !errors.lname 
                }"
                type="text"> <br>
            <span v-if="errors.lname" >{{ errors.lname }}</span>
        </p> <br>
        <p>
            Full name: {{ fullname }}
        </p><br>
        <p>
            Enter age: <br> 
            <input v-model="age" 
                @input="fieldsTouched.age = true"
                :class="{
                    'inputError': errors.age,
                    'inputSuccess': fieldsTouched.age && !errors.age 
                }"
                type="text"> <br>
            <span v-if="errors.age" >{{ errors.age }}</span>
        </p> <br>
        <p>
            Enter email: <br>
            <input v-model="email" 
                @input="fieldsTouched.email = true"
                :class="{
                    'inputError': errors.email,
                    'inputSuccess': fieldsTouched.email && !errors.email 
                }"
                type="email"> <br>
            <span v-if="errors.email">{{ errors.email }}</span>
        </p> <br>
        <p>
            Enter phone number: <br>
            <input v-model="phone" 
                @input="fieldsTouched.phone = true"
                :class="{
                    'inputError': errors.phone,
                    'inputSuccess': fieldsTouched.phone && !errors.phone 
                }"
                type="text"> <br>
            <span v-if="errors.phone">{{ errors.phone }}</span>
        </p> <br>
        <p>
            Enter password: <br>
            <input v-model="pwd" 
                @input="fieldsTouched.pwd = true"
                :class="{
                    'inputError': errors.pwd,
                    'inputSuccess': fieldsTouched.pwd && !errors.pwd 
                }"
                type="password"> <br>
            <span v-if="errors.pwd" >{{ errors.pwd }}</span>
        </p> <br>
        <div class="btn"> 
            <button  type="submit" 

                :disabled="!isFormValid"
                :style="{
                    opacity: isFormValid ? 1 : 0.5,
                    cursor: isFormValid ? 'pointer' : 'not-allowed'
                }"
                >Create</button>
        </div>
    </form> <br>
</template>

<script setup>
    import { ref, computed, watch, onMounted } from 'vue'

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
    const emit = defineEmits(['submit'])


    const fieldsTouched = ref({
        fname: false,
        lname: false,
        age: false,
        email: false,
        pwd: false,
        phone: false
    })
    
    const isFormValid = computed(() => {
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
        if (!fieldsTouched.value.fname) return

        if (!val) {
            errors.value.fname = 'Firstname is required'
        } else if (!/^[A-Za-z]+$/.test(val)) {
            errors.value.fname = 'Firstname should have only alphabets'
        } else {
            delete errors.value.fname
        }
    })
    watch(lname, (val) => {
        if (!fieldsTouched.value.lname) return

        if (!val) {
            errors.value.lname = 'Lastname is required'
        } else if (!/^[A-Za-z]+$/.test(val)) {
            errors.value.lname = 'Lastname should have only alphabets'
        } else {
            delete errors.value.lname
        }
    })
    watch(age, (val) => {
        if (!fieldsTouched.value.age) return

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
        if (!fieldsTouched.value.email) return

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
        if (!fieldsTouched.value.pwd) return

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
        if (!fieldsTouched.value.phone) return

        if (!val) {
            errors.value.phone = 'Phone number is required'
        } else if (!/^[0-9]{10}$/.test(val)) {
            errors.value.phone = 'Phone number must be 10 digits'
        } else {
            delete errors.value.phone
        }
    })

    const validate = () => {
        const newErrors = {}

        if (!age.value) {
            newErrors.age = 'Age is required'
        } 

        if (!fname.value) {
            newErrors.fname = 'Username is required'
        } 

        if(!lname.value) {
            newErrors.lname = 'Lastname is required'
        }

        if (!email.value) {
            newErrors.email = 'Email is required'
            
        } 

        if (!pwd.value) {
            newErrors.pwd = 'Password is required'
        } 

        if (!phone.value) {
            newErrors.phone = 'Phone number is required'
        } 

        errors.value = newErrors
        return Object.keys(errors.value).length === 0
    }


    const submitForm = () => {
        if(!validate()) return

        emit('submit', {
            firstname: fname.value,
            lastname: lname.value,
            fullname: fullname.value,
            age: age.value,
            email: email.value,
            phone: phone.value,
            password: pwd.value
        })

        fname.value = ''
        lname.value = ''
        email.value = ''
        pwd.value = ''
        phone.value = ''
        age.value = ''

        errors.value = {}
        Object.keys(fieldsTouched.value).forEach(key => {
            fieldsTouched.value[key] = false
        })
    }
</script>



<style scoped>


.inputError {
    border-color: red;
    background-color: #ffecec;
}

.inputSuccess {
    border-color: green !important;
    background-color: #ecffec;
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
    background-color: rgb(75, 145, 175);
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
.form {
    width: 40%;
    background-color: white;
    padding: 20px;
    margin: 10px;
    border: 2px solid rgb(150, 223, 250);
    border-radius: 5px;
}

input {
    width: 50%;
    padding: 8px;
    margin: 10px 0;
    border: 2px solid rgb(150, 223, 250);
    border-radius: 5px;
    background-color: rgb(228, 240, 245);
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
    background-color: rgb(80, 187, 253);
    color: aliceblue;
    border-radius: 5px;
    
}
</style>
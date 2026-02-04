<template>
     <div class="table" v-if="users.length">
        <table >
            <thead>
                <tr>
                    <th v-for="col in columns">
                        {{ col.label }}
                    </th>
                </tr>
                    
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index">
                    <td v-for="col in columns" :key="col">
                        {{ user[col.key] }}
                    </td>
                    <td >
                        <button @click="$emit('delete-user', index)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div><br>
    
</template>

<script setup>
    const props = defineProps({
        users: {
            type: Array,
            required: true,
            default: () => []
        },
        columns: {
            type: Array,
            required: true,
            default: () => []
        }
    })
    const emit = defineEmits(['delete-user'])

</script>

<style scoped>
.table {
  display: flex;
  justify-content: center;
}

table {
  border-collapse: collapse;
  background: white;
}

th {
  background-color: rgb(75, 145, 175);
  color: white;
  padding: 8px;
}

td {
  border: 1px solid black;
  padding: 8px;
}

</style>
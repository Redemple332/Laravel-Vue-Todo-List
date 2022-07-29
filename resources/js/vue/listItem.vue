<template>
    <div class="item">
        <input  class="checkbox" type="checkbox" @change="updateCheck()" :v-model="checked" />
        <span  :class="[item.completed ? 'completed' : '', 'itemText']">{{ item.name}} {{item.completed}}</span>
        <button @click="removeItem()" class="trash-can">
                <font-awesome-icon icon="trash" />
        </button>
    </div>
</template>

<script>
import axios from 'axios'


export default {
   props: ['item'],
   methods: {
    updateCheck(){
        axios.put('api/item/' + this.item.id, {
            // other data here
        })
        .then (response => {
            if(response.status == 200) {
                this.$emit('itemchanged');
            }
        })
        .catch (error => {
            console.log(error)
        })
    },
    removeItem(){
        axios.delete('api/item/' + this.item.id)   
        .then (response => {
            if(response.status == 200) {
                this.$emit('itemchanged');
            }
        })
        .catch (error => {
            console.log(error)
        }) 
    }
    
   }
}

</script>

<style>
.completed {
    text-decoration: line-through;
    color: #999999;
}
.itemText{
    width:100%;
    margin-left: 20px;
}
.item{
    display:flex;
    justify-content: flex-start;
    align-items: center;
    
}
.trash-can {
    background-color: #e6e6e6;
    border: none;
    color: red;
    outline: none;
}
.checkbox{
    width:20px;
}
</style>
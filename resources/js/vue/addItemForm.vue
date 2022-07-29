<template>
    <div class="add-item">
        <input type="text" class="" v-model="name" />
        <font-awesome-icon 
            icon="plus-square"
            @click="addItem()"
            :class="[name ? 'active': 'inactive','plus']"
        />
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data: function (data) {
        return {
            name: ""
        }
    },
    methods: {
        addItem(){
            if(this.name == ''){
                return;
            }
            axios.post('api/item/store', {
                name: this.name
            })
            .then(response => {
                if(response.status == 201){
                    this.name = "";
                    this.$emit('reloadlist');
                }
            }).catch( error => {
                console.error(error)
            })
        }

        
    }
}
</script>

<style>
    .add-item {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1;
    }
    input {
        background-color: #f7f7f7;
        border: 0;
        outline: none;
        padding: 5px;
        margin-right: 10px;
        width: 100%;
    }
    .plus{
        font-size: 20px;
    }
    .active{
        color: #00CE25;
    }
    .inactive{
        color:#999999;
    }
</style>
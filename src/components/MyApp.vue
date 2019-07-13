/* eslint-disable */
<template>
    <div>
        <p>{{msg}}</p>
        <el-button @click="sayHello">hello</el-button>
    </div>
</template>

<script>
import Creator from '@/model/creator' 


export default {
    name: 'MyApp',
    data () {
        return {
            msg: 'it is myapp'
        }
    },

    methods: {
        sayHello () {
            let creator = new Creator('Ben', 12, 'boy')
            creator.say();
        }
    }

}
</script>


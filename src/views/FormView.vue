<template>
    <div class="w-full h-screen bg-no-repeat bg-cover bg-indigo-100" >
        <center><div class="justify-center border bg-white h-100 w-60 shadow-xl shadow-indigo-200 font-mono">
            <div class="m-5">
                <div class="bg-cyan-400 rounded h-5 w-40 shadow-sm hover:animate-bounce"><button><Router-link to="/">🫐HOME🍋</Router-link></button></div>
                <div class="bg-pink-400 rounded h-5 w-40 shadow-sm hover:animate-bounce mt-2"><button><Router-link to="/">👾PROFILE</Router-link></button></div>
                <div class="bg-emerald-400 rounded h-5 w-40 shadow-sm  mt-5">Count is : {{count}}</div>
                    <div class="mt-5">
                        <div class="bg-indigo-400 rounded h-5 w-40 hover:animate-bounce shadow-sm"><button @click="count++">ADD</button></div>
                        <div class="bg-amber-400 rounded h-5 w-40 hover:animate-bounce shadow-sm mt-2"><button @click="count = 0">RE:ZERO</button></div>
                        <div>this is onclick dropdown.</div>
                        <button class="bg-green-400 rounded h-5 w-40 hover:animate-bounce shadow-sm" @click="dropdown!=dropdown">AYOMATAFAKA</button>
                        <div class="bg-red-400 rounded animate:fadeIn h-5 w-25 hover:animate-bounce shadow-sm" v-if="dropdown">
                            this is dropdown.
                        </div>

                        <div>this is on change.</div>
                        <input class="p-2 border-2" type="text" @change="count++">
                        <div>
                            count is {{count}}
                        </div>

                        <div>this is v-model.</div>
                        <input class="p-2 border-2" v-model="name">
                        <div>{{name}}
                        </div>
                    </div>
            </div>
        </div></center>
    </div>
</template>

<script>
export default {
    data()
    {
        return {
            count: 0,
            dropdown: false,
        }
    }
}
</script>

<style>

</style>
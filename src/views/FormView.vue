<template>
    <div class="w-full h-screen bg-no-repeat bg-cover bg-indigo-100" >
        <nav class="fixed z-50 inset-x-0 top-0 h-20 w-screen bg-indigo-800 shadow md:flex md:items-center md:justify-between">
            <div class="flex justify-between items-center ">
            <span class="static text-white text-2xl font-bold font-mono cursor-pointer md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500" @click="dropdown=!dropdown">
                <a class="ml-5 text-3xl">👻/></a> BiMaPround
            </span>
            </div>
            <center><div class="bg-white shadow-lg shadow-indigo-900 rounded-lg w-60 my-auto text-2xl font-mono font-bold text-indigo-800 md:animate-bounce">
            FORM 
            </div></center>

            <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
            <li class="mx-4 my-6 md:my-0">
                <Router-link to="/"><button class="hover:animate-bounce hover:text-indigo-500 bg-white active:bg-indigo-500 active:text-white hover:bg-gray-100 rounded-lg w-24 font-black font-mono shadow-lg shadow-indigo-900">
                    🫐HOME🍋
                </button></Router-link>
            </li>
            <li class="mr-10 my-6 md:my-0">
                <Router-link to="/profile"><button class="hover:animate-bounce hover:text-indigo-500 bg-white active:bg-indigo-500 active:text-white hover:bg-gray-100 rounded-lg w-24 font-black font-mono shadow-lg shadow-indigo-900">
                    👾PROFILE
                </button></Router-link>
            </li>
            </ul>
        </nav>
        <div class="fixed sidebar top-0 bottom-0 lg:left-0 left-[-300px] duration-1000 p-2 w-[300px] overflow-y-auto text-center bg-white shadow h-screen" v-if="dropdown">
            
            <div class="text-indigo-400 text-xl mt-24">
                <div class="p-2.5 mt-1 flex items-center rounded-md ">
                    <h1 class="text-[15px]  ml-3 text-xl text-indigo-400 font-bold">🙀 BiMaPround SideBar</h1>
                </div>
                <hr class="my-2 text-white">

                <div>
                    <Router-link to="/"><div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:text-white hover:bg-indigo-200">
                    <span class="text-[15px] ml-4 text-indigo-400">Home</span>
                    </div></Router-link>

                    <Router-link to="/profile"><div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:text-white hover:bg-indigo-200">
                    <span class="text-[15px] ml-4 text-indigo-400">Profile</span>
                    </div></Router-link>
                    <hr class="my-4 text-gray-600">

                    <a href="https://www.youtube.com/watch?v=_U676XxCmkE&list=PL-P1AwMMwKz2OmjEJoTj0-HYrL9erxFcy"><div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:text-white hover:bg-indigo-200">
                    <span class="text-[15px] ml-4 text-indigo-400 ">Listening to Music</span>
                    </div>    
                    </a>
                    <a href="https://github.com/Moradoph"><div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:text-white hover:bg-indigo-200">
                    <span class="text-[15px] ml-4 text-indigo-400 ">Github</span>
                    </div>
                    </a>
                    <div class="relative h-40 w-40 rounded overflow-hidden bg-white mx-auto my-10">
                    <img class="h-full bg-cover bg-center bg-no-repeat" src="https://upload.wikimedia.org/wikipedia/commons/9/97/KU_Logo.png" alt="logo">
                    </div>
                </div>
            </div>
        </div>
        //
        <center><div class="static md:flex mt-20 justify-center border bg-white h-100 w-60 shadow-xl shadow-indigo-200 font-mono">
            <div class="m-5">
                <div class="bg-cyan-400 rounded h-5 w-40 shadow-sm hover:animate-bounce"><button><Router-link to="/">🫐HOME🍋</Router-link></button></div>
                <div class="bg-pink-400 rounded h-5 w-40 shadow-sm hover:animate-bounce mt-2"><button><Router-link to="/profile">👾PROFILE</Router-link></button></div>
                <div class="bg-emerald-400 rounded h-5 w-40 shadow-sm  mt-5">Count is : {{count}}</div>
                    <div class="mt-5">
                        <div class="bg-indigo-400 rounded h-5 w-40 hover:animate-bounce shadow-sm"><button @click="count++">ADD</button></div>
                        <div class="bg-amber-400 rounded h-5 w-40 hover:animate-bounce shadow-sm mt-2"><button @click="count = 0">RE:ZERO</button></div>
                        <div>this is onclick dropdown.</div>
                        <button class="bg-green-400 rounded h-5 w-40 hover:animate-bounce shadow-sm" @click="google=!google">AYOMATAFAKA</button>
                        <div class="bg-red-400 rounded animate:fadeIn h-5 w-40 hover:animate-bounce shadow-sm" v-if="google">
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
            google: false,
        }
    }
}
</script>

<style>

</style>
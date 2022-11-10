<template>
    <div class="relative justify-center w-screen h-screen bg-cover bg-indigo-100">
        <nav class="fixed z-50 inset-x-0 top-0 h-20 w-screen bg-indigo-800 shadow md:flex md:items-center md:justify-between">
            <div class="flex justify-between items-center ">
            <span class="static text-white text-2xl font-bold font-mono cursor-pointer md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500" @click="dropdown=!dropdown">
                <a class="ml-5 text-3xl">👻/></a> BiMaPround
            </span>
            </div>
            <center><div class="bg-white shadow-lg shadow-indigo-900 rounded-lg w-60 my-auto text-2xl font-mono font-bold text-indigo-800 md:animate-bounce">
            MEMBER'S PROFILE
            </div></center>

            <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
            <li class="mx-4 my-6 md:my-0">
                <Router-link to="/"><button class="hover:animate-bounce hover:text-indigo-500 bg-white active:bg-indigo-500 active:text-white hover:bg-gray-100 rounded-lg w-24 font-black font-mono shadow-lg shadow-indigo-900">
                    🫐HOME🍋
                </button></Router-link>
            </li>
            <li class="mr-10 my-6 md:my-0">
                <Router-link to="/form"><button class="hover:animate-bounce hover:text-indigo-500 bg-white active:bg-indigo-500 active:text-white hover:bg-gray-100 rounded-lg w-24 font-black font-mono shadow-lg shadow-indigo-900">
                    🧁FORM🍸
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

                    <Router-link to="/form"><div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:text-white hover:bg-indigo-200">
                    <span class="text-[15px] ml-4 text-indigo-400">Form</span>
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

        <div class="mt-20 static">
            <div v-for="member in members" :key="member">
            <profileCard 
                v-if="member.isMember"
                :image="member.image"
                :name="member.name"
                :nickname="member.nickname"
                :birthday="member.birthday"
                :content="member.content"
                :university="member.university"
            ></profileCard>
        </div>


        </div>
    </div>
</template>

<script>
import profileCard from "../components/icons/Profile.vue"
export default {
    data() {
        return {
            members: [
                {
                name:"Moradop Hengprasert",
                nickname: "Trin",
                birthday: "12 January 2004",
                content: "KU82",
                university: "Kasetsart University",
                image: "/assets/images/trin.jpg",
                isMember: true,
                },
                {
                name: "Nobi Nobita",
                nickname: "Nobita",
                birthday: "8 August 2013",
                content: "KU91",
                university: "Kasetsart University",
                image: "/assets/images/khan.jpg",
                isMember: true,
                },
                {
                name: "Doraemon",
                nickname: "Doraemon",
                birthday: "3 September 2112",
                content: "KU91",
                university: "Kasetsart University",
                image: "/assets/images/guy.jpg",
                isMember: true,
                },
            ],
            dropdown: false,
        };
    },
    components: {
        profileCard,
    },
};
</script>
<style>

</style>
<template>
    <div class="justify-center w-full h-screen bg-no-repeat bg-cover bg-indigo-100">
        <center><button class="hover:animate-bounce hover:text-indigo-500 mt-12 bg-white active:bg-indigo-500 active:text-white hover:bg-gray-100 rounded-lg w-24 font-black font-mono shadow-lg shadow-indigo-200">
            <Router-link to="/">🫐HOME🍋</Router-link>
        </button></center>
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
            ]
        };
    },
    components: {
        profileCard,
    },
};
</script>
<style>

</style>
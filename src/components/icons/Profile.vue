<template>
    <div class="bg-indigo-100 flex justify-center">

        <div class="flex relative m-8 max-h-lg h-40 max-w-xl shadow-lg shadow-indigo-200 bg-white active:bg-indigo-800 active:text-white hover:bg-gray-100 hover:scale-110 transition delay-150 duration-300 ease-in-out rounded bg-cover">
            <div class="relative h-40 w-40 rounded overflow-hidden bg-white mx-auto">
                <div class="h-full bg-cover bg-center bg-no-repeat hover:scale-110 transition delay-150 duration-300 ease-in-out" :style="getUrlImage(image)"></div>
                />
            </div>
            <div class="max-ml-lg mb-6 ml-12 mr-12 mt-5 font-mono">
                <div class="bg-indigo-500 mix-blend-multiply max-w-2xl w-60 rounded-full">
                    <center><div class="text-lg font-bold text-white hover:bg-cyan-500 rounded-full">
                        /> {{name}}
                    </div></center>
                </div>

                <div>
                    <a class="text-emerald-400 font-bold">Nickname</a>: {{nickname}}
                </div>
                <div>
                    <a class="text-cyan-500 font-bold">Birthday</a>: {{birthday}}
                </div>
                <div>
                    <a class="text-pink-400 font-bold">Class of</a>: {{content}}
                </div>
                <div>
                    <a class="text-amber-200 font-bold">Study at</a>: {{university}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            defaults: "A B",
        },
        nickname: {
            type: String,
            defaults: "Nick",
        },
        birthday: {
            type: String,
            defaults: "1 January 2000",
        },
        content: {
            type: String,
            defaults: "",
        },
        university: {
            type: String,
            defaults: "Kasetsart",
        },
        image:{
            type: String,
            defaults: "/assets/images/profile-pic.jpg",
        },

    },
    methods:
    {
        getUrlImage(imagePath)
        {
            return { 'background-image': 'url("./src' + imagePath + '")' };
        },
    }
};
</script>
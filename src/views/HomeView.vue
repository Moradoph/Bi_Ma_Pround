<template>
  <div class="w-full h-screen bg-no-repeat bg-cover bg-indigo-100">
    <nav class="fixed z-50 inset-x-0 top-0 h-20 w-screen bg-indigo-800 shadow md:flex md:items-center md:justify-between">
            <div class="flex justify-between items-center ">
            <span class="static text-white text-2xl font-bold font-mono cursor-pointer md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500" @click="dropdown=!dropdown">
                <a class="ml-5 text-3xl">👻/></a> BiMaPround
            </span>
            </div>
            <center><div class="bg-white shadow-lg shadow-indigo-900 rounded-lg w-60 my-auto text-2xl font-mono font-bold text-indigo-800 md:animate-bounce">
            HOME 
            </div></center>

            <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
            <li class="mx-4 my-6 md:my-0">
                <Router-link to="/profile"><button class="hover:animate-bounce hover:text-indigo-500 bg-white active:bg-indigo-500 active:text-white hover:bg-gray-100 rounded-lg w-24 font-black font-mono shadow-lg shadow-indigo-900">
                    👾PROFILE
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
                    <Router-link to="/profile"><div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:text-white hover:bg-indigo-200">
                    <span class="text-[15px] ml-4 text-indigo-400">Profile</span>
                    </div></Router-link>

                    <Router-link to="/form"><div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:text-white hover:bg-indigo-200">
                    <span class="text-[15px] ml-4 text-indigo-400">Form</span>
                    </div></Router-link>
                    <hr class="my-4 text-gray-600">

                    <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:text-white hover:bg-indigo-200">
                    <span class="text-[15px] ml-4 text-indigo-400 ">Logout</span>
                    </div>
                    <div class="relative h-40 w-40 rounded overflow-hidden bg-white mx-auto my-10">
                    <img class="h-full bg-cover bg-center bg-no-repeat" src="https://upload.wikimedia.org/wikipedia/commons/9/97/KU_Logo.png" alt="logo">
                    </div>
                </div>
            </div>
        </div>
    <div class="bg-indigo-100 flex justify-center mt-20">
    </div>
    <div class="bg-indigo-100 flex justify-center">
      <center><div class="relative content-center m-8 max-h-lg h-300 max-w-lg shadow-lg shadow-indigo-200 bg-white rounded bg-cover shadow-lg">
        <img src="@/assets/images/group-pic.jpg" alt="group-pic" class="hover:scale-110 transition delay-150 duration-300 ease-in-out w-full rounded">
        <div class="font-bold font-mono text-2xl mt-5 ">
          /> Bi_Ma_Pround
        </div>
        <div class="font-mono text-lg">
          (preDevCamp)
        </div>
        <div class="bg-gray-100 mix-blend-multiply indent-8 text-left rounded text-sm mt-5 mr-6 ml-6">
          <ul class="m-1">
            <li><a class="font-bold">"มะพร้าว"</a> เป็นพืชยืนต้นชนิดหนึ่ง อยู่ในวงศ์ปาล์ม (Arecaceae) และเป็นสปีชีส์เดียวของสกุล Cocos ที่ยังมีชีวิตอยู่ มะพร้าว เป็นพืชซึ่งสามารถใช้ประโยชน์ได้ในหลายทาง เช่น น้ำและเนื้อมะพร้าวอ่อนใช้รับประทาน เนื้อในผลแก่นำไปขูดและคั้นทำกะทิ กะลานำไปประดิษฐ์สิ่งของต่าง ๆ</li>
            <li>กลับมาพบกันอีกเช่นเคยนะครับ..สำหรับท่านที่เดินผ่านไปผ่านมานะครับวันนี้ มะพร้าวน้ำหอมของเรานะครับ ก็ได้มาบริการท่านพ่อแม่พี่น้องอีกแล้วครับ อากาศ ร้อนๆอย่างนี้นะครับ สำหรับท่านที่เดินผ่านไปผ่านมานะครับ ลองมาแวะชิมมะพร้าวน้ำหอมแท้ๆ กันก่อน อะฮุฮิๆ ( @^@ )</li>
          </ul>
        </div>
        <div class="hover:animate-bounce hover:text-indigo-500">
          ^
        </div>
      </div></center>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dropdown: false,
    }
  },
}
</script>

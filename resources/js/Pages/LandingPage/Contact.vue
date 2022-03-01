<script setup>
import { useForm } from "@inertiajs/inertia-vue3";

let form = useForm({
  name: '',
  email: '',
  message: '',
});

let submit = () => {
  form.post('/contact');
};
</script>

<script>
import Starred from "./Starred";

export default {
  layout: Starred,
};

</script>

<template>
  <Head>
    <title>Contact</title>
    <meta 
      type="description"
      content="Contact information"
      head-key="description"
    >
  </Head>
  
    <div class="bg-gray-800 text-gray-100 md:h-screen min-h-screen px-8 py-6">
      <nav class="mx-5">
        
        <Link href="/" class="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded">
          Retour
        </Link>

      </nav>
      <div
        class="max-w-screen-lg mt-4 bg-gray-200 mx-auto px-8 grid gap-24 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 text-gray-900 rounded-lg shadow-lg">
        
        <div class="">
          <form @submit.prevent="submit">
          <div>
            <span class="uppercase text-sm text-gray-600 font-bold">Nom</span>
            <input v-model="form.name" class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="">
          <div v-if="form.errors.name" v-text="form.errors.name" class="text-red-500 text-xs mt-1"></div>

          </div>
          <div class="mt-4">
            <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input v-model="form.email" class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text">
          <div v-if="form.errors.email" v-text="form.errors.email" class="text-red-500 text-xs mt-1"></div>
            
          </div>
          
          <div class="mt-4">
            <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea v-model="form.message" style="resize: none;"
              class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          <div v-if="form.errors.message" v-text="form.errors.message" class="text-red-500 text-xs mt-1"></div>
          </div>
          <div class="mt-4">
            <button type="submit" :disabled="form.processing"
              class="uppercase text-sm font-bold tracking-wide bg-violet-800 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Envoyer
            </button>
          </div>
          </form>
        </div>

        <div class="flex flex-col justify-start">
          <div>
            <h2 class="text-4xl lg:text-4xl font-bold leading-tight">Parlons de tout !</h2>
          </div>
          <div class="mt-6 text-center">
            	<img src="/assets/svg/Contact_SVG.svg" alt="Contact_SVG" class="w-full">
          </div>
          <div class="text-gray-700 mt-10 text-center">
            <span class="tooltip tooltip-bottom" data-tip="+212 6 62 71 82 25">Vous n'aimez pas les formulaires ?</span>
          </div>
        </div>
      </div>
    </div>
</template>
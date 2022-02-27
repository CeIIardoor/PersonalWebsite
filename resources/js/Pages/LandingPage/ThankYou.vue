<script>
import Starred from "./Starred";

export default {
  layout: Starred,
};

</script>


<template>
  <Head>
    <title>Merci</title>
    <meta 
      type="description"
      content="Index information"
      head-key="description"
    >
  </Head>
  
    <div class="bg-gray-800 text-gray-100 lg:h-screen lg:overflow-hidden px-8 py-6">
      <nav class="mx-5">
        <a href="/">
        <button class="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded">
          Retour
        </button></a>
      </nav>
      <div
        class="max-w-screen-lg bg-gray-200 mx-auto px-8 md:px-12 lg:px-16 xl:px-32 py-16  text-gray-900 rounded-lg shadow-lg">

        <div class="flex flex-col justify-start">
          <div>
            <h2 class="text-4xl lg:text-4xl font-bold leading-tight">Merci pour votre mot,</h2>
          </div>
          <div class="text-gray-700 mt-10">
            Je reviendrai vers vous dans les plus bref délais. A bientôt !
          </div>
        </div>
      </div>
    </div>
</template>
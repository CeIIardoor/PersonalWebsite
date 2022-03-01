<script>
import Starred from "./Starred";

export default {
  layout: Starred,
};
</script>

<template>
  <Head>
    <title>Index</title>
    <meta
      type="description"
      content="Je m'appelle Yassine Laouina, un passionné de l'informatique et des nouvelles technologies."
      head-key="description"
    >
  </Head>

    
    <div class="min-h-screen flex flex-col justify-center p-6 mx-auto lg:py-24 lg:flex-row lg:justify-between">
			<div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
				<h1 class="text-5xl font-bold leading-none sm:text-2xl">
        <span class="text-violet-400">Bonjour,</span>
				</h1>
				<p class="mt-6 mb-8 text-lg sm:mb-12">Je m'appelle Yassine Laouina,
					<br class="hidden md:inline lg:hidden">un passionné de l'informatique et des nouvelles technologies.
				</p>
				<div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
					<a rel="noopener noreferrer" href="https://www.linkedin.com/in/laouina-yassine" target="_blank" class="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-coolGray-900">LinkedIn</a>
					<a rel="noopener noreferrer" href="/assets/pdf/CV_LAOUINA_Yassine.pdf" target="_blank" class="px-8 py-3 text-lg font-semibold border rounded">CV</a>
					<Link rel="noopener noreferrer" href="/contact" class="px-8 py-3 text-lg font-semibold border rounded">Contact</Link>
				</div>
      </div>
			<div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
				<img src="/assets/svg/Business_SVG.svg" alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			</div>
		</div>
</template>

<template>
  <section class="homescreen -z-10 m-0 bg-gradient-to-b from-gray-800 to-gray-600 text-gray-100">
      <slot />
  </section>
   <component :is="'script'">
    for (var i = 0; i &lt; 100; i++) {
    star = document.createElement("div");
    star.setAttribute("class", "star m-0 -z-5");
    var animation = 'animation: twinkle ' + (Math.random() * 5 + 5) + 's linear ' + (Math.random() * 1 + 1) + 's infinite;
      top: ' +
      Math.random() * window.innerHeight +
      'px; left: ' +
      Math.random() * window.innerWidth +
      'px;';
    star.setAttribute("style", animation);
    document.querySelector('.homescreen').appendChild(star);
    }
  </component>
</template>
 
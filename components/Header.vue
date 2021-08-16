<template>
  <header class="box-border xl:container mx-auto flex flex-wrap items-center justify-between pb-4 pt-6">

    <ul class="flex flex-wrap gap-x-8">
      <li>
        <nuxt-link to="/" class="text-sm text-black hover:underline">
          Veterinarians
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" class="text-sm text-black hover:underline">
          How it works
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" class="text-sm text-black hover:underline">
          About us
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" class="text-sm text-black hover:underline">
          Blog
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" class="text-sm text-black hover:underline">
          Shop
        </nuxt-link>
      </li>
    </ul>

    <nuxt-link to="/">
      <img class="w-32" src="images/logo.svg" alt="company logo">
    </nuxt-link>

    <ul class="flex flex-wrap gap-x-8 text-sm items-center">
      <li>
        <button class="text-purple-600">
          Veterinarian login
        </button>
      </li>
      <li>
        <button class="text-white bg-purple-600 py-2.5 px-9 rounded-3xl">
          Try Mixlab
        </button>
      </li>
    </ul>
  </header>
</template>

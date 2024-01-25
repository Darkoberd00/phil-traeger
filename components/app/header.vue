<script setup lang='ts'>

</script>

<template>
  <div>
    <div class='rounded-box mt-4 shadow-xl max-md:mx-4 md:mx-auto md:w-[50%]'>
      <div class='navbar rounded-box bg-base-300'>
        <div class='navbar-start'>
          <div class='dropdown'>
            <label tabindex='0' class='btn btn-circle btn-ghost'>
              <IconMenu></IconMenu>
            </label>
            <ul
                tabindex='0'
                class='menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 space-y-1 bg-base-300 p-2 shadow-2xl'
            >
              <li>
                <NuxtLink to='/' active-class='active'>
                  Über Mich
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to='/contact'  active-class='active'>
                  Kontakt
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to='/projects'  active-class='active'>
                  Projekte
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class='navbar-center'>
          <p class="btn btn-ghost font-bold text-[1.3rem]">
            phil-traeger.dev
          </p>
        </div>
        <div class='navbar-end'>
          <div class='btn btn-ghost'>
            <div>
              <img
                  class='w-10 rounded h-fit'
                  src='~/assets/img/Flag_of_Germany.svg'
                  alt='de'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

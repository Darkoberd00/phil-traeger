<script setup lang="ts">
const { t, locale } = useI18n()
const runtimeConfig = useRuntimeConfig()
const age = runtimeConfig.public.BIRTHDAY
const name = runtimeConfig.public.NAME
const url = runtimeConfig.public.URL

useSeoMeta({
  title: t('navbar.about'),
  description: t('seo.about.description'),
  ogTitle: t('navbar.about'),
  ogDescription: t('seo.about.description'),
  ogImage: 'https://' + url + '/android-chrome-512x512.png',
  ogSiteName: url,
  ogUrl: 'https://' + url + '/' + locale + '/',
  twitterTitle: t('navbar.about'),
  twitterDescription: t('seo.about.description'),
  twitterImage: 'https://' + url + '/android-chrome-512x512.png',
  twitterCard: 'summary'
})

const history = [
  {
    year: 'August 2018 - Juli 2021',
    event: 'Informationstechnischer Assistent',
    location: 'Berufskolleg für Gestaltung und Technik Aachen',
    info: 'Eine Ausbildung im Bereich Informationstechnik, welche folgende Schwerpunkte beinhaltet: Programmierung, Datenbanken, Rechner- und Systemtechnik, Betriebssysteme und Netzwerke'
  },
  {
    year: 'September 2021 - Heute',
    event: 'Mathematisch-technischer Softwareentwickler',
    location: 'Fachhochschule Aachen / Institut für Hochfrequenztechnik RWTH Aachen',
    info: 'Ein duales Studium im Bereich Informatik, welches folgende Schwerpunkte beinhaltet: Mathematik, Softwaretechnik, Programmierung, Datenbanken, Rechner- und Systemtechnik, Betriebssysteme und Netzwerke'
  }
]

const programmingSkills = [
  {
    name: 'JavaScript/TypeScript',
    level: 6,
    description: 'I have been using JavaScript for 3 years.',
    icon: ['vscode-icons:file-type-js-official', 'vscode-icons:file-type-typescript-official']
  },
  {
    name: 'Java',
    level: 10,
    description: 'Java is my first programming language and I have been using it for 8 years.',
    icon: ['vscode-icons:file-type-java']
  },
  {
    name: 'Python',
    level: 4,
    description: 'I have been using Python for 2 years.',
    icon: ['vscode-icons:file-type-python']
  },
  {
    name: 'C++',
    level: 2,
    description: 'I have been using C++ for 1 year.',
    icon: ['vscode-icons:file-type-cpp3']
  }
]
programmingSkills.sort((a, b) => b.level - a.level)
</script>

<template>
  <div class="space-y-4">
    <OwnCard :title="t('navbar.about')">
      <div class="xl:flex space-x-4 space-y-4">
        <img src="@/assets/img/profile.jpeg" alt="profile" class="rounded-2xl xl:w-2/4 xl:h-2/4" />
        <div class="prose lg:prose-2xl">
          <h3>Hi mein name ist {{ name }}</h3>
          <ul>
            <li>Alter: {{ getAge(new Date(age)) }}</li>
            <li>Lebe in: Deutschland</li>
            <li>Studiere: Informatik</li>
            <li>Interessen: Programmieren, Lesen, Schreiben, Lernen</li>
          </ul>
        </div>
      </div>
      <div class="prose lg:prose-2xl">
        <ContentDoc :path="'/' + locale + '/about'" />
      </div>
    </OwnCard>
    <OwnCard title="history">
      <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li v-for="(hist, i) in history" :key="hist.event">
          <hr v-if="i != 0" class="bg-black" />
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div
            class="mb-10"
            :class="i % 2 == 0 ? 'timeline-start md:text-end' : 'timeline-end md:text-start'"
          >
            <time class="font-mono italic">{{ hist.year }}</time>
            <div class="text-lg font-black">{{ hist.event }}</div>
            Location: {{ hist.location }}
            <p>{{ hist.info }}</p>
          </div>
          <hr v-if="i != history.length - 1" class="bg-black" />
        </li>
      </ul>
    </OwnCard>

    <OwnCard :title="t('about.skills')">
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div v-for="skill in programmingSkills" :key="skill.name" class="p-4">
          <div class="space-y-4">
            <div class="flex justify-center space-x-4">
              <Icon v-for="icon in skill.icon" :key="icon" :name="icon" size="5rem" />
            </div>
            <p class="flex justify-center italic">"{{ skill.description }}"</p>
            <div class="flex justify-center rating rating-lg rating-half jello-vertical">
              <input
                type="radio"
                :name="'rating-10-' + skill.name"
                class="rating-hidden"
                disabled
              />
              <input
                v-for="i in 10"
                :key="i"
                type="radio"
                :name="'rating-10-' + skill.name"
                class="bg-green-500 mask mask-star-2"
                :class="i % 2 == 0 ? 'mask-half-2' : 'mask-half-1'"
                disabled
                :checked="i <= skill.level"
              />
            </div>
          </div>
        </div>
      </div>
    </OwnCard>
  </div>
</template>

<style scoped></style>

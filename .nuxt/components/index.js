import { wrapFunctional } from './utils'

export { default as Hero } from '../..\\components\\Hero.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as QuestionsCard } from '../..\\components\\QuestionsCard.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'

export const LazyHero = import('../..\\components\\Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyQuestionsCard = import('../..\\components\\QuestionsCard.vue' /* webpackChunkName: "components/questions-card" */).then(c => wrapFunctional(c.default || c))
export const LazyVuetifyLogo = import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))

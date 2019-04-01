import { mount } from '@vue/test-utils'
import About from '../components/About.vue'

describe('About.vue', () => {
  test('Setup correctly', () => {
    expect(true).toBe(true)
  })
  test('Finds text on page', () => {
    const wrapper = mount(About)
    expect(wrapper.text()).toContain('steel manufacturing company, providing')
  })
})

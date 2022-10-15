import { mount } from '@vue/test-utils'
import CardTestimoni from '@/components/Molecules/HomepageMolecules/CardTestimoni'
import Testimoni from '@/components/Homepage/Testimoni'

describe('Testimoni', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Testimoni)
    expect(wrapper.vm).toBeTruthy()
  })
})

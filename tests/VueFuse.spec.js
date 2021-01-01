import { shallowMount } from '@vue/test-utils'
import VueFuse from '../src/components/VueFuse'

describe('VueFuse', () => {
  let list = [
    { name: 'steve', id: 1 },
    { name: 'bill', id: 12 },
    { name: 'ren', id: 123 },
    { name: 'teemo', id: 1234 },
    { name: 'alex', id: 1000 },
  ]

  let wrapper = shallowMount(VueFuse, {
    propsData: {
      placeholder: 'Search for things',
      eventName: 'testevent',
      inputChangeEventName: 'testchange',
      list: list,
      keys: ['name'],
    },
  })
  let input = wrapper.find('input')

  it('renders an input', () => {
    expect(wrapper.contains('input')).toBe(true)
  })

  it('should apply placeholder', () => {
    expect(input.attributes().placeholder).toBe('Search for things')
  })

  it('should find results that match input', () => {
    wrapper.setData({
      value: 'teemo',
    })
    expect(wrapper.vm.result).toEqual([{ id: 1234, name: 'teemo' }])
  })

  it('should have fired event for results', () => {
    wrapper.setData({
      value: 'new',
    })
    expect(wrapper.emitted('testevent')).toBeTruthy()
    expect(wrapper.emitted('testchange')).toBeTruthy()
  })

  it('should return list if defaultAll is true and value is empy', () => {
    wrapper.setProps({
      defaultAll: true,
    })
    wrapper.setData({
      value: '',
    })
    expect(wrapper.vm.result).toEqual(list)
  })

  it('should handle changes to list', () => {
    wrapper.setProps({
      defaultAll: false,
      list: [{ name: 'mario' }],
    })
    expect(wrapper.vm.result).toEqual([])

    wrapper.setData({
      value: 'mar',
    })
    expect(wrapper.vm.result).toEqual([{ name: 'mario' }])
  })

  it('should return ids if id prop is defined', () => {
    wrapper.setProps({
      list: list,
      id: 'id',
    })
    wrapper.setData({
      value: 'alex',
    })
    expect(wrapper.vm.result).toEqual([{ id: 1000, name: 'alex' }])
  })

  it('should return results by search prop', () => {
    wrapper.setProps({
      search: 'alex',
      id: '',
    })
    wrapper.vm.initFuse()
    expect(wrapper.vm.result).toEqual([{ id: 1000, name: 'alex' }])
  })
})

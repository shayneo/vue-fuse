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
      list: list,
      fuseOpts: {
        keys: ['name'],
      },
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
    expect(wrapper.vm.result).toEqual([{ 'item': { 'id': 1234, 'name': 'teemo' }, 'refIndex': 3 }])
  })

  it('should have fired event for results', () => {
    wrapper.setData({
      value: 'new',
    })
    expect(wrapper.emitted('fuse-input')).toBeTruthy()
    expect(wrapper.emitted('fuse-results')).toBeTruthy()
  })

  it('should return list if defaultAll is true and value is empy', () => {
    wrapper.setProps({
      defaultAll: true,
    })
    wrapper.setData({
      value: '',
    })
    expect(wrapper.vm.result).toEqual([{ 'item': { 'id': 1, 'name': 'steve' }, 'refIndex': 0 }, { 'item': { 'id': 12, 'name': 'bill' }, 'refIndex': 1 }, { 'item': { 'id': 123, 'name': 'ren' }, 'refIndex': 2 }, { 'item': { 'id': 1234, 'name': 'teemo' }, 'refIndex': 3 }, { 'item': { 'id': 1000, 'name': 'alex' }, 'refIndex': 4 }])
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
    expect(wrapper.vm.result).toEqual([{ 'item': { 'name': 'mario' }, 'refIndex': 0 }])
  })

  it('should return results by search prop', () => {
    wrapper.setProps({
      list,
      search: 'alex',
    })
    expect(wrapper.vm.value).toEqual('alex')
    expect(wrapper.vm.result).toEqual([{ 'item': { 'id': 1000, 'name': 'alex' }, 'refIndex': 4 }])
  })

  it('should include the score', () => {
    const wrapper = shallowMount(VueFuse, {
      propsData: {
        placeholder: 'Search for things',
        list: list,
        fuseOpts: {
          keys: ['name'],
          includeScore: true,
        },
      },
    })
    wrapper.setProps({
      search: 'alex',
    })
    expect(wrapper.vm.value).toEqual('alex')
    expect(wrapper.vm.result[0]).toHaveProperty('score')
  })

  it('should map the results', () => {
    const wrapper = shallowMount(VueFuse, {
      propsData: {
        placeholder: 'Search for things',
        list: list,
        mapResults: true,
        fuseOpts: {
          keys: ['name'],
          includeScore: true,
        },
      },
    })
    wrapper.setProps({
      search: 'alex',
    })
    expect(wrapper.vm.value).toEqual('alex')
    expect(wrapper.vm.result[0]).toHaveProperty('name')
    expect(wrapper.vm.result[0].name).toEqual('alex')
  })
})

export default {
  mounted(el: HTMLInputElement) {
    el.addEventListener('input', () => {
      el.value = el.value.toLowerCase()
      const event = new Event('input', { bubbles: true })
      el.dispatchEvent(event)
    })
  },
}

import Vue, { VNode } from 'vue'
import Component from 'vue-class-component'

import styles from './menu.scss'

export interface IMenuProps {
  menuOpen?: boolean
}

@Component
export class Menu extends Vue<IMenuProps> {

  public static props = ['menuOpen']
  public isOpen = false

  public onClick(e: Event) {
    e.preventDefault()
    this.$data.isOpen = !this.$data.isOpen
    this.$emit('menu-open', this.$data.isOpen)
    document.body.style.touchAction = this.$data.isOpen ? 'none' : 'initial'
    document.body.style.overflow = this.$data.isOpen ? 'hidden' : 'initial'
    document.body.style.position = this.$data.isOpen ? 'fixed' : 'inherit'
  }

  public render(h): VNode {
    return (
      <div
        ref='menuBtn'
        on-click={this.onClick}
        class={[styles.container, !this.isOpen || styles.open]}>
        <div class={styles.inner}></div>
      </div >
    )
  }

  private _preventBodyScrolling(state) {
    const preventScrolling = e => {
      e.preventDefault()
    }

    if (state === true) {
      console.log('test')
      document.body.addEventListener('touchmove', preventScrolling, false)
    } else {
      document.body.removeEventListener('touchmove', preventScrolling, false)
    }
  }
}

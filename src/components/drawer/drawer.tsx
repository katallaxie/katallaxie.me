import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { wrap } from '../app/style'
import Col from 'bootstrap-vue/es/components/layout/col'
import Row from 'bootstrap-vue/es/components/layout/row'
import Container from 'bootstrap-vue/es/components/layout/container'

import styles from './drawer.scss'


export interface IDrawerProps {
  isOpen?: boolean
}

@Component({
  data() {
    return {
      isOpen: false
    }
  }
})
export class Drawer extends Vue<IDrawerProps> {
  @Getter('drawer') public drawer

  public toggleDrawer(e: Event) {
    e.preventDefault()
    this.isOpen = !this.isOpen
    this.$emit('toggle-drawer', this.isOpen)

    // disable scrolling on body
    document.body.style.overflow = this.isOpen ? 'hidden' : ''
  }

  public render(h) {
    return (
      <div class={[styles.container, this.isOpen ? styles.open : '']}>
        <a class={styles.toggle} onClick={this.toggleDrawer} href='#'>
          <span>{this.isOpen ? 'Disconnect' : 'Connect'}</span>
        </a>
        <div class={styles.menu}>
          <Row align-v='center' class={styles.fullRow}>
            <Col>
              <ul class={styles.items}>
                {this.drawer.map(el => <li class={styles.item}><h2><a href={el.href}>{el.title}</a></h2></li>)}
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

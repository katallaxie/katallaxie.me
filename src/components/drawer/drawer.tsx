import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { wrap } from '../app/style'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bRow from 'bootstrap-vue/es/components/layout/row'
import bContainer from 'bootstrap-vue/es/components/layout/container'

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

  public onClickOpen(e: Event) {
    e.preventDefault()
    this.isOpen = !this.isOpen
  }

  public render(h) {
    return (
      <div class={[styles.container, this.isOpen ? styles.open : '']}>
        <a class={styles.toggle} onClick={this.onClickOpen} href='#'>
          <span>{this.isOpen ? 'Disconnect' : 'Connect'}</span>
        </a>
        <div class={styles.menu}>
          <bRow>
            <bCol>
              <ul>
                {this.drawer.map(el => <li><h2><a href={el.href}>{el.title}</a></h2></li>)}
              </ul>
            </bCol>
          </bRow>
        </div>
      </div>
    )
  }
}

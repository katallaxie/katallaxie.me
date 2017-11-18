import Vue from 'vue'
import Component from 'vue-class-component'
import { Getter } from 'vuex-class'
import { wrap } from '../app/style'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bRow from 'bootstrap-vue/es/components/layout/row'
import bContainer from 'bootstrap-vue/es/components/layout/container'

import styles from './drawer.scss'

export interface IDrawerProps {
  items?: any[]
  openDrawer?: boolean
}

@Component({
  props: { items: null, openDrawer: null },
})
export class Drawer extends Vue<IDrawerProps> {
  @Getter('drawer') public drawer

  public render(h) {
    const items = this.drawer.map((item, index) => {
      return <li
        key={index}><a href={item.href}><h1>{item.title}</h1></a></li>
    })

    return (
      <div class={[styles.drawer, !this.openDrawer || styles.open]} v-show={this.openDrawer}>
        <div class={styles.overlay}></div>
        <div class={wrap}>
          <bContainer fluid>
            <bRow>
              <bCol>
                <ul>
                  {items}
                </ul>
              </bCol>
            </bRow>
          </bContainer>
        </div>
      </div>
    )
  }
}

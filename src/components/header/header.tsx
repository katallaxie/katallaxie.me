import Vue from 'vue'
import Component from 'vue-class-component'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bRow from 'bootstrap-vue/es/components/layout/row'
import { StyledHeader } from './style'
import { Menu } from '../menu'
import { Drawer } from '../drawer'

interface IHeaderProps {
  name: string
  job: string
}

@Component({
  props: { name: null, job: null, drawerOpen: null },
  data() {
    return {
      openDrawer: false
    }
  }
})
export class Header extends Vue<IHeaderProps> {

  public onMenuOpen(e) {
    this.$data.openDrawer = e
  }

  public render(h) {
    return (
      <StyledHeader fluid>
        <Menu on-menu-open={this.onMenuOpen} />
        <Drawer items={[]} openDrawer={this.$data.openDrawer} />
        <bRow>
          <bCol>
            <h3>{this.name}<br /><span>{this.job}</span></h3>
          </bCol>
        </bRow>
      </StyledHeader >
    )
  }
}

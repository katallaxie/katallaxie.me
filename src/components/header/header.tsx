import Vue from 'vue'
import Component from 'vue-class-component'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bRow from 'bootstrap-vue/es/components/layout/row'
import { StyledHeader } from './style'

interface IHeaderProps {
  name: string
  job: string
}

@Component({
  props: { name: null, job: null }
})
export class Header extends Vue<IHeaderProps> {

  public render(h) {
    return (
      <StyledHeader fluid>
        <bRow>
          <bCol>
            <h3>{this.name}<br />{this.job}</h3>
          </bCol>
        </bRow>
      </StyledHeader>
    )
  }
}

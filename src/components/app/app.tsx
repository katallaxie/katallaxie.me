import { Component, Vue } from 'vue-property-decorator'
import { Home } from '../home'
import { wrap } from './style'
import { Header } from '../header'
import { Getter } from 'vuex-class'
import { Footer } from '../footer'
import { Drawer } from '../drawer'

import styles from './app.scss'

@Component
export class App extends Vue {
  @Getter('name') public name
  @Getter('job') public job
  @Getter('teaser') public teaser

  public render(h) {
    return (
      <div id='app'>
        <Drawer />
        <div class={[wrap, styles.wrap]}>
          <Header name={this.name} job={this.job} />
          <Home />
          <Footer />
        </div>
      </div>
    )
  }
}

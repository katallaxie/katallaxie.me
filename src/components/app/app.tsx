import { Component, Vue } from 'vue-property-decorator'
import { wrap } from './style'
import { Header } from '../header'
import { Footer } from '../footer'
import { Drawer } from '../drawer'
import styles from './app.scss'
import { Getter } from 'vuex-class'

@Component
export class App extends Vue {
  @Getter('name') public name
  @Getter('job') public job

  public render(h) {
    return (
      <div id='app'>
        <div class={[wrap, styles.wrap]}>
          <Drawer />
          <Header name={this.name} job={this.job} />
          <router-view />
          <Footer />
        </div>
      </div>
    )
  }
}

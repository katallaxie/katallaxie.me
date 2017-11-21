import Vue from 'vue'
import Component from 'vue-class-component'
import { Home } from '../home'
import { wrap } from './style'
import { Header } from '../header'
import { Getter } from 'vuex-class'
import { Footer } from '../footer'

@Component
export class App extends Vue {
  @Getter('name') public name
  @Getter('job') public job
  @Getter('teaser') public teaser

  public render(h) {
    return (
      <div id='app'>
        <div class={wrap}>
          <Header name={this.name} job={this.job} />
          <Home />
          <Footer />
        </div>
      </div>
    )
  }
}

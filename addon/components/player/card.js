import Component from '@glimmer/component';

export default class PlayerCardComponent extends Component {
  get trophyClass() {
    return this.args.trophyCount ? 'player-trophy has-trophy' : 'player-trophy';
  }

  get trophyStyle() {
    if (this.args.trophyCount) {
      return `--trophy-count: "${this.args.trophyCount}"`;
    }
    return '';
  }
}

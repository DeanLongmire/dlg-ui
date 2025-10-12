import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { faFootball } from '@fortawesome/free-solid-svg-icons';

export default class MoreController extends Controller {
  @tracked player = 'LeBron James';
  @tracked trophyCount = 10;
  @tracked points = 27;
  @tracked position = 'SF';
  @tracked picture =
    'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png';

  get icon() {
    return faFootball;
  }
  
    @action
  onSelect(value) {
    this.selectedOption = value;
  }
}

import Controller from '@ember/controller';
import { faFootball } from '@fortawesome/free-solid-svg-icons';
import { service } from '@ember/service';

export default class AccountsAccountController extends Controller {
  @service
  router;

  panels = [
    {
      title: 'Panel 1',
      icon: faFootball,
      onClick: () => {
        this.router.transitionTo('index');
      },
    },
    {
      title: 'Panel 2',
    },
    {
      title: 'Panel 3',
    },
    {
      title: 'Panel 4',
    },
  ];
}

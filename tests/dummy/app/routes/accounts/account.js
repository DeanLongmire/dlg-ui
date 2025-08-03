import Route from '@ember/routing/route';

export default class AccountsAccountRoute extends Route {
  model({ account_id }) {
    return {
      accountId: account_id,
      accountName: `Account ${account_id}`,
      accountDetails: `Details for account ${account_id}`,
    };
  }
}

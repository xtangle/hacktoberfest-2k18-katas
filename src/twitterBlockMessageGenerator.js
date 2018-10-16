const _ = require('lodash');

const isValidAccount = (account) => {
  const regex = /^[a-zA-Z0-9_]+$/;
  return account.length < 16 && regex.test(account);
};

export const twitterBlockMessageGenerator = (
  accountsToBlock,
  customMessage
) => {
  if (_.isNil(customMessage)) throw 'Custom Message is missing';

  const twitterBlockMessages = [];

  for (let i = 0; i < accountsToBlock.length; i++) {
    const account = accountsToBlock[i];
    if (isValidAccount(account)) {
      twitterBlockMessages.push({
        accountName: account,
        message: customMessage
      });
    } else {
      throw 'Invalid Account Name';
    }
  }

  return twitterBlockMessages;
};

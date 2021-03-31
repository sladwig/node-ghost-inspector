const helpers = require('../../helpers')

module.exports = {
  command: 'update <suite-id>',
  desc: 'Update a suite.',
  builder: (yargs) => {
    yargs.options({
      '[attribute]': {
        description: 'Pass "--[attribute] value" to update your suite (eg: --name "My test")',
      },
    })
    return yargs
  },
  handler: async function (argv) {
    // clean up yargs-related stuff
    const args = helpers.cleanArgs(argv)

    const suiteId = args.suiteId
    delete args['suiteId']

    const apiKey = args.apiKey
    delete args['apiKey']
    try {
      const client = require('../../../index')(apiKey)
      const result = await client.updateSuite(suiteId, args)
      helpers.print(result)
    } catch (error) {
      throw error
    }
    process.exit(0)
  },
}

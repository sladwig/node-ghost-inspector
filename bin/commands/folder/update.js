const helpers = require('../../helpers')

module.exports = {
  command: 'update <folder-id> <folder-name>',
  desc: 'Update a folder with new <folder-name>.',
  builder: {},
  handler: async function (argv) {
    try {
      const client = helpers.getClient(argv)
      const result = await client.updateFolder(argv.folderId, argv.folderName)
      if (argv.json) {
        helpers.printJson(result)
      } else {
        helpers.print({
          message: `Folder updated: ${result.name}`,
          id: result._id,
        })
      }
    } catch (error) {
      throw error
    }
    process.exit(0)
  },
}

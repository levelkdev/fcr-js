module.exports = function (contracts) {
  let i = 0
  let eventsPromises = []
  let contractNames = []
  for(const contractName in contracts) {
    eventsPromises[i] = pastEventsPromise(contracts[contractName])
    contractNames[i] = contractName
    i++
  }
  return new Promise((resolve, reject) => {
    Promise.all(eventsPromises).then((eventResults) => {
      let formattedResults = {}
      for(let j in contractNames) {
        formattedResults[contractNames[j]] = eventResults[j]
      }
      resolve(formattedResults)
    }, reject)
    .catch(reject)
  })
}

function pastEventsPromise (contractInstance) {
  return new Promise(((resolve, reject) => {
    contractInstance.getPastEvents(
      'allEvents',
      { fromBlock: 0, toBlock: 'latest' },
      (err, events) => {
        if (err) reject(err)
        else resolve(events)
      }
    )
  }))
}

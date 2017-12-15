// Author: Paul Byrne
// Student Number: 15317444
// Date: 15/12/2017

var GitHubApi = require('github')
var github = new GitHubApi({
      debug: true
})

var csvArray = []
var headersArray = [2]

var fs = require('fs');
var csv = require('fast-csv');
var ws = fs.createWriteStream('BarChart_Tooltips.csv');

github.authenticate({
      type: 'oauth',
      token: 'X'
})

github.repos.getAll(
{
  username: 'paul5hc'
}, function (err, res) {
        if (err) throw err
        var readyToPrint = 0
        headersArray[0] = "Repository"
        headersArray.push("Size")
        for (var x=0; x<res.data.length; x++){
              repoName = res.data[x].name
              repoSize = res.data[x].size
              var subArray = [2]
              subArray[0] = repoName
              subArray.push(repoSize)
              csvArray.push(subArray)
    }
    csvArray.push(headersArray)
    csvArray.reverse()

    csv.
        write(
           csvArray
        ,  {header:true})
        .pipe(ws);
   }
)

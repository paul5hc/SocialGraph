// Author: Paul Byrne
// Student Number: 15/12/2017
// Date: 15/12/2017

var GitHubApi = require('github')
var github = new GitHubApi({
  debug: true
})

// Global Arrays
var repoLang = []
var instances = []
var checkedLang = []
var csvArray = []
var headersArray = [2]

// CSV Code
var fs = require('fs');
var csv = require('fast-csv');
var ws = fs.createWriteStream('PieChartData.csv');

github.authenticate({
      type: 'oauth',
      token: 'X'
})

github.repos.getAll(
{
      username: 'paul5hc'
},    function (err, res) {
      if (err) throw err

      // Define headers for CSV file.
      headersArray[0] = "Language"
      headersArray.push("Instances")

      // Push repository languages in repoLang array.
      for (var x=0; x<res.data.length; x++){
            repoLang.push(res.data[x].language)
      }

      // Record instances of each language in repoLang array.
      for (var y=0; y<res.data.length; y++){
            var containRet = contains(checkedLang, res.data[y].language)
            if (containRet == false){
                  var t = countInstances(repoLang, res.data[y].language)
                  var subArray = [2]
                  if (res.data[y].language == null){
                        subArray[0] = "NULL"
                  }
                  else {
                        subArray[0] = res.data[y].language
                  }
                  subArray.push(t)
                  csvArray.push(subArray)
                  checkedLang.push(res.data[y].language)
            }
      }
      csvArray.push(headersArray)
      csvArray.reverse()

      // Export csvArray to .csv file.
      csv.
          write(
             csvArray
          ,  {header:true})
          .pipe(ws);
})

// Function to check if a certain string belongs to a particular array.
function contains(someArray, someString){
        containsVal = false;
        for (x=0; x<someArray.length; x++){
              if (someArray[x] == someString){
                    containsVal = true;
                    break;
              }
        }
        return containsVal
}

// Function to count instances of language type in repoLang array.
function countInstances(someArray, someString){
        var count = 0
        for (x=0; x<someArray.length; x++){
              if (someArray[x] == someString){
                    count++;
              }
        }
        return count
}


var GitHubApi = require('github')
var github = new GitHubApi({
  debug: true
})

var manyDateArray = []
var dateArray = []
var countArray = []

github.authenticate({
  type: 'oauth',
  token: 'X'
})

github.repos.getCommits({
  owner: 'paul5hc',
  repo:  'LowestCommonAncestor'
}, function (err, res) {
    if (err) throw err
    var keys = Object.keys(res.data[0].commit.author.date);
    console.log('***LowestCommonAncestor***')
    for (x=0; x<res.data.length; x++){
      var cutResult = res.data[x].commit.author.date.substring(0, 10);
      var retConvertDate = convertDate(cutResult)
      manyDateArray.push(retConvertDate)
      if (dateArray.indexOf(retConvertDate) <= (-1)){
        dateArray.push(retConvertDate)
      }
    }
    for(y=0; y<dateArray.length; y++){
      var number = countInstances(manyDateArray, dateArray[y])
      countArray.push(number)
    }
    for(t=0; t<countArray.length; t++){
      console.log("Date: " + dateArray[t] + " Commits: " + countArray[t])
    }
})

function convertDate(stringDate){
    var month = stringDate.substring(5,7)
    switch(month) {
    case "1":
        month = "Jan"
        break;
    case "2":
        month = "Feb"
        break;
    case "3":
        month = "Mar"
        break;
    case "4":
        month = "Apr"
        break;
    case "5":
        month = "May"
        break;
    case "6":
        month = "Jun"
        break;
    case "7":
        month = "Jul"
        break;
    case "8":
        month = "Aug"
        break;
    case "9":
        month = "Sep"
        break;
    case "10":
        month = "Oct"
        break;
    case "11":
        month = "Nov"
        break;
    case "12":
        month = "Dec"
        break;
    default:
        console.log("Error in converting date!")
}
    var year = stringDate.substring(2,4)
    var day = stringDate.substring(8,10)
    var convertedDate = day + "-" + month + "-" + year
    return convertedDate;
}

function countInstances(someArray, someString){
    var count = 0
    for (x=0; x<someArray.length; x++){
      if (someArray[x] == someString){
        count++;
      }
    }
    return count
}


var GitHubApi = require('github')
var github = new GitHubApi({
  debug: true
})

var dateArray = []

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
      dateArray.push(retConvertDate)
      //console.log(retConvertDate)
    }
    for (y=0; y<dateArray.length; y++){
      console.log(dateArray[y])
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

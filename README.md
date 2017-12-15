# SocialGraph

Each of the folders in this repository contain:
- The javascript file which makes use of the Node-Github javascript library.
- The .csv file which is created as a result of running the javascript file and which contains the data that will be displayed in the graph.
- The .HTML file which creates the graph based on the data in the .csv file.
- Sample photos of the graphs created.

<b> BarChart: </b>
- Represents data in the form of a bar chart. Displays the number of commits made to the LowestCommonAncestor repository 
   on each day that a commit was made.
- Hovering over a bar on the chart changes its colour to red (Sample_Photo2.PNG)

<b> BarChart_Tooltips </b>
- Represenets data in the form of an advanced bar chart. Displays the size of each repository for a given 
   user in kb (paul5hc in this case).
- Hovering over a bar on the chart changes its colour to orange and also displays its exact size value.   

<b> PieChart </b>
- Represents data in the form of a pie chart. Displays the various programming languages and the scale of which these languages are 
   used in the user's github.

<b> Additional Notes: </b>
The .HTML files only appear to open correctly using the Microsoft Edge browser.
Personal access tokens have also been removed from each of the .js files for the purpose of submission.

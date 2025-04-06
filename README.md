## Link to see how the wbe site goes >> https://teachlyze.github.io/teachlyze-front/
## How to get this repository in your local repository.
  ### Step by step of how to do it
````c
//If you dont initiate a git, you should run this code.
git init
//this code above links your local repository with the remote repository.
//if this code doesn't work, may you don't have the rights to run it, Check the error that the console returns.
git remote add origin <repository URL from github>
//check if the code runs well
//it has to returns the URL of the remote repository
git remote -v
//Now you need to fetch the remote branches
git fetch origin
//probably you don't have a local branch, so you'll need one for it run the code below.
git checkout -b dev origin/dev
// pull the remote repository into your local repository using this code.
git pull origin dev
````

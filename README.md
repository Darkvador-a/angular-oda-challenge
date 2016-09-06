# angular-oda-challenge

## 1- Run the install.sh

### 3- GIT WORKFLOW (fork versionning and pull request implementation):

**Notice: we use clone method as https, not into ssh, thanks :)**

- Add the **Upstream** to your remote :
    * `git remote add upstream https://github.com/oda-ipssi/angular-oda-challenge.git`

- To check if it works:
    * `git remote -v`, *the output have to be :*

  ```
  $ git remote -v
  origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
  origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
  upstream  https://github.com/oda-ipssi/angular-oda-challenge.git (fetch)
  upstream  https://github.com/oda-ipssi/angular-oda-challenge.git (push)
  ```

**Warning: your master branch is always the mirror of upstream, so you have to dev on another branch, the PULL REQUEST work flow force to review code by the other on your master**

- Create a new branch always via master *(be on master, not the upstream)* :
    * `git checkout -b <feature-name>`

- Add the modifs file :
    * `git add -A`

- Commit :
    * `git commit -m "<your message>"`

- Combination of add and commit *(only if files already exist)* :
    * `git commit -am "<your message>"`

- Save on your master the branch after adding and commit file :
    * `git push origin <your-actual-feature-name>`

- Make a pull request via github interface and click on **create pull-request** BUTTON !

- Some One have to merge the pull-request *(not you it's dirty, ok ?)* !

- When the pull request has been merged delete the branch (if you have no need to keep her)
    * `git branch -d <feature-name>` (delete the branch on local, autocompletion ok in local) && `git push origin --delete <feature-name>` (delete the branch on git server, no autocompletion for git server)

- Update your own fork *(always when you are on your master branch)* :
    * `git pull upstream master` & `git push origin master`

- Merge a branch if she exists with the current master is up to date *(place your git version on the branch you would like to merge master)* :
    * `git merge master`

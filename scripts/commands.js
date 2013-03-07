var commands = [


  { left: "workspace", right: "index", direction: "status",
    cmd: "status",
    tags: 'Basic Snapshotting',
    docs: "显示在工作目录中与本地版本库最新版本不同的(文件)路径、与 index 快照不同的(文件)路径以及未加入 git 的(文件)路径。" },
  { left: "workspace", right: "index", direction: "status",
    cmd: "diff",
    tags: 'Basic Snapshotting, Inspection and Comparison,Patching',
    docs: "显示未加入 index 快照的修改内容" },
  { left: "workspace", right: "local_repo", direction: "status",
    cmd: "diff <commit or branch>",
    tags: 'Basic Snapshotting,Inspection and Comparison,Patching',
    docs: "将当前工作目录与指定的 <commit> 进行比较。可以使用「HEAD」来指定与最新版本进行比较；也可以使用分支的名称，与另外一个分支进行比较。" },


  { left: "workspace", right: "index", direction: "up",
    cmd: "add <file... or dir...>",
    tags: 'Basic Snapshotting',
    docs: "将工作目录中的新文件或修改的文件添加到 index 快照，以供稍后提交至版本库。使用「add --interactive」可以交互式地添加文件。" },
  { left: "workspace", right: "index", direction: "up",
    cmd: "add -u",
    tags: 'Basic Snapshotting',
    docs: "将工作目录中有修改的文件（不包含新文件）添加至 index 快照。相当于在提交时使用「git commit -a」命令所添加的文件。"},
  { left: "workspace", right: "index", direction: "up",
    cmd: "rm <file...>",
    tags: 'Basic Snapshotting',
    docs: "从工作目录和 index 中移除指定文件。" },
  { left: "workspace", right: "index", direction: "up",
    cmd: "mv <file...>",
    tags: 'Basic Snapshotting',
    docs: "在工作目录和 index 中移动指定文件。" },

  { left: "workspace", right: "local_repo", direction: "up",
    cmd: "commit -a -m 'msg'",
    tags: 'Basic Snapshotting',
    docs: "提交所有自上次提交以来修改过的文件（不包括未加入 git 追踪的文件）并从 index 中移除工作目录里已经删除的文件。" },

  { left: "workspace", right: "index", direction: "dn",
    cmd: "checkout <file...> or <dir...>",
    tags: 'Branching and Merging',
    docs: "更新工作目录中的指定文件或目录，覆盖所有本地修改。『不』切换分支。" },

  { left: "index", right: "index", direction: "status",
    cmd: "reset HEAD <file1> <file2> ...",
    tags: 'Basic Snapshotting',
    docs: "将指定文件从预备下次提交的快照中移除（不影响工作目录下正在进行的修改）。" },

  { left: "index", right: "local_repo", direction: "dn",
    cmd: "reset --soft HEAD^",
    tags: 'Basic Snapshotting',
    docs: "撤销上次提交，将其内容放入 index 快照。" },

  { left: "workspace", right: "local_repo", direction: "dn",
    cmd: "reset --hard",
    tags: 'Basic Snapshotting',
    docs: "清空工作目录中的所有修改和 index 快照，与本地版本库同步。" +
          "警告：工作目录中所有未提交的修改都将丢失。通常用于合并冲突而打算重新开始的情况。添加「ORIG_HEAD」参数可以撤销最近一次合并操作及之后的所有改动。" },


  { left: "workspace", right: "local_repo", direction: "dn",
    cmd: "checkout <branch>",
    tags: 'Branching and Merging',
    docs: "更新 index 和工作目录以切换到指定分支，并且更新 HEAD 到此分支。" },
  { left: "workspace", right: "local_repo", direction: "dn",
    cmd: "checkout -b <name of new branch>",
    tags: 'Branching and Merging',
    docs: "创建并切换到一个新的分支。" },

  { left: "workspace", right: "local_repo", direction: "dn",
    cmd: "merge <commit or branch>",
    tags: 'Branching and Merging',
    docs: "将 <branch name> 中的内容合并到当前分支。使用 --no-commit 参数可以防止合并之后自动提交，以便审查合并结果之后再进行提交。" },

  { left: "workspace", right: "local_repo", direction: "dn",
    cmd: "rebase <upstream>",
    tags: 'Patching',
    docs: "撤销自从 <upstream> 分支以来的所有修改提交（commit），然后将这些提交逐个应用于 <upstream> 的 HEAD 上。" },



  { left: "workspace", right: "local_repo", direction: "dn",
    cmd: "cherry-pick <sha>",
    tags: 'Patching',
    docs: "Integrate changes in the given commit into the current branch." },
  { left: "workspace", right: "local_repo", direction: "dn",
    cmd: "revert <sha>",
    docs: "Reverse commit specified by <sha> and commit the result. " +
          "This requires your working tree to be clean (no modifications from the HEAD commit)." },

  { left: "index", right: "local_repo", direction: "status",
    cmd: "diff --cached [<commit>]",
    tags: 'Basic Snapshotting,Inspection and Comparison,Patching',
    docs: "View the changes you staged vs the latest commit. Can pass a <commit> to see changes relative to it."},
  { left: "index", right: "local_repo", direction: "up",
    cmd: "commit -m 'msg'",
    tags: 'Basic Snapshotting',
    docs: "Stores the current contents of the index in a new commit along with a log message from the user describing the changes." },
  { left: "index", right: "local_repo", direction: "up",
    cmd: "commit --amend",
    tags: 'Basic Snapshotting',
    docs: 'Modify the last commit with the current index changes.'},

  { left: "local_repo", right: "local_repo", direction: "status",
    cmd: "log",
    tags: 'Branching and Merging, Inspection and Comparison',
    docs: 'Show recent commits, most recent on top. Options:' +
          '--decorate    with branch and tag names on appropriate commits' +
          '--stat        with stats (files changed, insertions, and deletions)' +
          '--author=foo  only by a certain author' +
          '--after="MMM DD YYYY" ex. ("Jun 20 2008") only commits after a certain date' +
          '--before="MMM DD YYYY" only commits that occur before a certain date' +
          '--merge       only the commits involved in the current merge conflicts' },
  { left: "local_repo", right: "local_repo", direction: "status",
    cmd: "diff <commit> <commit>",
    tags: 'Basic Snapshotting, Inspection and Comparison,Patching',
    docs: "View the changes between two arbitrary commits" },
  { left: "local_repo", right: "local_repo", direction: "status",
    cmd: "branch",
    tags: 'Branching and Merging',
    docs: "List all existing branches. Option -r causes the remote-tracking branches to be listed, and option -a shows both." },
  { left: "local_repo", right: "local_repo", direction: "status",
    cmd: "branch -d <branch>",
    tags: 'Branching and Merging',
    docs: "Delete an specified branch. Use -D to force." },
  { left: 'local_repo', right: 'remote_repo', direction: 'dn',
    cmd: "branch --track <new> <remote/branch>",
    tags: 'Branching and Merging',
    docs: 'Create a new local branch that tracks a remote branch.'},


  { left: "workspace", right: "remote_repo", direction: "dn",
    cmd: "clone <repo>",
    tags: 'Creating Projects',
    docs: "Download the repository specified by <repo> and checkout HEAD of the master branch." },
  { left: "workspace", right: "remote_repo", direction: "dn",
    cmd: "pull <remote> <refspec>",
    tags: 'Sharing and Updating',
    docs: "Fetch changes from the remote repo and merge them into the current branch." },
  { left: "workspace", right: "remote_repo", direction: "dn",
    cmd: "reset --hard <remote>/<branch>",
    tags: 'Basic Snapshotting',
    docs: "Reset local repo and working tree to match a remote branch. Use 'reset --hard origin/master' to throw away all commits to the local master branch. Use this to start over on a failed merge." },
  { left: "local_repo", right: "remote_repo", direction: "dn",
    cmd: "fetch <remote> <refspec>",
    tags: 'Sharing and Updating',
    docs: "Download objects and refs from another repository." },
  { left: "local_repo", right: "remote_repo", direction: "up",
    cmd: "push",
    tags: 'Sharing and Updating',
    docs: 'update the server with your commits across all branches that are *COMMON* between your local copy and the server.' +
          'Local branches that were never pushed to the server in the first place are not shared'},
  { left: "local_repo", right: "remote_repo", direction: "up",
    cmd: "push <remote> <branch>",
    tags: 'Sharing and Updating',
    docs: "Push new (or existing) branch to remote repository" },
  { left: "local_repo", right: "remote_repo", direction: "up",
    cmd: "push <remote> <branch>:<branch>",
    tags: 'Sharing and Updating',
    docs: "Push new branch to remote repository with a different name" },

  { left: "remote_repo", right: "remote_repo", direction: "status",
    cmd: "branch -r",
    tags: 'Branching and Merging',
    docs: "List remote branches" },

  { left: "remote_repo", right: "remote_repo", direction: "status",
    cmd: "push <remote> :<branch>",
    tags: 'Sharing and Updating',
    docs: "Remove a remote branch" },

  { left: "workspace", right: "workspace", direction: "dn",
    cmd: "clean",
    tags: 'Administration',
    docs: 'Cleans the working tree by recursively removing files that are not under version control, starting from the current directory.' },

  { left: "stash", right: "workspace", direction: "dn",
    cmd: "stash save [<msg>]",
    tags: 'Branching and Merging',
    docs: 'Save your local modifications to a new stash, and run git reset --hard to revert them. ' +
        'The <message> part is optional and gives the description along with the stashed state. ' +
        'For quickly making a snapshot, you can omit both "save" and <message>.' },
  { left: "stash", right: "workspace", direction: "up",
    cmd: "stash apply [<name>]",
    tags: 'Branching and Merging',
    docs: "Move changes from the specified stash into the workspace. The latest stash is the default." },
  { left: "stash", right: "workspace", direction: "up",
    cmd: "stash pop",
    tags: 'Branching and Merging',
    docs: 'Applies the changes from the last (or specified) stash and then removes the given stash.'},
  { left: "stash", right: "stash", direction: "status",
    cmd: "stash list",
    tags: 'Branching and Merging',
    docs: "List the stashes that you currently have." },
  { left: "stash", right: "stash", direction: "status",
    cmd: "stash show [<stash>]",
    tags: 'Branching and Merging',
    docs: "Show the changes recorded in the stash as a diff between the stashed state and its original parent. " +
        "When no <stash> is given, shows the latest one." },
  { left: "stash", right: "stash", direction: "status",
    cmd: "stash drop [<name>]",
    tags: 'Branching and Merging',
    docs: "Remove a single stashed state from the stash list. When no <stash> is given, it removes the latest one." },
  { left: "stash", right: "stash", direction: "status",
    cmd: "stash clear",
    tags: 'Branching and Merging',
    docs: "Remove all the stashed states. Note that those states will then be subject to pruning, and may be impossible to recover." },
  { left: "stash", right: "local_repo", direction: "up",
    cmd: "stash branch <branchname> [<stash>]",
    tags: 'Branching and Merging',
    docs: 'Creates and checks out a new branch named <branchname> starting from the commit at which the <stash> was originally created, ' +
        'applies the changes recorded in <stash> to the new working tree and index. ' +
        'If that succeeds, and <stash> is a reference of the form stash@{<revision>}, it then drops the <stash>. ' +
        'When no <stash> is given, applies the latest one. \r' +
        'This is useful if the branch on which you ran git stash save has changed enough that git stash apply fails due to conflicts. ' +
        'Since the stash is applied on top of the commit that was HEAD at the time git stash was run, ' +
        'it restores the originally stashed state with no conflicts.' }

];
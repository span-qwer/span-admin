### Git 常用操作命令收集：

#### 1. 分支(branch)操作相关命令

    查看本地分支：$ git branch

    查看远程分支：$ git branch -r

    创建本地分支：$ git branch [name] ----注意新分支创建后不会自动切换为当前分支

    切换分支：$ git checkout [name]

    创建新分支并立即切换到新分支：$ git checkout -b [name]

    创建一个新的本地分支，并与指定的远程分支关联: git checkout -b [name] origin/[name]

    推送本地分支关联到远程仓库: git push --set-upstream origin [name]

    删除分支：$ git branch -d [name] ---- -d / -D

    合并分支：$ git merge [name] ----将名称为[name]的分支与当前分支合并

    创建远程分支(本地分支 push 到远程)：$ git push origin [name]

    删除远程分支：$ git push origin :heads/[name]

#### 2. 版本(tag)操作相关命令

    查看版本：$ git tag

    创建版本：$ git tag [name]

    删除版本：$ git tag -d [name]

    查看远程版本：$ git tag -r

    创建远程版本(本地版本 push 到远程)：$ git push origin [name]

    删除远程版本：$ git push origin :refs/tags/[name]

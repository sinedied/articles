

+ git commit --amend

base on https://blog.sebastian-daschner.com/entries/git-commit-fixup-autosquash

+ git alias
git config --global alias.fixup '!f() { TARGET=$(git rev-parse "$1"); git commit --fixup=$TARGET ${@:2} && EDITOR=true git rebase -i --autostash --autosquash $TARGET^; }; f'
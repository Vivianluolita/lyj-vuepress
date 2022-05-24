!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git remote add origin https://github.com/Vivianluolita/lyj-vuepress.git
git add -A
git commit -m 'deploy'
git branch -M gh-pages
# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:Vivianluolita/lyj-vuepress.git gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# npm run deploy 之后自动会在仓库里生成gh-pages
# git push -f git@github.com:Vivianluolita/lyj-vuepress.git master:gh-pages

cd -
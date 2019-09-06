// задача переписать старый код основанный на коллбэках
import * as ArticlesModel from './articles';
(async () => {
    try {
    let articles = await ArticlesModel.all()
    console.log('articles count = ' + articles.length);
    let ind = Math.floor(Math.random() * articles.length);
    console.log('select index ' + ind + ', id = ' + articles[ind].id)

    let article = await ArticlesModel.one(articles[ind].id)
    console.log(article);

    let res = await ArticlesModel.remove(article.id)
    console.log('что с удалением? - ' + res);
    articles = await ArticlesModel.all()
    console.log('articles count = ' + articles.length);
    }
    catch(e) {
        console.log(e)
    }
})()
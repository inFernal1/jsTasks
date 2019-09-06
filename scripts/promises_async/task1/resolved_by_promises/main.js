// задача переписать старый код основанный на коллбэках
import * as ArticlesModel from './articles';
/*ArticlesModel.all((articles) => {
    console.log('articles count = ' + articles.length);
    
    // берём случайный индекс
    let ind = Math.floor(Math.random() * articles.length);
    console.log('select index ' + ind + ', id = ' + articles[ind].id)

    // получаем статью по id
    ArticlesModel.one(articles[ind].id, (article) => {
        console.log(article);

        // пробуем удалить её
        ArticlesModel.remove(article.id, (res) => {
            console.log('что с удалением? - ' + res);

            // а сколько статей в базе сейчас
            ArticlesModel.all((articles) => {
                console.log('articles count = ' + articles.length);
            }, (error) => {
                console.log(error + ' in articles list after delete');
            });
        }, (error) => {
            console.log(error + ' in articles delete');
        })

    }, (error) => {
        console.log(error + ' in articles one');
    });

}, (error) => {
    console.log(error + ' in articles list');
}); 
*/
ArticlesModel.all()
    .then((articles) => {
        console.log('articles count = ' + articles.length);
        // берём случайный индекс
        let ind = Math.floor(Math.random() * articles.length);
        console.log('select index ' + ind + ', id = ' + articles[ind].id)
        return ArticlesModel.one(articles[ind].id)
    })
    .then(article => {
        console.log(article)
        return ArticlesModel.remove(article.id)
    })
    .then(res => {
        console.log('что с удалением? - ' + res);
        return ArticlesModel.all()
    })
    .then(articles => console.log('articles count = ' + articles.length))
    .catch(console.log) 
/*async function articlesOperations() {
    await ArticlesModel.all((articles) => {
    console.log('articles count = ' + articles.length);
    let ind = Math.floor(Math.random() * articles.length);
    console.log('select index ' + ind + ', id = ' + articles[ind].id)
})
    // берём случайный индекс
    
    await ArticlesModel.one(articles[ind].id, (article) => {
        console.log(article); 
    })
    await ArticlesModel.remove(article.id, (res) => {
        console.log('что с удалением? - ' + res);
    })
    await ArticlesModel.all((articles) => {
        console.log('articles count = ' + articles.length);
    })
}
articlesOperations()
*/
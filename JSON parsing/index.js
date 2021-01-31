var host = "https://jsonplaceholder.typicode.com";

$(function (){

    $.get(host + "/users")
        .done(displayUser)
        .fail(onAjaxFail)

});

function displayUser(data){
    const users = $("#users");

    for(let user of data){
        let div = document.createElement('div');
        div.setAttribute('id' , user.id);

        let p = document.createElement('p');
        p.innerHTML = user.name + ' - ' + user.company.name + '</br>'
            + user.address.suite + ' - ' + user.address.street + ', ' + user.address.city + ' ' + user.address.zipcode
            + '</br>'
            + user.email + '</br>'
            + user.website + '</br>'
            + user.phone + '</br>';

        let showPostsButton = document.createElement('button');
        showPostsButton.addEventListener("click" , function () {
            showPosts(user.id);
        });

        showPostsButton.innerText = 'Show posts';

        p.append(showPostsButton);

        let posts = document.createElement('blockquote');
        posts.setAttribute('id', 'posts_' + user.id);

        div.appendChild(p);
        div.appendChild(posts);

        users.append(div);
        
    }

}

function showPosts(userId){

    $.get(host + "/posts" , {'userId' : userId })
        .done(function (data) {
            displayPosts(data , userId)
        })
        .fail(onAjaxFail);

}

function displayPosts(data, userId){
    let posts = $('#posts_' + userId);
    posts.empty();

    for(let post of data){
        let postBlock = document.createElement('blockquote');
        let tittle = document.createElement('p');
        let content = document.createElement('p');
        let space = document.createElement('br');
        let line = document.createElement('hr');

        let comments = document.createElement('button');
        comments.addEventListener('click', function(){
            showComments(post.id);
        })

        let div = document.createElement('div');
        div.setAttribute('id', 'comments_' + post.id);

        tittle.innerText = post.title;
        content.innerText = post.body;
        comments.innerText = "Show comments";

        postBlock.append(tittle, content, comments, div, space, line);

        posts.append(postBlock);

    }

}

function showComments(postId){
    $.get(host + "/comments" , {'postId' : postId})
        .done(function(data){
            displayComments(data, postId);
        })
        .fail(onAjaxFail);
}

function displayComments(data , postId){
    
    let comments = $('#comments_' + postId);
    comments.empty();

    console.log(data);
    for(let comment of data){
        let block = document.createElement('blockquote');
        let name = document.createElement('p');
        let body = document.createElement('p');
        let line = document.createElement('br');

        name.innerText = comment.name + ' (' + comment.email + ')';
        body.innerText = comment.body;

        block.append(name, body, line);
        
        comments.append(block);
        
    }


}

function onAjaxFail(xhr, status, exception){
    console.log("AJAX Fail: ", xhr, status, exception);
}
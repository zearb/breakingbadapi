const getPost = async ( userId ) => {
    
    const url = 'https://jsonplaceholder.typicode.com/posts?userId='+userId;
    const res = await fetch(url);
    const post = await res.json();

    return post;

}

export default getPost;
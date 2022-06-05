import axios from 'axios'
let url = 'http://localhost:5000/api/posts/'

class PostService {

    static getPosts(){
        return new Promise((resolve, reject) => {
            try {
                const res = axios.get(url)
                const data = res.data
                resolve(
                    data.map(post => ({...post, date: new Date(post.date)}))
                )

            }
            catch(err) {
                reject(err)

            }
        })
    }

    static addPost(text) {
        return axios.post(url, {
            text: text
        })

    }

    static deletePost(id){
        return axios.delete(`${url}${id}`)

    }

}

export default PostService
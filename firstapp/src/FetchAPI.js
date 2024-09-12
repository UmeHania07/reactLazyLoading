import React, { useEffect, useState } from 'react'

function FetchAPI() {
    //ye array of onject hy is liye hum empty array chor dengy
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                response.json().then((result) => {
                    setPosts(result)
                })
            })
    })
    return (
        <div>
            <table border={1}>
                {/* jab bhi array of object ka kam hoga to aisi he function hoga work hoga */}
                {posts.map(pst => {
                    return (
                        <>
                            <tr>
                                <th>ID</th>
                                <td>{pst.id}</td>

                            </tr>

                            <tr>
                                <th>Title</th>
                                <td>{pst.title}</td>
                            </tr>

                            <tr>
                                <th>Body</th>
                                <td>{pst.body}</td>
                            </tr>

                            <tr>
                                <th>User id</th>
                                <td>{pst.userId}</td>
                            </tr>
                        </>

                    )

                })}

            </table>
        </div>
    )
}

export default FetchAPI

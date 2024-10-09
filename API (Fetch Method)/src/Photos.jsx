import React, { useEffect, useState } from 'react'

export default function Photos() {

    const [item , setItem] = useState([])

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setItem(data);
        })
        .catch((err) => console.log(err));
    },[])

  return (
    <div>
        <table border={3}>
            <thead>
                <tr>
                    <th>Sr. No</th>
                    <th>Title</th>
                    <th>Images</th>
                </tr>
            </thead>

            <tbody>
                {
                    item.map((ele,i) => (
                        <tr key={i}>
                            <td>{ele.id}</td>
                            <td>{ele.title}</td>
                            <td><img src={ele.url} alt="" /></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

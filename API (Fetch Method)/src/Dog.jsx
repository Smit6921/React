import React, { useEffect , useState } from 'react'

export default function Dog() {

    const [img , setImg] = useState("");

    const handleChange = () => {
            fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setImg(data.message)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        handleChange()
    },[])


  return (
    <div>
        <img src={img} alt="" className="ForDogImg"/> <br /> <br />
        <button onClick={handleChange}>Change Image</button>
    </div>
  )
}

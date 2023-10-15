import {redirect} from 'react-router-dom'

const URL = 'https://talkspacebe.onrender.com'

export const createAction = async ({request}) => {
    const formData= await request.formData()
    const newDiscussion={
        topic: formData.get("topic"),
        discussion: formData.get("discussion")
    }
    await fetch(`${URL}/discussions`,{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newDiscussion)
    })
    
    return redirect('/')
} 
export const updateAction = async ({request , params}) => {
    const formData = await request.formData()
    const id = params.id

    const updatedDiscussion = {
        topic: formData.get("topic"),
        discussion: formData.get("discussion")
    } 
    await fetch(URL + `/discussions/${id}`,{
        method: "PUT",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(updatedDiscussion)
    })
    return redirect(`/`)
}

export const deleteAction = async ({params}) => {
    const id = params.id
    await fetch(URL + `/discussions/${id}`,{
        method: "delete",  
    })
    return redirect('/')
}
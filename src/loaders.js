const URL = 'https://talkspacebe.onrender.com'

export const indexLoader = async () => {
    const response = await fetch(URL)
    const allDiscussions = await response.json()
    return(allDiscussions)
}

export const showLoader = async({params}) => {
    const response = await fetch(URL + `/discussions/${params.id}`)
    const discussion = await response.json()
    return(discussion)
}
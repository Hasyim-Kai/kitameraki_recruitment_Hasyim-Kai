export interface Task {
    id?: number
    title: string
    desc?: string
    date?: string
}

export const dummyTask = [
    {
        title: 'coba 1',
        desc: 'lorem ipsum sdfa  sdfa sadfasdfa sdfasdf asdfgasrgw ef lorem ipsum sdfa  sdfa sadfasdfa sdfasdf asdfgasrgw ef lorem ipsum sdfa  sdfa sadfasdfa sdfasdf asdfgasrgw ef lorem ipsum sdfa  sdfa sadfasdfa sdfasdf asdfgasrgw ef lorem ipsum sdfa  sdfa sadfasdfa sdfasdf asdfgasrgw ef lorem ipsum sdfa  sdfa sadfasdfa sdfasdf asdfgasrgw ef lorem ipsum sdfa  sdfa sadfasdfa sdfasdf asdfgasrgw ef'
    },
    {
        title: 'coba 2',
        desc: 'lorem ipsum sdfa  sdfa sadfasdfa sdfasdf asdfgasrgw ef'
    }
]

const url = `http://localhost:4000/api/task`

export const fetchTask = async (page: number = 1) => {
    const res = await fetch(`${url}?page=${page}`)
    return await res.json()
}

export const fetchPostTask = async (input: Task) => {
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(input),
        cache: 'default',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return await res.json()
}

export const fetchUpdateTask = async (input: Task) => {
    const res = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(input),
        cache: 'default',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return await res.json()
}

export const fetchDelTask = async (id: number | string) => {
    const res = await fetch(url + id, {
        method: 'DELETE',
        cache: 'default',
    })
    return await res.json()
}
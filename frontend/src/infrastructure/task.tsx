export interface Task {
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

const url = `localhost:3000/api/task/`

export const fetchTask = async () => {
    try {
        const res = await fetch(url)
        return await res.json()
    } catch (error) {
        return error
    }
}

export const fetchPostTask = async (input: Task) => {
    try {
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
    } catch (error) {
        return error
    }
}

export const fetchUpdateTask = async (input: Task) => {
    try {
        const res = await fetch(url, {
            method: 'UPDATE',
            body: JSON.stringify(input),
            cache: 'default',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return await res.json()
    } catch (error) {
        return error
    }
}

export const fetchDelTask = async (id: number | string) => {
    try {
        const res = await fetch(url + id, {
            method: 'DELETE',
            cache: 'default',
        })
        return await res.json()
    } catch (error) {
        return error
    }
}
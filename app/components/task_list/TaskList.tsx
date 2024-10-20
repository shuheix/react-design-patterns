'use client'

import useSWR from "swr"
import { TaskCard, TaskDetail } from "../task/TaskCard"

export const TaskList = () => {
    const BASE_URL = "https://jsonplaceholder.typicode.com"
    const fetcher = (path: string) => (fetch(`${BASE_URL}${path}`).then((res) => res.json()))
    const { data: posts } = useSWR<TaskDetail[]>('/posts', fetcher)
    
    return (
        <div>
            {posts?.map((post)=>(
                <TaskCard post={post}/>
            ))}
        </div>
    )
}
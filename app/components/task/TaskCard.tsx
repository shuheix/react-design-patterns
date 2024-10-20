'use client'

import { FC } from "react";

export type TaskDetail = {
    id: number;
    title: string;
    body: string;
}

type TaskCardProps = {
    post: {
        id: number;
        title: string;
        body: string;
    }
}

// このレイヤーはロジックをもたず、ただ表示するだけ。

export const TaskCard: FC<TaskCardProps> = ({post}) => {
    return (
        <div key={post.id}>
            {post.title}
        </div>
    )
}
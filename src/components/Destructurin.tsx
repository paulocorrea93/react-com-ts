import React from 'react'

type Props = {
    title: string
    content: string
    commentQtd: number
    tags: string[]
}

const Destructurin = ({title, content, commentQtd, tags}: Props) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{commentQtd}</p>
        <div>
            {tags.map(tag => (
                <span>#{tag} </span>
            ))}
        </div>
    </div>
  )
}

export default Destructurin
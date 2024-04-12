"use client"
export default function Lecture({params}){
    console.log(params);
    return (
        <div>
            lecture 1 of college
            <h2>hello {params.lecture[1]}</h2>
        </div>
    )
} 
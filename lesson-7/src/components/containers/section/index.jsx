import React from 'react'

export default function index({children, id}) {
    if(id){
        return (
            <section id={id}>
                {children}
            </section>
        )
    }
    return (
        <section>
            {children}
        </section>
    )
}

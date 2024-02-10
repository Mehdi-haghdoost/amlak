import Home from '@/components/modules/Home'
import React from 'react'
import db from './../../../data/db'

function Homes() {

    console.log(db);

    return (
        <div class="homes">
            {
                db.homes.slice(0,6).map(home => (
                    <Home key={home.id}  {...home} />
                ))
            }
        </div>
    )
}

export default Homes
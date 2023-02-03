import React from 'react'
import { useState,useEffect } from 'react'
//This component displays the list of imported files
export default function ListFiles() {
    const [files, setFiles] = useState([]);
    const [searchFile, setSearchFile] = useState("")
    useEffect(() => {
        let files = JSON.parse(localStorage.getItem("files") || "[]")
        setFiles(files);
    }, [])
    
   
    return (
        <div>
            <div className='containerr'>
                <form action="#" className='search-bar'>
                    <input type="text" name="query" id="query" placeholder="Search" onChange={event => { setSearchFile(event.target.value) }} />
                    <button type='button'><img src='../assets/images/search.png' /></button>
                </form>
            </div>
            <div className='liste'>
                {files.filter((val) => {
                    if (searchFile == "") {
                        return val
                    } else if (val.fileName.toLowerCase().includes(searchFile.toLowerCase())) {
                        return val
                    }
                }).map((value, key) => (
                    <ul className='valListe' key={key}>
                        <li>
                            <img src='../assets/images/pdf.png' />
                            <div>
                            <p >{value.fileName}</p>
                            <p>{value.dateFile}</p>
                            </div>
                            
                        </li>
                    </ul>
                ))}
            </div>{files.length===0 ? <>No Files to display</>: <></>}

            
        </div>
    )
}

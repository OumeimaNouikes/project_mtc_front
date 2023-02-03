import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'


//This component allows you to add files from the 'add' button in order to view or print this file from the 'upload' button
export default function AddFiles() {
    const navigate = useNavigate();
    const [pdfFile, setPdfFile] = useState(null)
    const [viewPdfFile, setViewPdfFile] = useState(null)
    const fileType = ['application/pdf']
    const newplugin = defaultLayoutPlugin()
    const [fileName, setFileName] = useState("")
    const [dateFile,setDateFile]=useState("")
    const handleClick = () => {
        let data = {
                fileName,
                dateFile,
            };
            let fileId = JSON.parse(localStorage.getItem("fileId") || "1")
            data.id = fileId
            let files = JSON.parse(localStorage.getItem("files") || "[]")
            files.push(data)
            console.log(files);
            localStorage.setItem("files", JSON.stringify(files))
            localStorage.setItem("fileId", JSON.stringify(fileId + 1))
            navigate("/liste")
        };
        
    const handleChangee = (e) => {
        let selectedFile = e.target.files[0]
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader()
                reader.readAsDataURL(selectedFile)
                reader.onload = (e) => {
                    setPdfFile(e.target.result)
                }
            }
            else {
                setPdfFile(null)
            }
        }
        else {
            console.log("please select file")
        }
        console.log(e.target.files[0]);
        let s=e.target.files[0]
        let x=s.lastModifiedDate
        setDateFile(x.toLocaleDateString());
        setFileName(s.name)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (pdfFile !== null) {
            setViewPdfFile(pdfFile)
        } else {
            setViewPdfFile(null)
        }
    }
    return (
        <div>
            <form>
                <h3>Download area</h3>
                <input type="file" className='box-upload' placeholder='search for a file' onChange={handleChangee} />
                <button type='submit' className='btn-upload' onClick={handleSubmit}>upload</button><br></br><br></br>
                <button type='submit' className='btn-add' onClick={handleClick}>Add a file</button>
            </form>
            <div className='pdf-container'>
                <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js'>
                    {viewPdfFile && <> <Viewer fileUrl={viewPdfFile} plugins={[newplugin]} />
                    </>}
                    {!viewPdfFile && <></>}
                </Worker>
            </div>
        </div>
    )
}

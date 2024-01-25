import React from 'react'
import { useCallback, Dispatch, SetStateAction } from 'react'


type FileUploaderProps = {
    onFieldChange: () => void
    imageUrl: string
    setFiles: Dispatch<SetStateAction<File[]>>
}

const FileUploader = ({ onFieldChange, imageUrl, setFiles }: FileUploaderProps) => {
    return (
        <div>
            File Uploader
        </div>
    )
}

export default FileUploader

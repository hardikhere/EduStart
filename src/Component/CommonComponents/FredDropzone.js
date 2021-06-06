import React, { useEffect, useState } from 'react'
import DropZone from 'react-dropzone';
import axiosInstance from '../../utils/axiosInstance';
import { APIS } from '../../utils/endpoints';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const activeStyle = '#2196f3';

const FredDropzone = (props) => {
    const [imageUploadLoading, setimageUploadLoading] = useState(false)
    const [UserResponse, setUserResponse] = useState({
        imageUrls: []
    })

    useEffect(() => {
        props.setImageUrls(UserResponse.imageUrls);
    }, [UserResponse])

    const removeUrl = (url) => {
        const newArray = UserResponse.imageUrls.filter(el => {
            if (el === url) return false;
            else return true;
        });
        setUserResponse({
            imageUrls: newArray
        })
    };

    const handleOnDrop = acceptedFiles => {
        const numberOfFiles = acceptedFiles.length;
        let uploaded = 0;
        let imgurls = [];
        setimageUploadLoading(true);
        acceptedFiles.forEach(pic => {
            const formData = new FormData();
            formData.set("pic", pic);
            axiosInstance.post(APIS._uploadImage, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }).then(res => {
                uploaded++;
                console.log("uploaded ", res.data);
                imgurls.push(res.data.data.url);
                if (uploaded === numberOfFiles) {
                    setimageUploadLoading(false);
                    setUserResponse({
                        imageUrls: UserResponse.imageUrls.concat(imgurls)
                    })
                }
            })
        })
    }
    return (
        <div>
            <DropZone onDrop={handleOnDrop}>
                {({ getRootProps, getInputProps, isDragActive }) => (
                    <section>
                        <div {...getRootProps()}
                            onMouseOver={(e) => { e.target.style.color = activeStyle }}
                            onMouseOut={(e) => { e.target.style.color = "grey" }}
                            style={{
                                ...baseStyle,
                                color: isDragActive ? activeStyle : "grey",
                                borderColor: isDragActive ? activeStyle : "grey",
                            }}>
                            <input {...getInputProps()} multiple disabled={imageUploadLoading} />
                            {
                                imageUploadLoading ? <p>Please wait while we are uploading images</p>
                                    : <p>Click here to upload images OR Drag & Drop files here</p>
                            }
                        </div>
                    </section>
                )}
            </DropZone>

            <div className="img-container">
                {
                    UserResponse.imageUrls?.map(imgurl => {
                        return <div className="img-item">
                            <div className="cross" onClick={() => removeUrl(imgurl)}>&times;</div>
                            <img src={imgurl} style={{ height: "inherit" }} alt="" />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default FredDropzone

import React, { useState, useEffect } from 'react'
import { ValidateEmail } from '../../utils/common'

const useLoginValidator = (props) => {
    const [emailErr, setemailErr] = useState(false)
    const [passwordErr, setpasswordErr] = useState(false)
    const [confirmpassErr, setconfirmpassErr] = useState(false)

    useEffect(() => {
        console.log(props)
        if (!ValidateEmail(props.email))
            setemailErr(true)
        else
            setemailErr(false)
        if (props?.password?.length < 8) {
            setpasswordErr(true)
        } else setpasswordErr(false);

        if (props?.confirmPassword !== props?.password || props?.confirmPassword?.length < 8) {
            setconfirmpassErr(true)
        } else setconfirmpassErr(false);

    }, [props]);

    return {
        emailErr, passwordErr, confirmpassErr
    };
}

export default useLoginValidator

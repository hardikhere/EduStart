import React from 'react'
import { FormControl, Form, Button } from "react-bootstrap"

const AddCredits = () => {
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>
                        Number of Credits
                    </Form.Label>
                    <FormControl type="number" style={{ width: "20rem" }} />
                    <Button className="m-1">
                        Add
                    </Button>
                </Form.Group>
            </Form>

        </div>
    )
}

export default AddCredits

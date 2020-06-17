import React from 'react';
import { Dialog, Button } from 'element-react/next';

function DialogElement (props){
    return (<Dialog
        title={props.title}
        size="tiny"
        visible={ props.visible }
        onCancel={ () => props.onCancel() }
        lockScroll={ false }
    >
        <Dialog.Body>
            <span>
                { props.message }
            </span>
        </Dialog.Body>
        <Dialog.Footer className="dialog-footer">
            <Button onClick={ props.onCancel }>Cancel</Button>
            <Button type="primary" onClick={ props.onConfirm }>Confirm</Button>
        </Dialog.Footer>
    </Dialog>)
}

export default DialogElement
import React from 'react'
import { Button, Header, Image, Modal, Form} from 'semantic-ui-react'


function ModalLogin({login}) {
  const [open, setOpen] = React.useState(false)
  

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button  color="blue">Sign in</Button>}
    >
      <Modal.Header>Sign in</Modal.Header>
      <Modal.Content>
        <Modal.Description>
        <Form.Field>
      <label>Email</label>
      <input placeholder='Email' />
    </Form.Field>
    <Form.Field >
      <label>Password</label>
      <input placeholder='Password' />
    </Form.Field >
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button onClick={login}>
        Login
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalLogin

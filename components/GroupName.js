import React, {useState} from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";


export default function GroupName({group,groups,setGroups}) {
    const [visible, setVisible] = useState(false);
    const [nom,setNom]=useState("")


    const handler = () => setVisible(true);

    const closeHandler = (save) => {
        if(save) {
            let array=[...groups];
            array[group.index]={...group,nom:nom}
            setGroups(array)
        };
        setVisible(false);
    };

    return (
        <span>
            <Button auto shadow onClick={handler}>
                Editer
            </Button>
            <Modal
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={()=>closeHandler(false)}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Changer le nom du groupe
                        <Text b size={18} css={{marginLeft:"5px"}}>
                            {group.nom}
                        </Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        onChange={({target})=>setNom(target.value)}
                        placeholder="Nouveau nom..."
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onClick={()=>closeHandler(false)}>
                        Annuler
                    </Button>
                    <Button auto onClick={()=>closeHandler(true)}>
                        Valider
                    </Button>
                </Modal.Footer>
            </Modal>
        </span>
    );
}
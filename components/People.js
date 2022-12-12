import {Modal, useModal, Button, Text, User, Input} from "@nextui-org/react";
import {useState} from "react";
import {faker} from "@faker-js/faker";

export default function People({people,setPeople}) {
    const { setVisible, bindings } = useModal();


    const [nom,setNom]=useState("");
    const [prenom,setPrenom]=useState("");
    const [special,setSpecial]=useState("");

    const addPeople = () =>{
        setPeople([...people,{special,prenom,nom}])
    }
    const generateRandom = () =>{
        setPeople([...people,{special:faker.name.sex(),prenom:faker.name.firstName(),nom:faker.name.lastName()}])
    }

    return (
        <div>
            <Button auto ghost color="gradient" onClick={() => setVisible(true)}>
                Gérer les personnes
            </Button>
            <Modal
                scroll
                width="1000px"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Gérer les personnes
                    </Text>
                </Modal.Header>
                <Modal.Body css={{height:"700px"}}>
                    <div style={{justifyContent:"center",display:"flex"}}>
                        <Input
                            clearable
                            bordered
                            label="Prénom"
                            value={prenom}
                            onChange={({target})=>setPrenom(target.value)}></Input>
                        <Input
                            clearable
                            bordered
                            label="Nom"
                            value={nom}
                            onChange={({target})=>setNom(target.value)}
                            css={{marginLeft:"10px",marginRight:"10px"}}></Input>
                        <Input
                            clearable
                            bordered
                            label="Caractéristique"
                            value={special}
                            onChange={({target})=>setSpecial(target.value)}></Input>
                        <div style={{display:"flex",alignItems:"end",marginLeft:"10px"}}>
                            <Button ghost color={"gradient"} onClick={addPeople} disabled={!nom||!prenom||!special}>Ajouter</Button>
                        </div>

                    </div>
                    <div style={{display:"flex",flexDirection:"column",overflow:"auto"}}>
                        {people.map((user,index)=><div key={index}><User
                            text={user.prenom}
                            name={user.prenom+" "+user.nom}
                            description={user.special}
                        /></div>)}
                    </div>

                </Modal.Body>
                <Modal.Footer css={{justifyContent:"space-between"}}>
                    <Button ghost color={"gradient"} onClick={generateRandom}>
                        Ajouter un random
                    </Button>
                    <Button auto onClick={() => setVisible(false)}>
                        Valider
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
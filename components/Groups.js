import {Avatar, Card, Grid, Spacer, Text, User} from "@nextui-org/react";

export default function Groups({groups}){
    const Group = ({group,index}) => {
        return (
            <Grid xs={6} md={3}>
                <Card css={{ minHeight: "400px", maxHeight:"400px" }}>
                    <Card.Body>
                        <Text h6 size={15} color="dark" css={{ m: 0 }}>
                            {"Groupe "+(index+1)}
                        </Text>
                        <Spacer/>
                        <div style={{overflowY:"auto",height:"100%"}}>
                            {group?.users?.map((user)=> <User
                                text={user.prenom}
                                name={user.prenom+" "+user.nom}
                                description={user.special}
                            />)}
                        </div>
                    </Card.Body>
                </Card>
            </Grid>
        );
    };
    return <>
        <Grid.Container gap={2} justify="center">
            {groups?.map((group,index)=>
                <Group key={index} group={group} index={index}/>
            )}
        </Grid.Container>
    </>

}
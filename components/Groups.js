import {Card, Grid, Spacer, Text, User} from "@nextui-org/react";
import React from "react";
import GroupName from "./GroupName";

export default function Groups({groups,setGroups}){
    const Group = ({group,index,groups,setGroups}) => {
        return (
            <Grid xs={6} md={3}>
                <Card css={{ minHeight: "400px", maxHeight:"400px" }}>
                    <Card.Body>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <Text h6 size={15} color="dark" css={{ m: 0 }}>
                                {group.nom}
                            </Text>
                            <GroupName group={group} setGroups={setGroups} groups={groups}/>
                        </div>

                        <Spacer/>
                        <div style={{overflowY:"auto",height:"100%"}}>
                            {group?.users?.map((user,index)=> <User
                                key={index}
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
                <Group key={index} group={group} index={index} setGroups={setGroups} groups={groups}/>
            )}
        </Grid.Container>
    </>

}
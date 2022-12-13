import styles from '../styles/Home.module.css'
import Groups from "../components/Groups";
import {Button, Card, Container, Grid, Input, Row, Spacer, Switch, Text} from "@nextui-org/react";
import People from "../components/People";
import {useState} from "react";

export default function Home() {
    const [people,setPeople] = useState([]);
    const [groups,setGroups] = useState([]);

    const [maxPerGroup,setMaxPerGroup] = useState("");
    const [minOfGroup,setMinOfGroup] = useState("");
    const [numberPerGroup,setNumberPerGroup] = useState("");
    const [pair,setPair] = useState(false);

    const generateGroups = () =>{
        if(!numberPerGroup&&!minOfGroup&&!maxPerGroup)return;
        let possibleNumberOfGroups = [];
        if(maxPerGroup){
            let max = parseInt(people.length/maxPerGroup);
            for(let i=people.length;i>=max;i--){
                possibleNumberOfGroups.push(i)
            }
        }

        let numberOfGroups=parseInt(people.length/parseInt(numberPerGroup));
        let perGroup=people.length/numberOfGroups;
        let peopleCopy = [...people]
        setGroups(Array(numberOfGroups).fill().map((value,index)=>{
            let array=[];
            if(index===numberOfGroups)
                array=[...peopleCopy];
            else{
                for(let i=0;i<perGroup;i++){
                    array.push(peopleCopy.shift())
                }
            }

            return {users:array,nom:"Groupe "+(index+1),index:index};
        }))
    }

  return (
    <div style={{height:"100vh"}}>
        <Row>
            <Card css={{height:"100%"}}>
                <Card.Body>
                    <Text h3>Group Maker Shaker</Text>
                   <div>
                       <People people={people} setPeople={setPeople}/>
                       <div style={{display:"flex",marginTop:"20px"}}>
                           <div >
                               <div style={{display:"flex",alignItems:"center"}}>
                                   <span style={{marginRight:"20px"}}>Le nombre de groupe doit être pair</span>
                                   <Switch shadow color="primary" checked={pair} onChange={({target})=>setPair(target.value)}/>
                               </div>
                               <Spacer/>
                               <div>
                                   <span style={{marginRight:"20px"}}>Nombre minimum de groupe</span>
                                   <Input type={"number"} color="primary" value={minOfGroup} onChange={({target})=>setMinOfGroup(target.value)}/>
                               </div>
                               <Spacer/>
                               <div>
                                   <span style={{marginRight:"20px"}}>Nombre de personnes par groupes</span>
                                   <Input type={"number"} color="primary" value={numberPerGroup} onChange={({target})=>setNumberPerGroup(target.value)}/>
                               </div>

                               <Spacer/>
                               <div>
                                   <span style={{marginRight:"20px"}}>Nombre maximum personne par groupe</span>
                                   <Input type={"number"} color="primary" value={maxPerGroup} onChange={({target})=>setMaxPerGroup(target.value)}/>
                               </div>
                               <Button ghost color={"gradient"} css={{marginTop:"20px"}} onClick={generateGroups}>Générer les groupes</Button>
                           </div>
                        </div>
                   </div>
                </Card.Body>
            </Card>
        </Row>
        <Spacer/>
        <Row >
            <Groups groups={groups} setGroups={setGroups}/>
        </Row>
    </div>
  )
}

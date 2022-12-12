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
    console.log(groups)
    const generateGroups = () =>{
        let numberOfGroups=parseInt(people.length/parseInt(numberPerGroup));
        let perGroup=people.length/numberOfGroups;
        let peopleCopy = [...people]
        setGroups(Array(numberOfGroups).fill().map((value,index)=>{
            let array=[];
            for(let i=0;i<(index+1)*perGroup;i++){
                console.log(people[i])
                array.push(peopleCopy[i])
            }
            return {users:array,nom:""};
        }))
    }

  return (
    <div style={{height:"100vh",overflow:"auto"}}>
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
                                   <span style={{marginRight:"20px"}}>Le nombre minimum de groupe</span>
                                   <Input type={"number"} color="primary" value={minOfGroup} onChange={({target})=>setMinOfGroup(target.value)}/>
                               </div>
                               <Spacer/>
                               <div>
                                   <span style={{marginRight:"20px"}}>Le nombre de personnes par groupes</span>
                                   <Input type={"number"} color="primary" value={numberPerGroup} onChange={({target})=>setNumberPerGroup(target.value)}/>
                               </div>

                               <Spacer/>
                               <div>
                                   <span style={{marginRight:"20px"}}>Le nombre maximum personne par groupe</span>
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
            <Groups groups={groups}/>
        </Row>
    </div>
  )
}

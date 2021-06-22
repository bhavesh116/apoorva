import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import { Button, CardHeader, Input, Card, Chip, Typography, Checkbox } from '@material-ui/core';
import { getNotes, createNote } from '../controller/notes'

const notes = [
    { title: "Title", description: "some description", tags: ["book", "shelf", "something"] },
    { title: "Title2", description: "some description 2", tags: ["book", "shelf"] },
    { title: "Title3", description: "some description 3", tags: ["book", "shelf", "chuirciu4"] },
    { title: "Title4", description: "some description 4", tags: ["book", "shelf", "something"] }
]

const tags = ["important", "temporary", "useful"]

const initialState = {
    notes,
    title: '',
    description: '',
    tags: Array()
}
const Notes = (props: any) => {
    const [state, updateState] = useState(initialState)

    useEffect(() => {
        getNotes().then((data) => {
          console.log('DDDD', data)
        }).catch(err => console.log(err))
    }, [])
       
    console.log('####', state)
    return (
        <div>
            <br />
            <Typography style={{ marginLeft: '30px' }} variant="h3">Notes</Typography>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '30px' }}>
                <Card style={{ padding: '20px' }} title="Notes">
                    <div style={{ display: 'flex', flexWrap: 'wrap', width: '1200px' }}>
                        {
                            state.notes.map(note => (
                                <div style={{ padding: '10px', margin: '10px', minWidth: '300px', border: '1px solid #d3d3d3', display: 'flex', flexDirection: 'column' }}>
                                    <span><strong>{note.title}</strong></span>
                                    <br />
                                    <span>{note.description}</span>
                                    <br />
                                    <br />
                                    {
                                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                            {
                                                note.tags.map(tag => (
                                                    <Chip label={tag} />
                                                ))
                                            }
                                        </div>
                                    }
                                </div>
                            ))
                        }
                    </div>
                </Card>
                <Card style={{ width: '500px', padding: '20px' }} title="Create Note">
                    <span> Title </span>
                    <br />
                    <Input value={state.title} onChange={e => updateState({ ...state, title: e.target.value })} placeholder="title" />
                    <br />
                    <br />
                    <span> Description </span>
                    <br />
                    <Input value={state.title} onChange={e => updateState({ ...state, description: e.target.value })} placeholder="description" />
                    <br />
                    <br />
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {
                            tags.map(tag => (
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems:'center' }} >
                                    <strong>{tag}</strong>
                                    <Checkbox
                                        color="primary"
                                        checked={state.tags.includes(tag)}
                                        onChange={(e) => {
                                            const newTags =  e.target.checked ? [...state.tags, tag] : state.tags.filter((item) => item !== tag)
                                            updateState({ ...state, tags: newTags })
                                        }}
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <Button variant="contained" color="primary">"Create"</Button>
                </Card>
            </div>
        </div>
    );
}

export default Notes;

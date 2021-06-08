import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {reorder, move, getItemStyle, getListStyle} from './co'

import Block from './Block/Block'
import Create from "./Block/Create";

import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://wfapkikzcykkjzxihggu.supabase.co', process.env.REACT_APP_SUPABASE_KEY)
const weekdays = ['Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag','Söndag']

export default function Week() {
  const [state, setState] = useState([]);

  useEffect(() => {
    readItems()
  }, [])

  async function readItems() {
    let { data: planner, error } = await supabase
    .from('planner')
    .select('*')
    if(error) console.log(error)
    
    const sortByTwo = (obj, primary, secondary) => obj.sort((x, y) => {
      var n = y[primary] - x[primary]
      if (n != 0) return n
      return x[secondary] - y[secondary]
    })
    const week = weekdays.map((day, index) => sortByTwo(planner.filter(item => item.group === index), 'prio', 'index'))
    setState(week)
  }

  async function updateItem(newItem) {
    const { data, error } = await supabase
    .from('planner')
    .update(newItem)
    .eq('id', newItem.id)
    console.log(data, error)
  }

  async function updateItemSingle(newItem) {
    const { data, error } = await supabase
    .from('planner')
    .update(newItem)
    .eq('id', newItem.id)
    console.log(data, error)
    readItems()
  }

  async function createItem(newItem) {
    const { data, error } = await supabase
    .from('planner')
    .insert([newItem])
    console.log(data, error)
    readItems()
  }

  async function deleteItem(item) {
    const { data, error } = await supabase
    .from('planner')
    .delete()
    .eq('id', item.id)
    console.log(data, error)
    readItems()
  }

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

 
    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);

      items.map((item, index) => {
        item.index = index
        updateItem(item)
        return
      })
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState);


      const preUpdate = (items, group) => items.map((item, index) => {
        item.index = index
        item.group = group
        updateItem(item)
        return
      })

      preUpdate(result[sInd], sInd)
      preUpdate(result[dInd], dInd)
    }
  }



  const header = ind => (
    <div style={{display: "flex", alignItems:"center", justifyContent: "space-between"}}>
      <div>
        {weekdays[ind]}
      </div>
      <Create create={createItem} group={ind} />
    </div>
  )

  return (
    <div>
      <div style={{ display: "flex"}}>
        <DragDropContext onDragEnd={onDragEnd}>
          {state.map((el, ind) => (
            

// // DAY HERE
            <div key={ind} style={{margin:"0 5px"}}> 
              {header(ind)}





              <Droppable droppableId={`${ind}`}>
                {(provided, snapshot) => (<div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>
                  {el.map((item, index) => (
                    <Draggable key={item.id} draggableId={String(item.id)} index={index}>
                      {(provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                        style={getItemStyle( snapshot.isDragging, provided.draggableProps.style )}>

{/* ---------------------------------------------------------------------------- */}
                          
                          <Block full={true} item={item} delete={deleteItem} update={updateItemSingle} create={createItem} />
{/* ---------------------------------------------------------------------------- */}



                </div>)}</Draggable>))} {provided.placeholder} </div> )}
            </Droppable></div>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
  
}

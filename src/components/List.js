import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos } from 'reducers/todos'
import { Item } from './Item.js'

const ListContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
`

const ListActionButton = styled.button`
  align-self: center;
  padding: 4px;
  margin: 2px;
  font-size: 22px;
  color: #3f3f3f;
`

export const List = () => {
  const dispatch = useDispatch()
  const items = useSelector((store) => store.todos.items)

  return (
    <ListContainer>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
      <ListActionButton onClick={() => dispatch(todos.actions.removeOne())}>
        Remove One
      </ListActionButton>
    </ListContainer>
  )
}
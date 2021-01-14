import React from 'react'
import styled from 'styled-components/macro'


const Component = styled.div`

    padding : 1rem;    

`
const Item = styled.div`

    display : flex;
    align-items : center;

    &:not(:last-of-type) {
        margin-bottom : 0.5rem;
    }

`
const buttonStyles = `

    background-color : transparent;
    width : 20px;
    height : 20px;
    border-radius : 50%;
    display : flex;
    align-items : center;
    justify-content : center;
    padding : 0;
    font-size : 0.9rem;

    &:focus {
        outline : 0;
    }

    &:hover {
        cursor : pointer;
        filter : brightness(105%);
    }
`
const Complete = styled.button`

    ${buttonStyles};

    border : ${(props) => (props.completed ? 0 : '1px solid #e2e8f0')};

`
const Label = styled.p`

    margin : 0 0 0 0.5rem;
    flex : 1;

    text-decoration : ${props => props.completed ? 'line-through' : 'none'};

    color : ${props => props.completed ? '#4A5568' : '#000'};

    &:hover {
        cursor : pointer;
        color : #6495ED;
    }
`
const Delete = styled.button`

    ${buttonStyles};
    border : 0;
`

const NoItems = styled.p`

    margin : 0;
    text-align : center;
    color : #6495ED;
`


const List = ({items, onComplete, onDelete}) => (
<Component>
    {items.map((item) => (
        <Item key={item.id}>
        <Complete completed={item.completed} onClick={onComplete(item.id)}>{item.completed && (<span role='img' aria-label='complete'>&#9989;</span>)}</Complete>
        <Label completed={item.completed}>{item.label}</Label>
        <Delete onClick={onDelete(item.id)}><span role='img' aria-label='complete'>&#10060;</span></Delete>
        </Item>       
    ))}
     {items.length === 0 && <NoItems>Is so Empty Here</NoItems>}
</Component>
)

export default List
import styled from 'styled-components';
import reactIcon from "../../images/reactHook.svg"

export const SearchForm = styled.form`
    
    display: flex;

    gap: 8px;

    & >input{
        min-width: 300px;
        outline: none;
        padding: 12px 38px 12px 12px;
        font-size: 14px;
        border-radius: 4px;
        border: 3px solid transparent;
        box-shadow: var(--shadow-four);

        background-image: url(${reactIcon});
        background-size: contain;
        background-position: right center;
        background-repeat: no-repeat;

        &:focus {
           border-color: var(--orange);
        }
    }
`

export const Note = styled.span`
    font-size: 18px;
    font-weight: 700;
    color: #777;
`
import styled  from 'styled-components';

export const ReviewList = styled.ul`
    width: 90%;
    padding: 20px 0;
    
    display: flex;
    flex-direction: column;
    gap: 16px;

    &>li{
        background-color: var(--beige);
        padding: 12px;
        border-radius: 8px;
        box-shadow: var(--shadow-four);
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`
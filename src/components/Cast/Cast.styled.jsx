import styled  from 'styled-components';

export const ListWrap = styled.ul`
  width: 90%;  
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 32px;
  justify-items: center;

  &>li {
    width: 200px;

    &>.info-wrapper {
        background-color: var(--beige);
        padding: 12px 8px;
        height: 120px;
        border-radius: 0 0 8px 8px;

        display: flex;
        flex-direction: column;
        gap:12px;

        &>h3 {
          text-align: center;
        }

        &>p{
          font-weight: 600;
          color:#555 ;
        }
    }
  }

`

export const ActorCard = styled.div`
    

` 
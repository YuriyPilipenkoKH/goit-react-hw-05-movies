import styled  from 'styled-components';

export const ActorsList = styled.ul`
  width: 90%;  
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 32px;
  justify-items: center;

`

export const ActorCard = styled.div`
        width: 200px;

&>.info-wrapper {
    background-color: var(--beige);
    padding: 12px 8px;
    height: 110px;
    border-radius: 0 0 8px 8px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    gap:10px;

    &>h3 {
      text-align: center;
    }

    &>p{
      font-weight: 600;
      line-height: 1.3em;
      color:#555 ;
    }
}

` 
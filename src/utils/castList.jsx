import actor1 from '../images/actors/actor1.jpg'
import actor2 from '../images/actors/actor2.jpg'
import actor3 from '../images/actors/actor3.jpg'
import actor4 from '../images/actors/actor4.jpg'
import actor5 from '../images/actors/actor5.jpg'
import actor6 from '../images/actors/actor6.jpg'
import actor7 from '../images/actors/actor7.jpg'
import actor8 from '../images/actors/actor8.jpg'

import actress1 from '../images/actresses/actress1.jpg'
import actress2 from '../images/actresses/actress2.jpg'
import actress3 from '../images/actresses/actress3.jpg'
import actress4 from '../images/actresses/actress4.jpg'
import actress5 from '../images/actresses/actress5.jpg'
import actress6 from '../images/actresses/actress6.jpg'
import actress7 from '../images/actresses/actress7.jpg'
import actress8 from '../images/actresses/actress8.jpg'

export const ActorsListMaker =()=> {
    const n = Math.floor(Math.random() * 8)
    const list =  [actor1, actor2, actor3, actor4, actor5, actor6, actor7, actor8]
    return(
     list[n]
    )
}
export const ActressesListMaker =()=> {
    const n = Math.floor(Math.random() * 8)
    const list =  [actress1, actress2, actress3, actress4, actress5, actress6, actress7, actress8]
    return(
     list[n]
    )
}


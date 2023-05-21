import company1 from '../images/companies/20_centuryfox.jpg'
import company2 from '../images/companies/disney.jpg'
import company3 from '../images/companies/marvel.jpg'
import company4 from '../images/companies/miramax.jpg'
import company5 from '../images/companies/new_line.jpg'
import company6 from '../images/companies/paramount.jpg'
import company7 from '../images/companies/universal.jpg'
import company8 from '../images/companies/warner_bros.jpg'

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

const companyList = [company1, company2, company3, company4, company5, company6, company7, company8]
const actorList = [actor1, actor2, actor3, actor4, actor5, actor6, actor7, actor8]
const actressList = [actress1, actress2, actress3, actress4, actress5, actress6, actress7, actress8]


export const FilmCompanyListMaker =()=> {
    const n = Math.floor(Math.random() * 8)
     return(
        companyList[n]
    )
}

export const ActorsListMaker =()=> {
    const n = Math.floor(Math.random() * 8)
       return(
        actorList[n]
    )
}

export const ActressesListMaker =()=> {
    const n = Math.floor(Math.random() * 8)
    return(
        actressList[n]
    )
}


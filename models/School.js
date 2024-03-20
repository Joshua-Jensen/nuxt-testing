import { reactive } from "vue"
export const appState = reactive({
  /** @type {import('./models/School.js').School} */
schools :[]
  })

export class School{
  constructor(data){
    this.name = data.name,
    this.location = data.location,
    this.photo = data.photo,
    this.about = data.about,
    this.link = data.link,
    this.organization = data.organization
    this.stats = data.stats
  }
static createSchoolList(){
const schools = schoolListData.map(s=> new School(s))
appState.schools = schools
}
  
}

const schoolListData =[
  {name : 'cactus',
    location : 'doral-cactus-map.png',
    photo : 'doral-cactus_1.jpg',
    about : {
      blurb : `"Doral Academy of Nevada is dedicated to providing an enhanced educational experience. We will develop outstanding student achievement with focus on each child being well-rounded in all parts of education. Students will be prepared in an academically challenging and personally meaningful learning environment with an emphasis on arts integration, increasing literacy, cognitive, and social development. A collaborative effort including students, teachers, parents, and staff will be devoted to establishing, achieving, and celebrating individual goals for each child at doral academy."`,
      category : 'Las Vegas',
      servicesDate : 'n/a',
      grades : 'K-12'
    },
    link : `www.doralcactus.org`,
    organization : 'doral',} 
  ]





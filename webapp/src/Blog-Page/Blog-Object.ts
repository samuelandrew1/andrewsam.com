import picture from '../assets/Images/pic.jpg'


 export interface newsProps {
     newsDate: number
     time?: number
    newsImage: string
    newsHeading: string
    newsSubHeading: string
    newsContent: string
}
const dateCalender = new Date()
const todayDate = dateCalender.getFullYear()




const BlogObject: newsProps[] = [
    {
        newsDate: todayDate,
        newsImage: picture,
        newsHeading: 'hello world',
        newsSubHeading: 'welcome to my blog page',
        newsContent: 'some continues content here'
    },
    {
        newsDate: todayDate,
        newsImage: picture,
        newsHeading: 'hello world',
        newsSubHeading: 'welcome to my blog page',
        newsContent: 'some continues content here'
    },
    {
        newsDate: todayDate,
        newsImage: picture,
        newsHeading: 'hello world',
        newsSubHeading: 'welcome to my blog page',
        newsContent: 'some continues content here'
    }

]
export default BlogObject
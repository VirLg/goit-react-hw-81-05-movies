const HomePageItem = ({prop}) => { 
    console.log(prop);

    return(prop.map(({id,title})=>{
        return(
                <li key={id}
               
                >
                    <a href={title}>{title}</a>
                </li>
        )
    })
  
    )
 }
export default HomePageItem
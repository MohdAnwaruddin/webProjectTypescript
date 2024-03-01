
import { useRouter } from "next/navigation";




interface CategoryCardProps {
    
      name: string;
      imagePath: string;
      link : string

}
const Card =( {link, imagePath, name}:CategoryCardProps ) => {

    const router = useRouter();
return (

    <div className="category-card" onClick={ () =>  router.push(link)} key={link}>
    <img src={imagePath} className="image" alt="" />
    <p className="categorytitle"> {name} </p>
  </div>

)

}

export default Card
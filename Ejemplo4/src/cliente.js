// el fichero cliente lanzará peticiones a la API REST

const traerPostsVinos = async () => {
    try{
        const response = await fetch("http://192.168.70.145:4000/posts");
        const data = await response.json();
        console.log(data);
    }catch (error){
        console.error(error);
    
    }
    

}
traerPostsVinos();
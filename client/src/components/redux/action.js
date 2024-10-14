export const getProducts =()=>async()=>{
    try {
        const data = await fetch("http://localhost:5000/getproducts",{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const res = await data.json();
        console.log(res);
        dispatch({type:"SUCCESS_GET_PRODUCTS",payload:res})
        
    }catch (error){
        dispatch({type:"FAIL_GET_PRODUCTS",payload:error.response})
    }
}
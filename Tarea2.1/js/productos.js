let productos = []
const getProductos= () => {

    //* UNA SOLICITUD HTTP CON EL VERBO GET
    // ! RETORNA UNA PROMESA DE TIPO RESPNSE
    fetch('https://fakestoreapi.com/products').then((response)=>{
        
    if(!response.ok){
        //! generar error si respuesta es distinta a OK
        throw Error(response.status+ ' '+ response.statusText)
    }

    return response.json() // * retorna una promesa
    }).then((productos)=>{
    
        console.log('Este es el JSON',productos)

        const contenido = document.querySelector('#contenido')

        productos.forEach(producto => {
            const {image, title, description,category, price,rating}=producto
            const {rate}= rating

            contenido.innerHTML += ` <article class="col-md-3 col-12 col-sm-6">
            <div class="card">

              

                <div class="justify-content-evenly">
                  <h7 class="text-dark-emphasis badge badge-pill bg-success-subtle  m-2 text-capitalize"> ${category}</h7>
                </div>
                <img src="${image}" class="card-img-top img-fit" alt="">
                
                <section class="card-body">
                  <h5 class="card-title">${title}</h5>
                  
                    <h7 class="text-dark-emphasis badge bg-secondary-subtle star">
                      ${rate}   <svg class="rating">
                        <use xlink:href="#stars-full-star" />
                      </svg> 

                  </h7> 

                    <p class="card-text">
                        ${description}
                    </p >

                    
                    <div class="text-end">
                      
                      <h4><strong>$ ${price}</strong></h4>  <a href="#" class="btn btn-outline-success">Agregar</a>
                    </div>

                </section>



            </div>
       </article> `
            
        });

    }).catch((error)=>{
    console.log(error)
    })


}


(()=>{
    getProductos()
})()

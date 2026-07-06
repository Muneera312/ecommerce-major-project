function Categories(){
    return (
        <div className="column">
        <button className=" btn btn-outline-dark rounded-pill px-4 py-2 me-4 my-4">
        <i className="bi bi-phone-fill me-2"> Mobiles</i></button>
        <button className=" btn btn-outline-dark rounded-pill px-4 py-2 me-4 "><i className="bi bi-laptop-fill me-2"> Laptops</i> </button>
        <button className=" btn btn-outline-dark rounded-pill px-4 py-2 me-4 "><i className="bi bi-watch"> Watches</i></button>
        <button className=" btn btn-outline-dark rounded-pill px-4 py-2 me-4"><i className="bi bi-handbag-fill"> Fashion</i></button>
        <button className=" btn btn-outline-dark rounded-pill px-4 py-2 "><i className="bi bi-headphones"> Electronics</i></button>
        </div>
    )
}
export default Categories;
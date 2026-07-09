function Categories({ selectedCategory, setSelectedCategory }) {
  const categories = [
    { name: "Mobiles", icon: "bi-phone-fill" },
    { name: "Laptops", icon: "bi-laptop-fill" },
    { name: "Watches", icon: "bi-watch" },
    { name: "Fashion", icon: "bi-handbag-fill" },
    { name: "Electronics", icon: "bi-headphones" },
  ];

  return (
    <div className="categories my-4">
      {categories.map((category) => (
        <button
          key={category.name}
          className={`btn rounded-pill px-4 py-2 me-3 mb-2 ${
            selectedCategory === category.name
              ? "btn-primary"
              : "btn-outline-dark"
          }`}
          onClick={() => setSelectedCategory(category.name)}
        >
          <i className={`bi ${category.icon} me-2`}></i>
          {category.name}
        </button>
      ))}

      
    </div>
  );
}

export default Categories;
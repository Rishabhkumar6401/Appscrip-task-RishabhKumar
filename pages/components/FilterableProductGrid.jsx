import React, { useState, useEffect } from "react";
import styles from "../../styles/FilterableProductGrid.module.css";

const FilterableProductGrid = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sortType, setSortType] = useState('Recommended')
  const [likedProducts, setLikedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])
  const [category, setCategory] = useState([])
  const [isIdealForOpen, setIsIdealForOpen] = useState(false);
  const [filters, setFilters] = useState([
    {
      id: "idealFor",
      title: "IDEAL FOR",
      options: [
        { id: "men", label: "Men", },
        { id: "women", label: "Women", },
        { id: "kids", label: "Baby & Kids", },
      ],
      isOpen: false,
    },
    {
      id: "occasion",
      title: "OCCASION",
      options: [
        { id: "casual", label: "Casual", },
        { id: "formal", label: "Formal", },
        { id: "party", label: "Party", },
      ],
      isOpen: false,
    },
    {
      id: "fabric",
      title: "FABRIC",
      options: [
        { id: "cotton", label: "Cotton", },
        { id: "silk", label: "Silk", },
        { id: "wool", label: "Wool", },
      ],
      isOpen: false,
    },

    {
      id: "work",
      title: "WORK",
      options: [
        { id: "BusinessAttire", label: "Business Attire", },
        { id: "Meeting", label: "Meeting", },
        { id: "Office", label: "Office", },
      ],
      isOpen: false,
    },
    {
      id: "RawMaterial",
      title: "Raw Material",
      options: [
        { id: "cotton", label: "Cotton", },
        { id: "silk", label: "Silk", },
        { id: "wool", label: "Wool", },
      ],
      isOpen: false,
    },
    {
      id: "Suitable",
      title: "Suitable For",
      options: [
        { id: "party", label: "Cotton", },
        { id: "business", label: "Business Meet", },
        { id: "Swimming", label: "Swimming", },
      ],
      isOpen: false,
    },
    {
      id: "segment",
      title: "Segment",
      options: [
        { id: "Bag", label: "Bag", },
        { id: "Toys", label: "Toys", },
        { id: "Glasses", label: "Glasses", },
      ],
      isOpen: false,
    },
    {
      id: "pattern",
      title: "pattern",
      options: [
        { id: "Textile", label: "Textile" },
        { id: "Structure", label: "Structure" },
      ],
      isOpen: false,
    },
  ]);



  const products = [
    { id: 1, name: "PPXOC Milkyway dress in...", outOfStock: false },
    { id: 2, name: "PPXOC Milkyway dress in...", outOfStock: true },
    { id: 3, name: "Shirt Name", category: "Men", outOfStock: false },
    { id: 4, name: "Product Name", category: "Kids", outOfStock: false },
    { id: 5, name: "Product Name", category: "Women", outOfStock: false },
    { id: 6, name: "Product Name", category: "Women", outOfStock: false },
    { id: 7, name: "Product Name", category: "Men", outOfStock: false },
    { id: 8, name: "Product Name", category: "Kids", outOfStock: false },
    { id: 9, name: "Product Name", category: "Women", outOfStock: false },
    { id: 10, name: "Product Name", category: "Women", outOfStock: false },
    { id: 11, name: "Product Name", category: "Men", outOfStock: false },
    { id: 12, name: "Product Name", category: "Kids", outOfStock: false },
    { id: 13, name: "Product Name", category: "Women", outOfStock: false },
    { id: 14, name: "Product Name", category: "Kids", outOfStock: false },
    { id: 15, name: "Product Name", category: "Men", outOfStock: false },
    { id: 16, name: "Product Name", category: "Women", outOfStock: false },
    { id: 17, name: "Product Name", category: "Kids", outOfStock: false },
    { id: 18, name: "Product Name", category: "Women", outOfStock: false },
  ];

  // Toggles the visibility of a filter
  const toggleFilter = (id) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) =>
        filter.id === id
          ? { ...filter, isOpen: !filter.isOpen }
          : { ...filter, isOpen: false }
      )
    );
  };

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(items => items !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }


    setFilteredProducts(productsCopy)
    setShowMobileFilters(false)
  }

  useEffect(() => {
    applyFilter();

  }, [category])

  const handleImageHover = (e, productId) => {
    const hoverImage = `../img${productId}_hover.jpg`;
    const imgElement = e.target;

    // Check if hover image exists
    const img = new Image();
    img.src = hoverImage;
    img.onload = () => {
      imgElement.src = hoverImage; // Change to hover image if available
    };
  };

  const handleImageLeave = (e, productId) => {
    // Revert back to the original image
    e.target.src = `../img${productId}.jpg`;
  };


  // Unselect all checkboxes in a filter and update the category filter
  const unselectAll = (filterId) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) =>
        filter.id === filterId
          ? {
            ...filter,
            options: filter.options.map((option) => ({
              ...option,
              checked: false,
            })),
          }
          : filter
      )
    );

    // Remove the selected category from the category state
    setCategory([]);
  };
  // Unselect all checkboxes in a filter and update the category filter
  const selectAll = (filterId) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) =>
        filter.id === filterId
          ? {
            ...filter,
            options: filter.options.map((option) => ({
              ...option,
              checked: true,
            })),
          }
          : filter
      )
    );


  };

  const toggleHeart = (id) => {
    setLikedProducts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };


  const sortProduct = () => {
    const fpCopy = filteredProducts.slice();
    switch (sortType) {
      case 'A-Z':
        setFilteredProducts(fpCopy.sort((a, b) => {
          return -1; // a comes before b
        }));
        break;

      default:
        applyFilter();
        break;
    }
  }


  useEffect(() => {
    sortProduct()

  }, [sortType])

  return (
    <div className={styles.container}>
      <div className={styles.grayLine}></div>

      {/* Top Section */}

      <div className={styles.MobileFilter}>
        {/* Top Section */}
        <div className={styles.topSectionMobile}>
          <button onClick={() => setShowMobileFilters(!showMobileFilters)}>
            Filter
          </button>
          <select
            className={styles.selectDropdown}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="Recommended">Recommended</option>
            <option value="A-Z">A to Z</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>

        {/* Filter Section */}
        {showMobileFilters && (
          <div className={styles.filtersMobile}>
            <div className={styles.custom}>
              <input type="checkbox" />
              Customizable
            </div>
            <div className={styles.grayLine}></div>
            <div className={styles.filterStart}>
              {filters.map((filter, index) => (
                <div key={filter.id} className={styles.filterItem}>
                  <div
                    className={styles.filterHeader}
                    onClick={() => toggleFilter(filter.id)}
                  >
                    <span>{filter.title}</span>
                    <span className={styles.filterArrow}>
                      <img
                        src="../downarrow.png"
                        style={{
                          width: "12px",
                          transform: filter.isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                        alt="Arrow Icon"
                      />
                    </span>
                  </div>
                  {filter.isOpen && (
                    <div className={styles.filterContent}>
                      <p onClick={() => selectAll(filter.id)}>All</p>
                      <p
                        style={{ color: "#BFC8CD" }}
                        className={styles.unselectAll}
                        onClick={() => unselectAll(filter.id)}
                      >
                        Unselect all
                      </p>
                      <div className={styles.checkboxGroup}>
                        {filter.options.map((option) => (
                          <div key={option.id}>
                            <input
                              type="checkbox"
                              id={option.id}
                              checked={option.checked}
                              value={option.label}
                              onChange={toggleCategory}
                            />
                            <label htmlFor={option.id}>{option.label}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {index < filters.length - 1 && (
                    <div className={styles.grayLine}></div>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.grayLine}></div>
          </div>
        )}
      </div>


      <div className={styles.topSection}>
        <div>
          <span>{filteredProducts.length} ITEMS</span>
          <button onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? "<  HIDE FILTER" : "<  SHOW FILTER"}
          </button>
        </div>
        {/* <div className={styles.leftMobile}>
        <button onClick={() => setShowFilters(!showFilters)}>
      Filter
    </button>
        </div> */}
        <div>
          <select
            className={styles.selectDropdown}
            // value={selectedSort}
            onChange={(e) => { setSortType(e.target.value) }}
          >
            <option value="Recommended">Recommended</option>
            <option value="A-Z">A to Z</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>
      </div>

      <div className={styles.grayLine}></div>

      <div className={styles.mainContent}>
        {/* Filter Section */}
        {showFilters && (
          <div className={styles.filters}>
            <div>
              <input type="checkbox" />
              Customizable
            </div>
            <div className={styles.grayLine}></div>

            <div className={styles.filterStart}>
              {filters.map((filter, index) => (
                <div key={filter.id} className={styles.filterItem}>
                  <div
                    className={styles.filterHeader}
                    onClick={() => toggleFilter(filter.id)}
                  >
                    <span>{filter.title}</span>
                    <span className={styles.filterArrow}>
                      <img
                        src="../downarrow.png"
                        style={{
                          width: "12px",
                          transform: filter.isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease"
                        }}
                        alt="Arrow Icon"
                      />
                    </span>
                  </div>
                  {filter.isOpen && (
                    <div className={styles.filterContent}>
                      <p onClick={() => selectAll(filter.id)}>All</p>
                      <p style={{ color: "#BFC8CD" }}
                        className={styles.unselectAll}
                        onClick={() => unselectAll(filter.id)}
                      >
                        Unselect all
                      </p>
                      <div className={styles.checkboxGroup}>
                        {filter.options.map((option) => (
                          <div key={option.id}>
                            <input
                              type="checkbox"
                              id={option.id}
                              checked={option.checked}
                              value={option.label}
                              onChange={toggleCategory}
                            />
                            <label htmlFor={option.id}>{option.label}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* Add a gray line between filters */}
                  {index < filters.length - 1 && (
                    <div className={styles.grayLine}></div>
                  )}
                </div>
              ))}
            </div>


            <div className={styles.grayLine}></div>
          </div>
        )}

        {/* Product Grid */}
        <div
          className={
            showFilters ? styles.gridWithFilters : styles.gridWithoutFilters
          }
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`${styles.productCard} ${product.outOfStock ? styles.outOfStock : ""
                }`}
            >
              <div className={styles.imageContainer}>
                <img
                  src={`../img${product.id}.jpg`}
                  alt={product.name}
                  className={styles.productImage}
                  onMouseEnter={(e) => handleImageHover(e, product.id)}
                  onMouseLeave={(e) => handleImageLeave(e, product.id)}
                />
                {product.outOfStock && (
                  <div className={styles.outOfStockOverlay}>OUT OF STOCK</div>
                )}
              </div>
              <div>
                <h3 className={styles.productName}>{product.name}</h3>
                <div className={styles.content}>
                  <p>Sign in or Create an account to see pricing</p>
                  <button
                    className={`${styles.heartButton} ${likedProducts.includes(product.id) ? styles.liked : ""
                      }`}
                    onClick={() => toggleHeart(product.id)}
                  >
                    ❤
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FilterableProductGrid;

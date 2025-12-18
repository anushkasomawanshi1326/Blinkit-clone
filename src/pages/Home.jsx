import { useState, useEffect } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import PeakTime from "../components/PeakTime";
import CategoryFilter from "../components/CategoryFilter";
import RecentlyOrdered from "../components/RecentlyOrdered";
import Cart from "../components/Cart";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PriceFilter from "../components/PriceFilter";
import SortProducts from "../components/SortProducts";
import useCart from "../hooks/useCart";

export default function Home() {
  const { cart, addToCart, cartCount, cartTotal } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("default");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Updated categories based on your products data
  const categories = ["All", "Dairy", "Bakery", "Snacks", "Eggs", "Vegetables", "Beverages", "Staple Foods"];

  // Filter and sort products
  useEffect(() => {
    let result = products.filter(product => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesCategory && matchesSearch && matchesPrice;
    });

    // Apply sorting
    result = [...result].sort((a, b) => {
      switch(sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        case "stock":
          return b.stock - a.stock;
        case "popular":
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        default:
          return 0;
      }
    });

    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, priceRange, sortBy]);

  return (
    <div className="home-page" style={{ 
      maxWidth: '1400px', 
      margin: '0 auto', 
      padding: '0 20px',
      animation: 'fadeIn 0.5s ease-out'
    }}>
      <Header cartCount={cartCount} />
      
      <PeakTime />
      
      {/* Welcome Section with Logo */}
      <div style={{ 
        textAlign: 'center', 
        margin: '30px 0 40px 0',
        padding: '30px',
        background: 'linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 100%)',
        borderRadius: '20px',
        border: '1px solid #E5E7EB',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '15px',
          flexWrap: 'wrap'
        }}>
          {/* You can use the Logo component here too or show the logo image */}
          <div style={{
            width: '70px',
            height: '70px',
            background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            fontWeight: 'bold',
            color: 'white',
            boxShadow: '0 6px 20px rgba(5, 150, 105, 0.3)'
          }}>
            ⚡
          </div>
          <div>
            <h1 style={{ 
              color: '#059669',
              fontSize: '36px',
              margin: '0 0 8px 0',
              fontWeight: '800'
            }}>
              Blinkit Clone
            </h1>
            <p style={{ 
              color: '#6B7280', 
              fontSize: '18px',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}>
              <span>🚀</span>
              <span>Groceries delivered in 10 minutes</span>
              <span>🛵</span>
            </p>
          </div>
        </div>
        <p style={{ 
          color: '#9CA3AF', 
          fontSize: '14px',
          marginTop: '15px',
          fontStyle: 'italic'
        }}>
          India's Last Minute App • Fastest Delivery • Best Prices
        </p>
      </div>

      <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
        {/* Left Sidebar - Filters */}
        <div style={{ 
          flex: 1, 
          maxWidth: '280px',
          position: 'sticky',
          top: '100px',
          height: 'fit-content'
        }}>
          {/* Search Bar */}
          <div style={{ marginBottom: '25px' }}>
            <SearchBar onSearch={setSearchQuery} />
          </div>

          {/* Price Filter */}
          <div style={{ marginBottom: '25px' }}>
            <PriceFilter onPriceFilter={setPriceRange} />
          </div>

          {/* Category Filter */}
          <div style={{ marginBottom: '25px' }}>
            <CategoryFilter 
              categories={categories}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>

          {/* Stats Card */}
          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            border: '1px solid #F0F0F0'
          }}>
            <h4 style={{ marginBottom: '15px', color: '#374151' }}>Store Stats</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6B7280' }}>Total Products:</span>
                <span style={{ fontWeight: '600' }}>{products.length}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6B7280' }}>Showing:</span>
                <span style={{ fontWeight: '600', color: '#059669' }}>{filteredProducts.length}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6B7280' }}>In Cart:</span>
                <span style={{ fontWeight: '600' }}>{cartCount} items</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6B7280' }}>Cart Total:</span>
                <span style={{ fontWeight: '600', color: '#059669' }}>₹{cartTotal}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ flex: 3 }}>
          {/* Header with Sort Options */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '25px',
            flexWrap: 'wrap',
            gap: '15px'
          }}>
            <div>
              <h2 style={{ 
                color: '#1F2937',
                fontSize: '24px',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                {selectedCategory === "All" ? "All Products" : selectedCategory}
                <span style={{ 
                  fontSize: '16px', 
                  color: '#6B7280', 
                  fontWeight: 'normal',
                  background: '#F3F4F6',
                  padding: '4px 12px',
                  borderRadius: '20px'
                }}>
                  {filteredProducts.length} items
                </span>
              </h2>
              {searchQuery && (
                <p style={{ 
                  margin: '8px 0 0 0', 
                  color: '#6B7280',
                  fontSize: '14px'
                }}>
                  Search results for: <strong>"{searchQuery}"</strong>
                </p>
              )}
            </div>
            
            <SortProducts onSort={setSortBy} />
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div style={{ 
              textAlign: 'center', 
              padding: '60px 20px',
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <div style={{ 
                fontSize: '80px', 
                marginBottom: '20px',
                opacity: 0.5
              }}>
                🛒
              </div>
              <h3 style={{ 
                color: '#6B7280',
                marginBottom: '15px'
              }}>
                No products found
              </h3>
              <p style={{ 
                color: '#9CA3AF', 
                marginBottom: '25px',
                maxWidth: '400px',
                margin: '0 auto 25px auto'
              }}>
                {searchQuery ? 
                  `No products match "${searchQuery}". Try a different search term.` :
                  'Try changing your filters or select a different category.'
                }
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setPriceRange([0, 1000]);
                }}
                style={{
                  padding: '12px 30px',
                  background: '#059669',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#047857'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#059669'}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '25px',
              marginBottom: '40px'
            }}>
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={() => addToCart(product)}
                />
              ))}
            </div>
          )}
          
          {/* Recently Ordered Section */}
          <RecentlyOrdered addToCart={addToCart} />
        </div>

        {/* Right Sidebar - Cart */}
        <div style={{ 
          flex: 1, 
          maxWidth: '350px',
          position: 'sticky',
          top: '100px',
          height: 'fit-content'
        }}>
          <Cart 
            cart={cart} 
            cartTotal={cartTotal}
          />
        </div>
      </div>

      {/* Promotional Banner */}
      <div style={{
        marginTop: '50px',
        background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
        borderRadius: '20px',
        padding: '30px',
        border: '1px solid #F59E0B',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div>
          <h3 style={{ 
            color: '#92400E',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span>🎉</span>
            Special Offer!
          </h3>
          <p style={{ 
            color: '#92400E',
            fontSize: '16px',
            margin: 0
          }}>
            Get <strong>10% cashback</strong> on your first order! Use code: <strong>WELCOME10</strong>
          </p>
          <p style={{ 
            color: '#B45309',
            fontSize: '14px',
            margin: '10px 0 0 0'
          }}>
            Valid for orders above ₹500. Limited time offer.
          </p>
        </div>
        <button
          onClick={() => window.location.href = '/checkout'}
          style={{
            padding: '14px 30px',
            background: '#92400E',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}
        >
          Claim Offer Now
        </button>
      </div>
    </div>
  );
}
import "./styles.css"

function App() {
  return (
    <div className="calculator">
       <div className="calculator-items">
        <div className="calculator-grid">
          <div className="mode-switch"></div>
          <div className="output">
            <div className="previous">old</div>
            <div className="tip-calculation"></div>
            <div className="after"></div>
          </div>
          <div className="calculator-functions">
            
            <div className="ratings">
              <button className="service-rating">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 17.25C4.44365 17.25 0.75 13.5563 0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9C17.25 13.5563 13.5563 17.25 9 17.25ZM9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75ZM9 12.2234C9.98963 12.2234 10.897 12.7052 11.456 13.5L12.6829 12.6371C11.8459 11.447 10.4832 10.7234 9 10.7234C7.51683 10.7234 6.15409 11.447 5.31708 12.6371L6.54401 13.5C7.10303 12.7052 8.01038 12.2234 9 12.2234ZM10.5 9V7.5H12V9H10.5ZM6 7.5V9H7.5V7.5H6Z" fill="#B10000"/>
                </svg>
                <p>Poor</p>
                <h2>5%</h2>
              </button>

              <button className="service-rating">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 17.25C4.44365 17.25 0.75 13.5563 0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9C17.25 13.5563 13.5563 17.25 9 17.25ZM9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75ZM12.6829 11.5863L11.456 10.7234C10.897 11.5182 9.98963 12 9 12C8.01038 12 7.10303 11.5182 6.54401 10.7234L5.31708 11.5863C6.15409 12.7764 7.51683 13.5 9 13.5C10.4832 13.5 11.8459 12.7764 12.6829 11.5863ZM10.5 8.25V6.75H12V8.25H10.5ZM6 6.75V8.25H7.5V6.75H6Z" fill="#AA8500"/>
                </svg>
                  <p>Good</p>
                  <h2>15%</h2>
              </button>

              <button className="service-rating">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 17.25C4.44365 17.25 0.75 13.5563 0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9C17.25 13.5563 13.5563 17.25 9 17.25ZM9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75ZM12.6829 11.5863L11.456 10.7234C10.897 11.5182 9.98963 12 9 12C8.01038 12 7.10303 11.5182 6.54401 10.7234L5.31708 11.5863C6.15409 12.7764 7.51683 13.5 9 13.5C10.4832 13.5 11.8459 12.7764 12.6829 11.5863ZM10.5 8.25V6.75H12V8.25H10.5ZM6 6.75V8.25H7.5V6.75H6Z" fill="#AA8500"/>
                </svg>
                <p>Amazing</p>
                <h2>20%</h2>
              </button>

              <button className="service-rating">
                  <p>Custom</p>  
              </button>
            </div>
            
            <div className="buttons">
              <button className="ac-btn">AC</button>
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button> ← </button>
              <button>0</button>
              <button>.</button>
            </div>
            

          </div>
        </div>
      </div>
    </div>
    
    
  )
}
export default App;

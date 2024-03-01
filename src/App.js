import './App.css';
import Product from './components/Product';
import Product2 from './components/Product2';
import next from './components/Images/next.png'

function App() {

  const list=[1,2,3,4,5,6,7,8]
  
  const list1=[1,2,3]

  return (
    <div className="App">
      <header className='header'>
        <nav className='nav-3'>
          <span className='nav-3-span'>
            <input placeholder='search'type='search'></input>
            <div>Categories</div>
            <div>Website builder</div>
            <div>Today's deals</div>
          </span>
        </nav>
        <div className='heading'>
        <h2>Best Website builders in the US</h2>
        <div className='update-info'>
          <h3>last Updated-Februray 22, 2020</h3>
          <span>last Updated</span>
          <select className='drop-down'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <nav className='nav-1'>
            <ul className='ul-nav-1'>
              <li>Tools</li>
              <li>AWS Builder</li>
              <li>Start Build</li>
              <li>Build Supplies</li>
              <li>Tooling</li>
              <li>BlueHosting</li>
            </ul>
        </nav>
        <nav className='nav-2'>
          <ul className='ul-nav-2'>
            <li>Home <img className='arrow-img' src={next} alt=''></img></li>
            <li>Hosting for all <img className='arrow-img' src={next} alt=''></img></li>
            <li>Hosting<img className='arrow-img' src={next} alt=''></img></li>
            <li>Hosting6<img className='arrow-img' src={next} alt=''></img></li>
            <li>Hosting5<img className='arrow-img' src={next} alt=''></img></li>
          </ul>
        </nav>
        </div>
      </header>
      <main>
        {
          list.map(item=>(<Product item={item} key={item}/>))
        }
      </main>
      <h2>related deals you might like</h2> 
      <div className='related-deals'>
        {
        list1.map(item=>(<Product2 item={item} key={item}/>))
        }
      </div>
      <div className='signIn-div'>
      <h2>Sign up and get special exclusive deals</h2>
        <button>Sign in</button>
      </div>
      <footer className='footer'>
      <span>
          <h3>Categories</h3>
          <ul>
            <li>web builder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic-Automation</li>
          </ul>
        </span>
          <span>
          <h3>Contact</h3>
          <ul>
            <li>Contact</li>
            <li>Privacy policy</li>
            <li>Terms of serivce</li>
            <li>categories</li>
            <li>About</li>
          </ul>
          </span>
        
      </footer>
    </div>
  );
}

export default App;

import PropsType from 'prop-types';

const Navbar = (props) =>{

    return(
      <nav className={`navbar navbar-expand-sm bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <a href="/" className="navbar-brand">{props.title}</a>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick = {props.toggleMode}/>
              <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`}htmlFor="flexSwitchCheckDefault">Enable dark Mode</label>
            </div>
        </div>
      </nav>
    );
}
export default Navbar;

Navbar.propTypes = {
  title : PropsType.string
}
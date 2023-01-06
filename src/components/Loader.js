import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free-solid'

function Loader() {
    return (  
        <div className="loader">
         <FontAwesomeIcon icon="fa fa-spinner fa-spin" className='licon' />
        </div>
    );
}

export default Loader;
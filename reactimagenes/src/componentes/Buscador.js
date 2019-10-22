import React, { Component } from 'react';

class Buscador extends Component {
    
    render() { 
        return ( 
            <form>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input className="form-control form-control-lg" type="text" placeholder="Busca tú imagén, ejemplo: Futbol"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar..."></input>
                    </div>
                </div>
            </form>
         );
    }
}
 
export default Buscador;
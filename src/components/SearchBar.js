import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};

    onInputChange=(event)=>{
        this.setState({term: event.target.value});
    }

    onFormSubmit =event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);


    }
    render() {

        return (
              
           
                
                    <div className="ui inverted transparent icon input">
                         
                        
                        <form onSubmit= {this.onFormSubmit} className="ui form submit">
                            <input style={{backgroundColor:'black', color:'white'}} type="text" 
                            placeholder="Search..."
                            value={this.state.term}
                            onChange ={this.onInputChange} />
                            <i className="search icon"></i> 
                        </form>
                    </div>
               
           
            
            
          
            
        );
    }
}
export default SearchBar;

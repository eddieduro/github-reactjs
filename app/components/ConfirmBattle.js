var React = require('react');
var styles = require('../styles');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailWrapper = require('./UserDetailWrapper');

function puke (object) {
	return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle (props) {
	return props.isLoading === true
		? <p> LOADING! </p>
		: <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Confirm Players</h1>
        <UserDetailWrapper header='Player One'>
          <UserDetails info={props.playersInfo[0]} />
        </UserDetailWrapper>
        <UserDetailWrapper header='Player Two'>
          <UserDetails info={props.playersInfo[1]} />
        </UserDetailWrapper>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
          </div>
          <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
            </Link>
          </div>
        </div>
      </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;
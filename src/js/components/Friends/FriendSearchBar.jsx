import React from "react";
import { connect } from "react-redux";
import AutoComplete from "material-ui/AutoComplete";
import { addFriend } from "../../actions/users";

@connect(store => {
  return {
    sessionCookie: store.login.sessionCookie,
    allUsers: store.users.allUsers,
  };
})
export default class FriendItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        searchText: ''
    }
  }
  handleUpdateInput (t) { this.setState({ searchText: t }) }
  render() {
    const onClick = evt => {
      let newFriendData = {
        currentUserID: this.props.sessionCookie,
        friendToAddID: evt.id
      };
      this.props.dispatch(addFriend(newFriendData));
      this.setState( { searchText: '' })
    };
    const dataSource = this.props.allUsers.map(user => {
      return {
        identity: user.first_name + ", " + user.last_name + ", " + user.email,
        id: user.id
      };
    });
    return (
      <AutoComplete
      floatingLabelText="Type name or email"
      filter={AutoComplete.fuzzyFilter}
      dataSource={dataSource}
      dataSourceConfig={{ text: "identity", value: "id" }}
      searchText={this.state.searchText}
      onUpdateInput={this.handleUpdateInput.bind(this)}
      maxSearchResults={5}
      fullWidth={true}
      onNewRequest={onClick}
      style={{ marginTop: 80, paddingLeft: 20, paddingRight: 20 }}
    />
    )
  }
}
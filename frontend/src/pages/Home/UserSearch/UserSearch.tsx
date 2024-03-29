import * as React from "react";
import { useState } from "react";
import { Select, Spin } from "antd";
import "./UserSearch.css";
import debounce from "lodash/debounce";
import { User } from "../../../models/User";
import { searchUsers } from "../../../api/users";

const fetchUsers = (
  setState: (searchState: { data: User[]; fetching: boolean }) => void
) => (value: string) => {
  setState({
    data: [],
    fetching: true
  });
  if (value) {
    searchUsers(value)
      .then(response => response.data)
      .then(data => {
        setState({
          data,
          fetching: false
        });
      });
  }
};

export interface UserSearchProps {
  user: User;
  onUserSelect: (user: User) => void;
}

interface UserSearchState {
  data: User[];
  value: string | undefined;
  fetching: boolean;
}

const UserSearch: React.FC<UserSearchProps> = ({ user, onUserSelect }) => {
  const [state, setState] = useState<UserSearchState>({
    data: [],
    value: user.displayName,
    fetching: false
  });

  const onSearch = debounce(fetchUsers(setState as any), 800) as any;

  const onChange = (userKey: string) => {
    const user = state.data.find(
      (userData: User) => userData.accountId === userKey
    );
    setState({ value: user && user.displayName, data: [], fetching: false });
    if (user) {
      onUserSelect(user);
    }
  };

  return (
    <div className="user__search">
      <Select
        showSearch
        style={{ width: "100%" }}
        placeholder="Select user"
        value={state.value as any}
        onSearch={onSearch}
        onChange={onChange}
        showArrow={false}
        filterOption={false}
        defaultActiveFirstOption={false}
        notFoundContent={state.fetching ? <Spin size="small" /> : null}
      >
        {(state.data as User[]).map(value => (
          <Select.Option key={value.accountId}>
            {value.displayName}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default UserSearch;

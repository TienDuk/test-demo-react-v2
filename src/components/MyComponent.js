//class component 
// funtions component

import React from 'react'; // import React từ thư viện react 

class MyComponent extends React.Component { // kế thừa lại lớp có component của react thì class sẽ trở thành 1 react-component
    render() {                              // tập hợp các khối html chuyển thành giao diện
        return (
            <div>
                My fisst componenet
                {Math.random()}
            </div>
        )
    }
}
export default MyComponent; // khi gọi đến file này, sẽ hiểu là muốn sử dụng class MyComponent
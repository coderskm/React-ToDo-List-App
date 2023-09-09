import { useState } from "react";
import "./App.css";
function TodoList() {
    const [activity, setActivity] = useState("");
    const [listData, setListData] = useState([]);
    function addActivity() {
        // setListData([...listData, activity])
        // console.log(listData);
        setListData((listData) => {
            const updatedList = [...listData, activity];
            console.log(updatedList);
            setActivity("");
            return updatedList;
        })
    }

    function removeActivity(index) {
        const updatedListData = listData.filter((elem, id) => {
            return index != id;
        })
        setListData(updatedListData);
    }

    function removeAll() {
        setListData([]);
    }
  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input type="text" placeholder="add tasks" value={activity} onChange={(e) => setActivity(e.target.value)} />
        <button onClick={addActivity}>ADD</button>
        <p className="list-heading">Here is your list:-</p>
        {listData != [] &&
          listData.map((data, index) => (
            <>
              <p key={index}>
                <div className="listData">{data}</div>
                <div className="btn-position">
                  <button onClick={() => removeActivity(index)}>Remove</button>
                </div>
              </p>
            </>
          ))}
        {listData.length >= 1 && <button onClick={removeAll}>Remove All</button>}
      </div>
    </>
  );
}

export default TodoList;

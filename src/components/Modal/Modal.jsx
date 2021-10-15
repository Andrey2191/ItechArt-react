import React, { useEffect, useState } from "react";
import { ItemList } from "../Items/ItemList";

const Modal = () => {
  const array = [];
  for (let i = 1; i < 1000; ++i) {
    array.push(`item ${i}`);
  }
  const [show, setShow] = useState(false);

  const handleModalClose = (e) => {
    const currentClass = e.target.className;

    if (currentClass === "modal-card") {
      return;
    }

    setShow(false);
  };

  const handleModalOpen = () => {
    setShow(true);
  };

  // const [array, setArray] = useState([]);
  // const [items, setItems] = useState([]);
  const [page, setPage] = useState([]);
  const [value, setValue] = useState("");
  const [baseArr, setBaseArr] = useState([...array]);
  const [filteredItems, setFilteredItems] = useState([]);

  const filterHandler = (value) => {
    const arr = array.filter(
      (item, index) => index > value.start - 1 && index <= value.end
    );
    setBaseArr([...arr]);
  };

  const filtered = array.filter((itemsName) => {
    return itemsName.includes(value);
  });

  const [select, setSelect] = useState(
    JSON.parse(localStorage.getItem("page")) || []
  );

  const currencies = [
    {
      label: "No filter",
      value: {
        start: 0,
        end: 1000,
      },
    },
    {
      label: ">10",
      value: {
        start: 10,
        end: 1000,
      },
    },
    {
      label: ">100",
      value: {
        start: 100,
        end: 1000,
      },
    },
    {
      label: ">200",
      value: {
        start: 200,
        end: 1000,
      },
    },
    {
      label: ">300",
      value: {
        start: 300,
        end: 1000,
      },
    },
    {
      label: ">400",
      value: {
        start: 400,
        end: 1000,
      },
    },
    {
      label: ">500",
      value: {
        start: 500,
        end: 1000,
      },
    },
    {
      label: ">600",
      value: {
        start: 600,
        end: 1000,
      },
    },
    {
      label: ">700",
      value: {
        start: 700,
        end: 1000,
      },
    },
    {
      label: ">800",
      value: {
        start: 800,
        end: 1000,
      },
    },
    {
      label: ">900",
      value: {
        start: 900,
        end: 1000,
      },
    },
  ];

  // useEffect(() => {
  //   setArray(new Array(1000).fill(1).map((a, value) => value));
  // }, []);

  const onClickAdd = (e) => {
    // setItems([...items, e]);
    setPage([...page, e]);

    // localStorage.setItem("items", JSON.stringify(items));
  };

  const deleteHandler = (e) => {
    const id = page.findIndex((item) => e === item);

    if (id != -1) {
      page.splice(id, 1);
      setPage([...page]);
    }
  };

  const deleteHandlerSelect = (e) => {
    const id = select.findIndex((item) => e === item);

    if (id != -1) {
      select.splice(id, 1);
      setSelect([...select]);
      localStorage.setItem("page", JSON.stringify(select));
    }
  };

  const onClickSave = () => {
    localStorage.setItem("page", JSON.stringify(page));
    setSelect([...page]);
  };

  return (
    <div className="App">
      <div hidden={!show}>
        <div className="modal-background">
          <div className="modal-card">
            <div className="modal-header">
              <span>Dialog title</span>
              <button
                className="header-button-close"
                onClick={handleModalClose}
              >
                X
              </button>
            </div>
            <div className="modal-input">
              <input
                className="input"
                type="text"
                placeholder="Search"
                onChange={(event) => setValue(event.target.value)}
              />

              <select
                className="input"
                onChange={(e) => {
                  const value = e.target.value;
                  console.log(value.start);
                  filterHandler(value);
                }}
              >
                {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
                {/* <option value="item 1">Нет фильтра</option>
                <option value="item 2">10</option>
                <option value="item 3">100</option>
                <option value="item 4">200</option>
                <option value="item 5">300</option> */}
              </select>
            </div>
            <div className="modal-body">
              <ItemList
                filteredItems={filteredItems}
                list={filtered}
                onAdd={onClickAdd}
                onRemove={deleteHandler}
              />
            </div>
            <div className="selected">
              {page.map((newPage, index) => (
                <div className="selected-body">
                  <span>{newPage}</span>
                </div>
              ))}
            </div>

            <div className="footer">
              <button className="btn-close" onClick={handleModalClose}>
                Close
              </button>
              <button className="btn-save" onClick={onClickSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          {select.map((element, index) => (
            <span className={"page-e"}>
              {element}{" "}
              <button
                className="header-button-close"
                onClick={() => {
                  deleteHandlerSelect(element);
                }}
              >
                X
              </button>
            </span>
          ))}
        </div>
      </div>

      <button className="button" onClick={handleModalOpen}>
        Change
      </button>
    </div>
  );
};

export default Modal;

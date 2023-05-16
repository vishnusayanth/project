import React from "react";

export default function Table(props) {
    let counter = 0;
    if (props.tableHead && props.tableBody) {
        return <React.Fragment>
            <table className="table table-borderless datatable" id={props.tableId}>
                <thead>
                <tr>
                    <th scope="col">#</th>
                    {props.tableHead.map(item => {
                        return <th key={item} scope="col">{item}</th>
                    })}
                </tr>
                </thead>
                <tbody>
                {props.tableBody.map(row => {
                    counter += 1;
                    let dataBsToggle = '';
                    let dataBsTarget = '';
                    if (props.toggleModal) {
                        dataBsToggle = "modal";
                        dataBsTarget = "#disablebackdrop";
                    }
                    return <tr key={row[props.keyProp]} data-bs-toggle={dataBsToggle} data-bs-target={dataBsTarget}
                               onClick={() => props.onClickFunction(row)} className={"table-row"}>
                        <td>{counter}</td>
                        {props.tableHead.map(item => {
                            return <td key={item + row.id}>{row[item]}</td>
                        })}
                    </tr>
                })}
                </tbody>
            </table>
        </React.Fragment>
    } else {
        return '';
    }
}
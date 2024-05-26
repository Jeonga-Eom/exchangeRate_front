// Table.jsx
import React from 'react';
import '../table.css';

function Table() {
    return (
        <table className="table-container table-borderless datatable">
            <thead>
                <tr>
                    <th scope="col">구분</th>
                    <th scope="col">통화표시</th>
                    <th scope="col">매매기준율</th>
                    <th scope="col">송금(받으실 때)</th>
                    <th scope="col">송금(보내실 때)</th>
                </tr>
            </thead>
            <tbody>
            {/* 데이터 연결
                {items && items.length > 0 &&
                 items.map(item => (
                     <tr key={item._id}>
                         <th scope="row">
                             <a href="#">{item.CUR_UNIT}</a>
                         </th>
                         <td>
                             <a href="#" className="text-primary">
                                {item.CUR_NM}
                            </a>
                         </td>
                         <td>{item.DEAL_BAS_R}</td>
                         <td>{item.TTB}</td>
                         <td>{item.TTS}</td>
                     </tr>
                 ))}
                 */}
            <tr>
                <td>미국 달러</td>
                <td>USD</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
            </tr>
            <tr>
                <td>일본 엔</td>
                <td>JPY</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
            </tr>
            <tr>
                <td>유럽 유로</td>
                <td>EUR</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
            </tr>

            <tr>
                <td>중국 위안화</td>
                <td>CNY</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
            </tr>
            </tbody>
        </table>
    );
}

export default Table;

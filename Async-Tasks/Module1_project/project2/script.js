const container = document.querySelector('.container');

window.addEventListener('keydown',(e)=>{
    let table = document.createElement('table');
    container.innerHTML = 
    `<table>
        <tr>
            <th>Key Name</th>
            <th>Key Code</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
        
    </table>`;
    
    // console.log(e);
})
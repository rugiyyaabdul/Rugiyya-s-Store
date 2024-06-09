onload = ()=>{
    getProducts();
}

const addProduct = ()=>{
    const myModal = new bootstrap.Modal(document.getElementById('add'));


    const name = document.getElementById("name").value;
    const stock = document.getElementById("stock").value;
    const buy_price = document.getElementById("buy_price").value;
    const sale_price = document.getElementById("sale_price").value;
    let Stock = JSON.parse(localStorage.getItem('Stock'));

    Stock.productName.push(name);
    Stock.productCount.push(stock);
    Stock.productBuyPrice.push(buy_price);
    Stock.productSalePrice.push(sale_price);
    localStorage.setItem("Stock",JSON.stringify(Stock))
    myModal.hide();
    getProducts();
}


const getProducts = ()=>{
    let Stock = JSON.parse(localStorage.getItem('Stock'));
    let productsTable = '';

    for (let i = 0; i < Stock.productName.length; i++){
        productsTable += `
            <tr>
                <td>${Stock.productName[i]} $</td>
                <td>${Stock.productCount[i]} $</td>
                <td>${Stock.productBuyPrice[i]} $</td>
                <td>${Stock.productSalePrice[i]} $</td>
                <td>
                    <button class="btn btn-outline-danger btn-sm">Sell</button>
                    <button class="btn btn-outline-success btn-sm">Buy</button>
                    
                </td>
            </tr>
        `;
    }
    document.getElementById("products").innerHTML = productsTable;
};
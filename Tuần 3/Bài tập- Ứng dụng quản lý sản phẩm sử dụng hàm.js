let productList = [];
function displayTableHeader() {
    let tableContent = '    <tr>\n' +
        '        <td>Product Name</td>\n' +
        '        <td colspan="2">'+productList.length+ ' products</td>\n' +
        '    </tr>';
    return tableContent;
}
function displayProductAtPosition(Index) {
    let productContent = '<tr>\n' +
        '        <td>'  + productList[i]+ '</td>\n' +
        '        <td>Edit</td>\n' +
        '        <td>Delete</td>\n' +
        '    </tr>'
}

function displayProducts() {
    let table =document.getElementById("product_list");

    let tableContent = displayTableHeader()

    for (let i=0; i<productList.length; i++){
        tableContent += '<tr>\n' +
            '        <td>'  + productList[i]+ '</td>\n' +
            '        <td>Edit</td>\n' +
            '        <td>Delete</td>\n' +
            '    </tr>'
    }
    table.innerHTML = tableContent;
}

function addProduct() {
    let productName = document.getElementById("product_name").value
    productList.push(productName);
    displayProducts()
}

function editProduct() {

}

function deleteProduct(index) {

}
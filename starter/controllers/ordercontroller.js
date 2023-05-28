const createOrder = async (req, res) => {
res.send('create order')
}
const getSingleOrder = async (req, res) => {
res.send('get Single order')
}
const getCurrentUserOrders = async (req, res) => {
res.send('get current users order')
}
const updateOrder = async (req, res) => {
res.send('update order')
}

module.exports = {
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    createOrder,
    updateOrder,

}
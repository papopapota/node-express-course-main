

const getAllProductsStatic = async (req, res)=>{
    throw new Error('Testing async error');
    //const products = await Product
    res.status(200).json({msg:'Products testing route'});
}

const getAllProducts = async (req, res)=>{
    //const products = await Product
    res.status(200).json({msg:'Products route'});
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
};

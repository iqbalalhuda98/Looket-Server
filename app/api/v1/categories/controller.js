const { StatusCodes } = require("http-status-codes");

// import services
const {
    getAllCategories,
    createCategories,
    getOneCategories,
    updateCategories,
    deleteCategories,
} = require("../../../services/mongoose/categories");

// buat function create
const create = async(req, res, next) => {
    try {
        // sebelum menggunakan services ↓
        // const result = await Categories.create({ name });

        // setelah menggunakan services ↓
        const result = await createCategories(req);

        // berikan response kepada client dengan mengembalikan product yang baru dibuat
        res.status(StatusCodes.CREATED).json({
            data: result,
        });
    } catch (err) {
        // jika terjadi kesalahan kemudian gunakan method `next` agar Express memproses error tersebut
        next(err);
    }
};

const index = async(req, res, next) => {
    try {
        const result = await getAllCategories();

        res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const find = async(req, res, next) => {
    try {
        const result = await getOneCategories(req);

        res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const update = async(req, res, next) => {
    try {
        const result = await updateCategories(req);

        res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const remove = async(req, res, next) => {
    try {
        const result = await deleteCategories(req);

        res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

// Export semua fungsi pada controller categories
module.exports = {
    create,
    index,
    find,
    update,
    remove,
};
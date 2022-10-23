// import model category
const Categories = require("./model");

// buat function create
const create = async(req, res, next) => {
    try {
        // membuat categories baru menggunakan data dari `name`
        const { name } = req.body;

        // simpan Category yang baru dibuat ke MongoDB
        const result = await Categories.create({ name });

        // berikan response kepada client dengan mengembalikan product yang baru dibuat
        res.status(201).json({
            data: result,
        });
    } catch (err) {
        // jika terjadi kesalahan kemudian gunakan method `next` agar Express memproses error tersebut
        next(err);
    }
};

const index = async(req, res, next) => {
    try {
        // jika ingin menampilkan semua field ↓
        // const result = await Categories.find()

        const result = await Categories.find().select("_id name");

        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const find = async(req, res, next) => {
    try {
        const { id } = req.params;

        // jika ingin menggunakan findById ↓
        // const result = await Categories.findById(id);

        const result = await Categories.findOne({ _id: id });

        if (!result) {
            return res.status(404).json({ message: "data tidak ditemukan" });
        }

        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const update = async(req, res, next) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        // Cara pertama ↓, cari dahulu data berdasarkan id, lalu update.
        // const result = await Categories.findById(id);
        // if (!result) {
        //     return res.status(404).json({ message: "data tidak ditemukan" });
        // }
        // result.name = name;
        // result.save();

        const result = await Categories.findByIdAndUpdate({ _id: id }, { name: name }, { new: true, runValidators: true });

        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const remove = async(req, res, next) => {
    try {
        const { id } = req.params;

        const result = await Categories.findByIdAndRemove(id);

        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

// Export fungsi create pada controller categories
module.exports = {
    create,
    index,
    find,
    update,
    remove,
};
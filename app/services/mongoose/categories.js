// import model categories
const Categories = require("../../api/v1/categories/model");

// import custom error not found dan bad request
const { NotFoundError, BadRequestError } = require("../../errors");

const getAllCategories = async () => {
  // jika ingin menampilkan semua field ↓
  // const result = await Categories.find()

  const result = await Categories.find().select("_id name");

  return result;
};

const createCategories = async (req) => {
  // membuat categories baru menggunakan data dari `name`
  const { name } = req.body;

  // cari categories dengan field name
  const check = await Categories.findOne({ name });

  // apabila check true / data categories sudah ada maka kita tampilkan error bad request dengan message kategori nama duplikat
  if (check) throw new BadRequestError("kategori nama duplikat");

  // simpan Category yang baru dibuat ke MongoDB
  const result = await Categories.create({ name });

  return result;
};

const getOneCategories = async (req) => {
  const { id } = req.params;

  // jika ingin menggunakan findById ↓
  // const result = await Categories.findById(id);

  const result = await Categories.findOne({ _id: id });

  if (!result) throw new NotFoundError(`Tidak ada Kategori dengan id :  ${id}`);

  return result;
};

const updateCategories = async (req) => {
  const { id } = req.params;
  const { name } = req.body;

  // Cara pertama ↓, cari dahulu data berdasarkan id, lalu update.
  // const result = await Categories.findById(id);
  // if (!result) {
  //     return res.status(404).json({ message: "data tidak ditemukan" });
  // }
  // result.name = name;
  // result.save();

  // cari categories dengan field name dan id selain dari yang dikirim dari params
  const check = await Categories.findOne({
    name,
    _id: { $ne: id },
  });
  // $ne digunakan untuk melihat id selain yang dipilih ↖

  // apa bila check true / data categories sudah ada maka kita tampilkan error bad request dengan message kategori nama duplikat
  if (check) throw new BadRequestError("kategori nama duplikat");

  const result = await Categories.findOneAndUpdate(
    { _id: id },
    { name },
    { new: true, runValidators: true }
  );

  // jika id result false / null maka akan menampilkan error `Tidak ada Kategori dengan id` yang dikirim client
  if (!result) throw new NotFoundError(`Tidak ada Kategori dengan id :  ${id}`);

  return result;
};

const deleteCategories = async (req) => {
  const { id } = req.params;

  const result = await Categories.findOne({
    _id: id,
  });

  if (!result) throw new NotFoundError(`Tidak ada Kategori dengan id :  ${id}`);

  await result.remove();

  return result;
};

const checkingCategories = async (id) => {
  const result = await Categories.findOne({ _id: id });

  if (!result) throw new NotFoundError(`Tidak ada Kategori dengan id :  ${id}`);

  return result;
};

module.exports = {
  getAllCategories,
  createCategories,
  getOneCategories,
  updateCategories,
  deleteCategories,
  checkingCategories,
};

const macBooks = [
  { name: "mac air", size: 13, chipSet: "m2", id: 0 },
  { name: "mac pro 13", size: 13, chipSet: "m2", id: 1 },
  { name: "mac pro 14", size: 14, chipSet: "m1 pro", id: 2 },
  { name: "mac pro 16", size: 16, chipSet: "m1 max", id: 3 },
];

export const home = (req, res) => {
  return res.render("home", { macBooks });
};

export const showMac = (req, res) => {
  const { id } = req.params;
  const mac = macBooks[id];
  return res.render("detail", { mac });
};

export const getEditMac = (req, res) => {
  const { id } = req.params;
  const mac = macBooks[id];
  return res.render("editMac", { mac });
};
export const postEditMac = (req, res) => {
  const { id } = req.params;
  const { name, size, chipSet } = req.body; // post는 데이터를 body에 담아서 보낸다.  get은 body가 없고, 데이터를 쿼리스트링에 담아서 보낸다.
  const mac = macBooks[id];
  mac.name = name;
  mac.size = size;
  mac.chipSet = chipSet;
  return res.redirect("/");
};

export const getUpload = (req, res) => {
  return res.render("upload");
};
export const postUpload = (req, res) => {
  const { name, size, chipSet } = req.body;
  const newMac = {
    name,
    size,
    chipSet,
  };
  macBooks.push(newMac);
  return res.redirect("/");
};

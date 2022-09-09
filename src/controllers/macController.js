import User from "../models/User";

export const home = (req, res) => {
  User.find({}, (error, videos) => {
    console.log("error", error);
    console.log("users", videos);
  });
  return res.render("home", { macs: [] });
};

export const macDetail = (req, res) => {
  const id = req.params.id;
  const mac = macs[id];
  return res.render("detail", { mac });
};

export const getMacEdit = (req, res) => {
  const { id } = req.params;
  const mac = macs[id];
  return res.render("edit", { mac });
};

export const postMacEdit = (req, res) => {
  const { id } = req.params;
  const { name, value } = req.body;
  const mac = macs[id];
  mac.name = name;
  mac.value = value;
  return res.redirect("/");
};

export const getUpload = (req, res) => {
  return res.render("upload");
};

export const postUpload = (req, res) => {
  const id = macs.length;
  const { name, value } = req.body;
  const mac = {
    name,
    id,
    value,
  };
  macs.push(mac);
  return res.redirect("/");
};

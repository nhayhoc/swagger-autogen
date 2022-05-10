function HashName({ name, path }) {
    // [name]__[local]--[hash:base64:5]
    let str = name;
    str += "__";
    str += path.split("/").slice(-2)[0];
    str += "--";
    str += Buffer.from(str).toString("base64").slice(0, 5);
    return str;
}
module.exports = HashName;
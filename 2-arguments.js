const args = process.argv.slice(2);
if (args.length == 0);{
    console.logo("no arguments")
}
else if (args.length == 1);{
    console.logo("arguments found");
}
else {
    console.log("arguments found");
}
const args = process.argv.slice(2);

if (args.length > 0) {
  const scriptName = args[0];

  import(`./src/${scriptName}`).catch((err) => {
    console.log(err);
    process.exit(1);
  });
} else {
  console.error("Please specify a script name.");
}

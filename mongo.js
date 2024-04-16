const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

//const url = `mongodb+srv://andreeacsecs:${password}@cluster0.o1opl.mongodb.net/phonebookDatabase?retryWrites=true&w=majority`;
const url = `mongodb+srv://andreeacsecs:${password}@cluster0.nckmic0.mongodb.net/phonebookDatabase?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const entrySchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Entry = mongoose.model("Entry", entrySchema);

if (process.argv.length === 3) {
  // Display all entries
  Entry.find({}).then((entries) => {
    console.log("phonebook:");
    entries.forEach((entry) => {
      console.log(`${entry.name} ${entry.number}`);
    });
    mongoose.connection.close();
  });
} else if (process.argv.length === 5) {
  // Add new entry
  const entry = new Entry({
    name: process.argv[3],
    number: process.argv[4],
  });

  entry.save().then(() => {
    console.log(
      `added ${process.argv[3]} number ${process.argv[4]} to phonebook`
    );
    mongoose.connection.close();
  });
} else {
  console.log("Invalid number of arguments.");
  process.exit(1);
}

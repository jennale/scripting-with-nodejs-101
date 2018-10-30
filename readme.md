# Node.js scripting samples 📝 

A few introductory code samples to demonstrate how you can solve problems (or occasionally make life easier) by writing NodeJS scripts.

Useful for when you only vaguely remember `bash` but have been writing Javascript all day. 

Thanks to the London Front End Developer Meetup for having me speak about this topic. The keynote lives in the /slides folder.

## 🛠 Getting started 
Requires Node ^8.9.1

```bash
npm install  # or yarn install
```

----------

## 💁🏻‍ Walking through the samples 

### `/helloworld` - A simple introductory example
The most basic of the basic helloworld examples, which prints a tiny "hello world" in your terminal.

In the terminal, run:
```bash
node helloworld/index.js  # prints a simple, "hello world"
```

----------

### `/photos` - Reading and manipulating files, gathering data
An example using `fs`, `path`, and `image-size-probe` that shows you how to write a simple script to do file management tasks, and demonstrates how a small script can solve a specific problem. Observe the code and see how:
* `photos1.js` reads, renames, and copies a directory of photos
* `photos2.js` returns an object with keys containing the image sizes of every individual photo
    * Data is returned in the format: `{ "100 x 100" : [ "photo-1.jpg", "photos-6.jpg" ] }`

----------

### `/fast` - Setting up a cli tool / bin alias
An example that will open a native MacOS mini browser to fast.com, used to quickly check your connection speed from the command line. 

This tool shows how you can create a bin/cli command accessible across your system.

Notice that:
* fast/fast.js has a hashbang `#!/usr/bin/env node` on the very top of the file, telling your system that it's an executable node script.

* the package.json contains a bin designation: 
  ```json
  "bin" {
      "howfast" : "./fast/fast.js"
  }
  ```
  This will link the script to a `howfast` command after `npm link` is run.

In the terminal, run
```bash
npm link    # use `npm unlink` to undo these changes if needed

# Run the script by using:
node fast/fast.js    # within this folder directory
                        # or
howfast                 # after npm link has run
```

----------

### `/excel-watcher` - Using Node.js to help with non-dev related tasks
An example recreating the pattern of "watch a file -> modify a file -> write a new file/result" that many dev tools use. 

In this case, we use it for something non-web related: This node script will start a process that watches changes to an excel file (with calculations), and converts it into plain csv every time it detects a change.

This example demonstrates how you can use Javascript to create tools for non-development related projects!

```bash
node excel-watcher/excelhelper.js   

# Starts a watch process, watches excel.xlsx and generates excel.csv on every change.
```

----------

#### Things to improve

Here's where things can improve:  (PR if you please! 🙂)

- Make `excelhelper.js`, `photos.js` accept parameters
- Take `howfast` one step further by using a headless browser, reading the `<div>` containing the speed value on the site, and printing it into the console.
- add a http/dns lookup to the `howfast` command to make sure it fails gracefully when the service is down/there is no internet.
- Sprinkle in more try/catch and error statements

---------

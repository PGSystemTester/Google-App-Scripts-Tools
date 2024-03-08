# Move Files Folder Process

## Detail and Purpose
- The below code will **move** all files and folders to a different folder.
- This was specifically built to be run every minute to sweep all files from a PUBLIC folder to a private folder.
- This is *not* a secure way to consistently share files as a similar script could be read to read a public folder, however for one time usages for low sensativity data, it may be useful.


## Code
```js
/*Moves files from a public folder to a private foler
allows a "public" folder to exist where files are public for less than 30 seconds and then moved to a private folder destination by way of script below
*/
function moveFileLoacation() {
  const id_PullFolder = '<----copyFROMfolder ID---->';
  const id_DestinationtFolder = '<----destinationFolder ID---->';

  const pullFolder = DriveApp.getFolderById(id_PullFolder);
  const destinationFolder = DriveApp.getFolderById(id_DestinationtFolder);

  //Moves all files
  var allFiles = pullFolder.getFiles();
  while (allFiles.hasNext()) {
    allFiles.next().moveTo(destinationFolder);
  }

  //moves all folders
  var allFolders = pullFolder.getFolders();
  while (allFolders.hasNext()) {
    allFolders.next().moveTo(destinationFolder);
  }
}

```

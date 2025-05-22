## extractFolderID

Pulls folder ID from URL


````js
/**
 * Extracts the Google Drive folder ID from a folder URL.
 *
 * @param {string} url - The URL of the Google Drive folder.
 * @returns {string|null} - The extracted folder ID, or null if not found.
 */
function extractFolderId_(url) {
  var regex = /\/folders\/([a-zA-Z0-9-_]+)/;
  var match = url.match(regex);
  return match ? match[1] : null;
}
````

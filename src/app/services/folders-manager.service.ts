import { Injectable } from '@angular/core';

import * as $rdf from 'rdflib';

const folderType = 'folder';

@Injectable({
  providedIn: 'root'
})
export class FoldersManagerService {

  constructor() { }

  getStats = (graph, subjectName): {[k: string]: any} => {
    const subjectNode = $rdf.sym(subjectName);
    const mod = $rdf.sym('http://purl.org/dc/terms/modified');
    const size = $rdf.sym('http://www.w3.org/ns/posix/stat#size');
    const mtime = $rdf.sym('http://www.w3.org/ns/posix/stat#mtime');
    let  modified = graph.any(subjectNode, mod, undefined);
    if (typeof(modified) === undefined) {
      throw new class implements Error {
        message: string;
        name: string;
        stack: string;
      };
    } else {
      modified = modified.value;
    }
    return {
      modified: modified,
      size: graph.any(subjectNode, size, undefined).value,
      mtime: graph.any(subjectNode, mtime, undefined).value,
    };
  }

  /**
   * @param {$rdf.IndexedFormula} graph a $rdf.graph() database instance
   * @param {string} url location of the folder
   * @returns {string} content mime-type of a file, If it's a folder, return 'folder', 'unknown' for not sure
   */
  getFileType = (graph, url) => {
    const folderNode = $rdf.sym(url);
    const isAnInstanceOfClass = $rdf.sym('http://www.w3.org/1999/02/22-rdf-syntax-ns#type');
    const types = graph.each(folderNode, isAnInstanceOfClass, undefined);
    for (const type of types) {
      const contentType = type.value;
      if (contentType.match('ldp#BasicContainer')) {
        return folderType;
      }
      if (contentType.match('http://www.w3.org/ns/iana/media-types/')) {
        return contentType.replace('http://www.w3.org/ns/iana/media-types/', '').replace('#Resource', '');
      }
    }
    return 'unknown';
  }

  getFolderItems = (graph, subj) => {
    const contains = { folders : [], files   : [] };
    const itemsTmp = graph.each(
        $rdf.sym(subj),
        $rdf.sym('http://www.w3.org/ns/ldp#contains'),
        undefined
    );
    // self.log("Got "+itemsTmp.length+" items")
    for (let i = 0; i < itemsTmp.length; i++) {
      const item = itemsTmp[i];
      const newItem: {[k: string]: any} = {};
      newItem.type = this.getFileType(graph, item.value);
      const stats = this.getStats(graph, item.value);
      newItem.modified = stats.modified;
      newItem.size = stats.size;
      newItem.mtime = stats.mtime;
      newItem.label = decodeURIComponent(item.value).replace( /.*\//, '');
      if (newItem.type === folderType) {
        item.value = item.value.replace(/[/]+/g, '/');
        item.value = item.value.replace(/https:/, 'https:/');
        const name = item.value.replace( /\/$/, '');
        newItem.name = name.replace( /.*\//, '');
        newItem.url  = item.value;
        contains.folders.push(newItem);
      } else {
        newItem.url = item.value;
        newItem.name = item.value.replace(/.*\//, '');
        contains.files.push(newItem);
      }
    }
    return contains;
  }

  /**
   * @param {$rdf.IndexedFormula} graph a $rdf.graph() database instance
   * @param {string} url location of the folder
   * @param {string} content raw content of the folder's RDF (turtle) representation,
   * @returns {Object} FolderData
   */
  processFolder = (graph, url, content) => {
    const items = this.getFolderItems(graph, url);
    const stats = this.getStats(graph, url);
    const fullName = url.replace(/\/$/, '');
    const name = fullName.replace(/.*\//, '');
    const parent = fullName.replace(name, '');
    return {
      type: folderType,
      name,
      url,
      modified: stats.modified,
      size: stats.size,
      mtime: stats.mtime,
      parent,
      content,
      folders: items.folders,
      files: items.files,
    };
  }
  guessFileType = (url) => {
    const ext = url.replace(/.*\./, '');
    if (ext.match(/\/$/)) {
      return folderType;
    }
    if (ext.match(/(md|markdown)/)) {
      return 'text/markdown';
    }
    if (ext.match(/html/)) {
      return 'text/html';
    }
    if (ext.match(/xml/)) {
      return 'text/xml';
    }
    if (ext.match(/ttl/)) {
      return 'text/turtle';
    }
    if (ext.match(/n3/)) {
      return 'text/n3';
    }
    if (ext.match(/rq/)) {
      return 'application/sparql';
    }
    if (ext.match(/css/)) {
      return 'text/css';
    }
    if (ext.match(/txt/)) {
      return 'text/plain';
    }
    if (ext.match(/json/)) {
      return 'application/json';
    }
    if (ext.match(/js/)) {
      return 'application/javascript';
    }
    if (ext.match(/(png|gif|jpeg|tif)/)) {
      return 'image';
    }
    if (ext.match(/(mp3|aif|ogg)/)) {
      return 'audio';
    }
    if (ext.match(/(avi|mp4|mpeg)/)) {
      return 'video';
    }
    return 'text/turtle';
  }

  /**
   * @param {string} text RDF text that can be passed to $rdf.parse()
   * @param {*} content the request body
   * @param {string} contentType Content-Type of the request
   * @returns {$rdf.IndexedFormula} a $rdf.graph() database instance with parsed RDF
   */
  text2graph = async (text, url, contentType) => {
    return new Promise((resolve, reject) => {
      contentType = contentType || this.guessFileType(url);
      const graph = $rdf.graph();
      try {
        $rdf.parse(text, graph, url, contentType);
        resolve(graph);
      } catch (err) {
        reject(err);
      }
    });
  }
}

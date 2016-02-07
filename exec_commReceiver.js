/**
 * exec_commReceiver.js
 * 
 * execute the commReceiver.js 
 * 
 * Author: Praween AMONTAMAVUT (Hayakawa Laboratory)
 * E-mail: praween@hykwlab.org
 * Create date: 2015-09-25
 */
//'use strict';
var commReceiver = require('./commReceiver.js');
var exec = new commReceiver({redis:{host:"0.0.0.0"},listenport:8596});
//exec.listen(8595);
exec.listen();

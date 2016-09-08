import "jquery";
global.Tether = require('tether');
import "bootstrap";
import "../css/bootstrap.css";
var Elm = require( '../elm/Main' );
var elmDiv = document.getElementById('elm-main')
, elmApp = Elm.Main.embed(elmDiv);

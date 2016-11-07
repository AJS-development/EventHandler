"use strict"
module.exports = class EventHandler {
 constructor() {
   this.events = {};
  this.saved = [];
 }
 save() {
  var cloned = {}
  for (var i in this.events) cloned[i] = this.events[i]
  this.saved.push(cloned)
 }
 restore() {
  this.events = this.saved.pop()
  
 }
 clearAll() {
  this.events = {};
 }
 events() {
  var a = []
  for (var i in this.events) a.push(i)
   return a
   
 }
  on(event,call) {
  this.events[event] = call;
  }
  
}

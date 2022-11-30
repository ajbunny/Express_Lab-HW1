const express = require('express');
const app = express();
const port = 3000
const fs = require('fs');

app.engine('madeline', (filePath, options, callback) => {
fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    const rendered = content.toString()
    .replace('#title#', '<title>' + options.title + '</title>')
    .replace('#message#', '<h1>' + options.message + '</h1>')
    .replace('#content#','<div>'+ options.content + '</div>' )
    
  return callback(null, rendered)
})
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'madeline')

app.get('/', (req, res) => { 
  res.render('home', { title: 'Hello', message: 'One', content: 'Unique' })
})
app.get('/one', (req, res) => {
    res.render('away', { title: 'Hey', message: 'Two', content: 'Thats what you are' })
  })
  app.get('/two', (req, res) => {
    res.render('home', { title: 'Hey', message: 'Three', content: 'Stilettos kicking vintage crystal off the bar' })
  })
  app.get('/three', (req, res) => {
    res.render('away', { title: 'Hey', message: 'Four', content: 'Category....bad b****' })
  })

  app.get('/four', (req, res) => {
    res.render('home', { title: 'Hey', message: 'Five', content: 'Im the bar ' })
  })

  app.get('/five', (req, res) => {
    res.render('away', { title: 'Hey', message: 'Six', content: 'Alien superstar ' })
  })

  app.get('/six', (req, res) => {
    res.render('home', { title: 'Hey', message: 'Seven', content: 'Hit me with a -- whip, whip' })
  })

  app.get('/seven', (req, res) => {
    res.render('away', { title: 'Hey', message: 'Eight', content: 'Im too classy for this world' })
  })
  
  app.get('/eight', (req, res) => {
    res.render('away', { title: 'Hey', message: 'Nine', content: 'Forever Im that girl' })
  })
  app.get('/nine', (req, res) => {
    res.render('home', { title: 'Hey', message: 'Ten', content: 'Feed you diamonds and pearls!!' })
  })

  





app.listen(3000, () => {
    console.log('listening');
})
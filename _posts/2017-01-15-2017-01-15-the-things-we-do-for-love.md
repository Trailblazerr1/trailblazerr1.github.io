---
layout: post
published: true
title: The Things we do for love
date: '2017-01-15'
subtitle: Jaime Lannister was always right.
---
## The Things we do for love

Choosing a book is an humongous task, not as humongous as looking for a girl, though. Sometimes, it took me hours to find a  perfect thriller for me from the library website. First Ramble around the library website scanning among the clutter of books, then look for its review on goodreads, the whole routine wasn't appealing.   
So the first thing I embarked upon from coming from holidays was to automate this whole 'book-finding' task for me.   
Since python came handy and api's are always free, it wasn't a problem. 
![Screenshot from 2017-01-15 17-59-05.png]({{site.baseurl}}/img/Screenshot%20from%202017-01-15%2017-59-05.png)    
   
So, first I scraped the data from our library website with beautiful-soup and requests and got the list of all the book(not study books) in there. Then I sent that data repeatedly to google books api and get their genres. If the book's genre matched the requested genre the book was displayed, otherwise the script keeps on looking, leaving you to enjoy your favorite song.  

##Lessons learnt
- 'try' and 'except' blocks could be life-saver sometimes.
- gzip is handy for making loads of requests.
- Never try to scrape google's search results.
- Beautiful soup has the best documentation among all python modules.
- Love of any form whether be it a girl or a book, makes you do strange things. :)



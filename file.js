var myCanvas = document.getElementById('mycanvas'),

myContext = myCanvas.getContext('2d');

//(X ,Y ,WIDTH ,HEIGHT) 
myContext.fillStyle = 'blue';
myContext.fillRect(5, 10 ,50, 50);

// ofc if we eant we can creat more than one Box with a different color
 myContext.fillStyle = 'red';
 myContext.fillRect(10,15,50,50);

 myContext.fillStyle = 'yellow';
 myContext.fillRect(15,20,50,50);


//-------------------------------

//  now we will make /Stroke/ and it means the border of the element in JS. 
//here the /strokeStyle/ is a border inside our Canvas and the /styleRect/ is to make our stroke colourfull.


 myContext.strokeStyle = 'yellow';
 myContext.strokeRect(80,80, 100,50);

// now we go to the page on chrome and choose inspect and click right mouse and w will see we can save it as image 😲 wow amazing right??

 myContext.fillRect = (0,0 ,800,400);
 myContext.clearRect(100,100, 100,100);
